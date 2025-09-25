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



   if ( function_exists( 'bb_fs' ) ) {
        bb_fs()->set_basename( true, __FILE__ );
    } else {
		// Constant
	define( 'BTMS_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
	define( 'BTMS_DIR_URL', plugin_dir_url( __FILE__ ) );
	define( 'BTMS_DIR_PATH', plugin_dir_path( __FILE__ ) );
	define( 'BTMS_HAS_PRO', file_exists( dirname(__FILE__) . '/freemius/start.php' ) );
        if ( ! function_exists( 'bb_fs' ) ) {
    // Create a helper function for easy SDK access.
    function bb_fs() {
        global $bb_fs;

        if ( ! isset( $bb_fs ) ) {
			if(BTMS_HAS_PRO){
				require_once dirname( __FILE__ ) . '/freemius/start.php';
			}else{
				require_once dirname( __FILE__ ) . '/freemius-light/start.php';
			}
			$btms_config= array(
                'id'                  => '20878',
                'slug'                => 'btms-block',
                'type'                => 'plugin',
                'public_key'          => 'pk_f59a4867d8a87ae45bc5c97962bd7',
                'is_premium'          => true,
                'premium_suffix'      => 'pro',
                // If your plugin is a serviceware, set this option to false.
                'has_premium_version' => true,
                'has_addons'          => false,
                'has_paid_plans'      => true,
                // Automatically removed in the free version. If you're not using the
                // auto-generated free version, delete this line before uploading to wp.org.
                'wp_org_gatekeeper'   => 'OA7#BoRiBNqdf52FvzEf!!074aRLPs8fspif$7K1#4u4Csys1fQlCecVcUTOs2mcpeVHi#C2j9d09fOTvbC0HloPT7fFee5WdS3G',
                'trial'               => array(
                    'days'               => 3,
                    'is_require_payment' => false,
                ),
                'menu'                => array(
                    'first-path'     => 'edit.php?post_type=btms_team_section&page=demo_page',
                    'contact'        => false,
                    'support'        => false,
                ),
            );
         
            $bb_fs = BTMS_HAS_PRO ? fs_dynamic_init( $btms_config ) : fs_light_dynamic_init( $btms_config );
        }

        return $bb_fs;
    }

    // Init Freemius.
    bb_fs();
    // Signal that SDK was initiated.
    do_action( 'bb_fs_loaded' );
}
       
 	function btmsIsPremium(){
		return BTMS_HAS_PRO ? bb_fs()->can_use_premium_code() : false;
	}

     // ... Your plugin's main file logic ...
	if ( ! class_exists( 'BTMSPlugin' ) ) {
	class BTMSPlugin {
		function __construct() {
			add_action( 'init', [ $this, 'onInit' ] );
			add_filter( 'manage_btms_team_section_posts_columns', [ $this, 'cptColumns' ] );
			add_action( 'manage_btms_team_section_posts_custom_column', [ $this, 'manageCptColumns' ], 10, 2 );
			add_shortcode( 'btms_team_section', [ $this, 'btmsShortcode' ] );
			add_action( 'admin_enqueue_scripts', [ $this, 'adminEnqueueScripts' ] );
			add_action( 'admin_menu', [ $this, 'add_demo_submenu' ] );

			// for premium only
			add_action('wp_ajax_btmsPremiumChecker', [$this, 'btmsPremiumChecker']);
			add_action('wp_ajax_nopriv_btmsPremiumChecker', [$this, 'btmsPremiumChecker']);
			add_action('admin_init', [$this, 'registerSettings']);
			add_action('rest_api_init', [$this, 'registerSettings']);
		}
		function btmsPremiumChecker(){
				$nonce = sanitize_text_field($_POST['_wpnonce'] ?? null);

				if (!wp_verify_nonce($nonce, 'wp_ajax')) {
					wp_send_json_error('Invalid Request');
				}

				wp_send_json_success([
					'isPipe' => btmsIsPremium()
				]);
			}

			function registerSettings(){
				register_setting('btmsUtils', 'btmsUtils', [
					'show_in_rest' => [
						'name' => 'btmsUtils',
						'schema' => ['type' => 'string']
					],
					'type' => 'string',
					'default' => wp_json_encode(['nonce' => wp_create_nonce('wp_ajax')]),
					'sanitize_callback' => 'sanitize_text_field'
				]);
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
					'isPremium' => btmsIsPremium(),
					'hasPro'    => BTMS_HAS_PRO,
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

 }







