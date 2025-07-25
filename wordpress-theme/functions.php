<?php
// Configuração do tema
function saas_theme_setup() {
    // Suporte a título dinâmico
    add_theme_support('title-tag');
    
    // Suporte a imagens destacadas
    add_theme_support('post-thumbnails');
    
    // Suporte a menus
    add_theme_support('menus');
    
    // Registrar menus
    register_nav_menus(array(
        'primary' => 'Menu Principal',
        'footer' => 'Menu do Footer'
    ));
    
    // Tamanhos de imagem personalizados
    add_image_size('feature-thumb', 400, 300, true);
}
add_action('after_setup_theme', 'saas_theme_setup');

// Enfileirar scripts e estilos
function saas_theme_scripts() {
    // CSS do tema
    wp_enqueue_style('saas-theme-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // JavaScript personalizado
    wp_enqueue_script('saas-theme-script', get_template_directory_uri() . '/js/theme.js', array('jquery'), '1.0.0', true);
    
    // Font Awesome (opcional)
    wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
}
add_action('wp_enqueue_scripts', 'saas_theme_scripts');

// Customizer - Opções do tema
function saas_theme_customizer($wp_customize) {
    // Seção Hero
    $wp_customize->add_section('hero_section', array(
        'title' => 'Seção Hero',
        'priority' => 30,
    ));
    
    // Título Hero
    $wp_customize->add_setting('hero_title', array(
        'default' => 'Transforme Sua Ideia em Realidade',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('hero_title', array(
        'label' => 'Título Hero',
        'section' => 'hero_section',
        'type' => 'text',
    ));
    
    // Subtítulo Hero
    $wp_customize->add_setting('hero_subtitle', array(
        'default' => 'A plataforma completa para criar, gerenciar e escalar seu negócio digital.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    
    $wp_customize->add_control('hero_subtitle', array(
        'label' => 'Subtítulo Hero',
        'section' => 'hero_section',
        'type' => 'textarea',
    ));
    
    // Texto do CTA
    $wp_customize->add_setting('cta_text', array(
        'default' => 'Começar Grátis',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('cta_text', array(
        'label' => 'Texto do Botão CTA',
        'section' => 'hero_section',
        'type' => 'text',
    ));
    
    // Link do CTA
    $wp_customize->add_setting('cta_link', array(
        'default' => '/capture',
        'sanitize_callback' => 'esc_url_raw',
    ));
    
    $wp_customize->add_control('cta_link', array(
        'label' => 'Link do Botão CTA',
        'section' => 'hero_section',
        'type' => 'url',
    ));
    
    // Link de Login
    $wp_customize->add_setting('login_link', array(
        'default' => '/login',
        'sanitize_callback' => 'esc_url_raw',
    ));
    
    $wp_customize->add_control('login_link', array(
        'label' => 'Link de Login',
        'section' => 'hero_section',
        'type' => 'url',
    ));
}
add_action('customize_register', 'saas_theme_customizer');

// Widget areas
function saas_theme_widgets_init() {
    register_sidebar(array(
        'name' => 'Sidebar Principal',
        'id' => 'main-sidebar',
        'description' => 'Sidebar principal do site',
        'before_widget' => '<div class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
    
    register_sidebar(array(
        'name' => 'Footer Widget 1',
        'id' => 'footer-1',
        'description' => 'Primeira coluna do footer',
        'before_widget' => '<div class="footer-widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
}
add_action('widgets_init', 'saas_theme_widgets_init');

// Shortcode para botão CTA
function saas_cta_button_shortcode($atts) {
    $atts = shortcode_atts(array(
        'text' => 'Começar Grátis',
        'link' => '/capture',
        'style' => 'primary'
    ), $atts);
    
    return '<a href="' . esc_url($atts['link']) . '" class="btn btn-' . esc_attr($atts['style']) . '">' . esc_html($atts['text']) . '</a>';
}
add_shortcode('cta_button', 'saas_cta_button_shortcode');

// Remover version do WordPress do head
remove_action('wp_head', 'wp_generator');

// Otimizações de performance
function saas_remove_wp_version_strings($src) {
    global $wp_version;
    parse_str(parse_url($src, PHP_URL_QUERY), $query);
    if (isset($query['ver']) && $query['ver'] === $wp_version) {
        $src = remove_query_arg('ver', $src);
    }
    return $src;
}
add_filter('script_loader_src', 'saas_remove_wp_version_strings');
add_filter('style_loader_src', 'saas_remove_wp_version_strings');
?>