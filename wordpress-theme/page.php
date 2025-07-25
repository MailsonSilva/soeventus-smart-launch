<?php get_header(); ?>

<main class="main-content" style="padding-top: 100px;">
    <div class="container">
        <?php while(have_posts()): the_post(); ?>
            <article class="page-content" style="max-width: 1000px; margin: 0 auto; padding: 2rem 0;">
                
                <header class="page-header" style="margin-bottom: 3rem; text-align: center;">
                    <h1 style="font-size: 3rem; color: #1e293b; margin-bottom: 1rem;"><?php the_title(); ?></h1>
                    
                    <?php if(has_excerpt()): ?>
                        <div class="page-excerpt" style="font-size: 1.2rem; color: #475569; max-width: 600px; margin: 0 auto;">
                            <?php the_excerpt(); ?>
                        </div>
                    <?php endif; ?>
                </header>
                
                <?php if(has_post_thumbnail()): ?>
                    <div class="page-featured-image" style="margin-bottom: 3rem; text-align: center;">
                        <?php the_post_thumbnail('large', array('style' => 'max-width: 100%; border-radius: 12px;')); ?>
                    </div>
                <?php endif; ?>
                
                <div class="page-content" style="line-height: 1.8; color: #334155; font-size: 1.1rem;">
                    <?php the_content(); ?>
                </div>
                
                <!-- CTA para páginas específicas -->
                <?php if(is_page(array('sobre', 'about', 'contato', 'contact'))): ?>
                    <div class="page-cta" style="margin-top: 4rem; padding: 3rem; background: #f8fafc; border-radius: 12px; text-align: center;">
                        <h3 style="margin-bottom: 1rem; color: #1e293b;">Interessado em nossa solução?</h3>
                        <p style="margin-bottom: 2rem; color: #475569;">Descubra como podemos ajudar seu negócio a crescer.</p>
                        <a href="<?php echo get_theme_mod('cta_link', '/capture'); ?>" class="btn btn-primary">
                            <?php echo get_theme_mod('cta_text', 'Começar Grátis'); ?>
                        </a>
                    </div>
                <?php endif; ?>
                
            </article>
        <?php endwhile; ?>
    </div>
</main>

<?php get_footer(); ?>