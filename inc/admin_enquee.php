<?php


class BTMSPlugin {
    function __construct() {
        add_action( 'admin_enqueue_scripts', [ $this, 'adminEnqueueScripts' ] );
    }

    function adminEnqueueScripts( $screen ): void {
        global $typenow;
        if ( 'btms_team_section' === $typenow ) {
            wp_enqueue_script( 'admin-post-js', BTMS_DIR_URL . 'build/admin-post.js', [], BTMS_VERSION, true );
            wp_enqueue_style( 'admin-post-css', BTMS_DIR_URL . 'build/admin-post.css', [], BTMS_VERSION );

            if ( $screen === 'btms_team_section_page_demo_page' ) {
                wp_enqueue_script(
                    'bpl-admin-dashboard-js',
                    BTMS_DIR_URL . 'build/admin-dashboard.js',
                    [ 'react', 'react-dom', 'react-jsx-runtime' ],
                    BTMS_VERSION,
                    true
                );
                wp_enqueue_style( 'bpl-admin-dashboard-css', BTMS_DIR_URL . 'build/admin-dashboard.css', [], BTMS_VERSION );
            }

            wp_localize_script( 'bpl-admin-dashboard-js', 'hrbData', [
                'nonce'   => wp_create_nonce( 'hrb_nonce' ),
                'ajaxUrl' => admin_url( 'admin-ajax.php' )
            ] );
        }
    }
}

?>