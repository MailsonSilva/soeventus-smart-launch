<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php wp_title('|', true, 'right'); bloginfo('name'); ?></title>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<header class="site-header">
    <div class="container">
        <div class="header-content">
            <a href="<?php echo home_url(); ?>" class="logo">
                <?php bloginfo('name'); ?>
            </a>
            
            <nav class="main-nav">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'container' => false,
                    'menu_class' => '',
                    'fallback_cb' => function() {
                        echo '<ul>
                            <li><a href="#features">Recursos</a></li>
                            <li><a href="#pricing">Preços</a></li>
                            <li><a href="#contact">Contato</a></li>
                        </ul>';
                    }
                ));
                ?>
            </nav>
            
            <div class="header-buttons">
                <a href="<?php echo get_theme_mod('login_link', '/login'); ?>" class="btn btn-outline">Entrar</a>
                <a href="<?php echo get_theme_mod('cta_link', '/capture'); ?>" class="btn btn-primary">
                    <?php echo get_theme_mod('cta_text', 'Começar Grátis'); ?>
                </a>
            </div>
        </div>
    </div>
</header>