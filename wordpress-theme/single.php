<?php get_header(); ?>

<main class="main-content" style="padding-top: 100px;">
    <div class="container">
        <?php while(have_posts()): the_post(); ?>
            <article class="single-post" style="max-width: 800px; margin: 0 auto; padding: 2rem 0;">
                
                <?php if(has_post_thumbnail()): ?>
                    <div class="post-featured-image" style="margin-bottom: 2rem;">
                        <?php the_post_thumbnail('large', array('style' => 'width: 100%; border-radius: 12px;')); ?>
                    </div>
                <?php endif; ?>
                
                <header class="post-header" style="margin-bottom: 2rem; text-align: center;">
                    <h1 style="font-size: 2.5rem; color: #1e293b; margin-bottom: 1rem;"><?php the_title(); ?></h1>
                    
                    <div class="post-meta" style="color: #64748b; margin-bottom: 1rem;">
                        <span>Publicado em <?php echo get_the_date('d/m/Y'); ?></span>
                        <?php if(get_the_author()): ?>
                            <span> por <?php the_author(); ?></span>
                        <?php endif; ?>
                        <?php if(get_the_category()): ?>
                            <span> em <?php the_category(', '); ?></span>
                        <?php endif; ?>
                    </div>
                    
                    <?php if(has_excerpt()): ?>
                        <div class="post-excerpt" style="font-size: 1.1rem; color: #475569; font-style: italic;">
                            <?php the_excerpt(); ?>
                        </div>
                    <?php endif; ?>
                </header>
                
                <div class="post-content" style="line-height: 1.8; color: #334155;">
                    <?php the_content(); ?>
                </div>
                
                <?php if(get_the_tags()): ?>
                    <footer class="post-footer" style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #e2e8f0;">
                        <div class="post-tags">
                            <strong>Tags: </strong>
                            <?php the_tags('', ', ', ''); ?>
                        </div>
                    </footer>
                <?php endif; ?>
                
                <!-- Navegação entre posts -->
                <nav class="post-navigation" style="margin-top: 3rem; display: flex; justify-content: space-between; gap: 2rem;">
                    <div class="nav-previous">
                        <?php 
                        $prev_post = get_previous_post();
                        if($prev_post): ?>
                            <a href="<?php echo get_permalink($prev_post); ?>" class="btn btn-outline">
                                ← Post Anterior
                            </a>
                        <?php endif; ?>
                    </div>
                    <div class="nav-next">
                        <?php 
                        $next_post = get_next_post();
                        if($next_post): ?>
                            <a href="<?php echo get_permalink($next_post); ?>" class="btn btn-outline">
                                Próximo Post →
                            </a>
                        <?php endif; ?>
                    </div>
                </nav>
                
                <!-- CTA no final do post -->
                <div class="post-cta" style="margin-top: 4rem; padding: 2rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; text-align: center; color: white;">
                    <h3 style="margin-bottom: 1rem;">Pronto para começar?</h3>
                    <p style="margin-bottom: 2rem; opacity: 0.9;">Transforme sua ideia em realidade hoje mesmo.</p>
                    <a href="<?php echo get_theme_mod('cta_link', '/capture'); ?>" class="btn btn-primary" style="background: white; color: #6366f1;">
                        <?php echo get_theme_mod('cta_text', 'Começar Grátis'); ?>
                    </a>
                </div>
                
            </article>
        <?php endwhile; ?>
    </div>
</main>

<?php get_footer(); ?>