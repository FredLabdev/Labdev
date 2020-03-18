<?php
// nous appelons notre nouvelle fonction au moment où WordPress charge les scripts
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
// nous créons une fonction pour ajouter les styles du parent. 
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}

function script_addon_register() {
    // Déclarer le JS
	wp_enqueue_script('javascript_addon2', get_stylesheet_directory_uri() . '/fullpage.js',array( 'jquery' ), beonepage_get_version(), true );
    // Déclarer le JS
	wp_enqueue_script('javascript_addon', get_stylesheet_directory_uri() . '/script_addon.js',array( 'jquery' ), beonepage_get_version(), true );
    // Déclarer la bibliothèque Fontawesome
    wp_enqueue_script('fontawesome', 'https://kit.fontawesome.com/05d0aae19f.js', true );
}
add_action( 'wp_enqueue_scripts', 'script_addon_register' );