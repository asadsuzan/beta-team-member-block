<?php
/**
 * Plugin Name: Team Section 
 * Description:  A team section plugin with multiple styles and layouts with easy to use interface.
 * Version: 1.0.0
 * Author: void
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: btms-block
 */

// ABS PATH
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Constant
define( 'BTMS_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
define( 'BTMS_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'BTMS_DIR_PATH', plugin_dir_path( __FILE__ ) );

if ( ! class_exists( 'BTMSPlugin' ) ) {
	class BTMSPlugin {
		function __construct() {
			add_action( 'init', [ $this, 'onInit' ] );
			add_filter( 'manage_btms_team_section_posts_columns', [ $this, 'cptColumns' ] );
			add_action( 'manage_btms_team_section_posts_custom_column', [ $this, 'manageCptColumns' ], 10, 2 );
			add_shortcode( 'btms_team_section', [ $this, 'btmsShortcode' ] );
			add_action( 'admin_enqueue_scripts', [ $this, 'adminEnqueueScripts' ] );
			add_action( 'admin_menu', [ $this, 'add_demo_submenu' ] );
		}
        
		function onInit() {
			register_block_type( __DIR__ . '/build' );
			register_post_type(
				'btms_team_section',
				[
					'label'               => 'Team Section',
					'labels'              => [
						'add_new'       => 'Add New',
						'add_new_item'  => 'Add New',
						'edit_item'     => 'Edit',
						'not_found'     => 'There was no team section please add one',
					],
					'show_in_rest'       => true,
					'public'             => true,
					'publicly_queryable' => false,
					'menu_icon'          => 'dashicons-groups',
					'item_published'     => 'Published',
					'item_updated'       => 'Updated',
					'template'           => [ [ 'btms-block/team-section' ] ],
					// 'template_lock' => 'all',
				]
			);
		}

		function add_demo_submenu() {
			add_submenu_page(
				'edit.php?post_type=btms_team_section',
				'Demo and Help',
				'Demo & Help',
				'manage_options',
				'demo_page',
				[ $this, 'render_demo_page' ]
			);
		}
				
		function render_demo_page() { 
			?>
			<div
				id='btms-admin-dashboard'
				data-info='<?php echo esc_attr( wp_json_encode( [
					'version'   => BTMS_VERSION,
					'isPremium' => false,
					'hasPro'    => false,
				] ) ); ?>'
			></div>
			<?php
		}
         
		public function manageCptColumns( string $columnName, int $postId ): void {
			if ( 'shortcode' === $columnName ) {
				echo '<div class="bPlAdminShortcode" id="bPlAdminShortcode-' . esc_attr( $postId ) . '">
						<input value="[btms_team_section id=' . esc_attr( $postId ) . ']" onclick="copyBPlAdminShortcode(\'' . esc_attr( $postId ) . '\')" readonly>
						<span class="tooltip">Copy To Clipboard</span>
					</div>';
			}

			if ( 'publisher' === $columnName ) {
				echo 'bplugins';
			}
		}

		public function displayContent( \WP_Post $post ): string {
			$blocks = parse_blocks( $post->post_content );
			return render_block( $blocks[0] );
		}

		public function cptColumns( array $columns ): array {
			unset( $columns['date'] );
			$columns['shortcode'] = 'Shortcode';
			$columns['date']      = 'Date';
			$columns['publisher'] = 'Publisher';
			return $columns;
		}
	
		function btmsShortcode( $atts ) {
			if ( ! isset( $atts['id'] ) ) {
				$attr_string = '';
				foreach ( $atts as $key => $value ) {
					$attr_string .= $key . '="' . esc_attr( $value ) . '" ';
				}
				$shortcode = '[bypass_audio_player ' . trim( $attr_string ) . ']';
				return do_shortcode( $shortcode );
			}

			$post_id = $atts['id'];
			$post    = get_post( $post_id );

			if ( ! $post ) {
				return '';
			}

			if ( post_password_required( $post ) ) {
				return get_the_password_form( $post );
			}

			switch ( $post->post_status ) {
				case 'publish':
					return $this->displayContent( $post );
					
				case 'private':
					if ( current_user_can( 'read_private_posts' ) ) {
						return $this->displayContent( $post );
					}
					return '';
					
				case 'draft':
				case 'pending':
				case 'future':
					if ( current_user_can( 'edit_post', $post_id ) ) {
						return $this->displayContent( $post );
					}
					return '';
					
				default:
					return '';
			}
		}

		public function adminEnqueueScripts( $screen ): void {
			global $typenow;

			if ( 'btms_team_section' === $typenow ) {
				wp_enqueue_script( 'admin-post-js', BTMS_DIR_URL . 'build/admin-post.js', [], BTMS_VERSION, true );
				wp_enqueue_style( 'admin-post-css', BTMS_DIR_URL . 'build/admin-post.css', [], BTMS_VERSION );

				if ( $screen === 'btms_team_section_page_demo_page' ) {
					wp_enqueue_script( 'bpl-admin-dashboard-js', BTMS_DIR_URL . 'build/admin-dashboard.js', [ 'react', 'react-dom', 'react-jsx-runtime' ], BTMS_VERSION, true );
					wp_enqueue_style( 'bpl-admin-dashboard-css', BTMS_DIR_URL . 'build/admin-dashboard.css', [], BTMS_VERSION );
				}
			}
		}
	}

	new BTMSPlugin();
}
