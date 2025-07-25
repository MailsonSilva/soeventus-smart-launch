<?php get_header(); ?>

<main class="main-content">
    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <h1><?php echo get_theme_mod('hero_title', 'Transforme Sua Ideia em Realidade'); ?></h1>
            <p><?php echo get_theme_mod('hero_subtitle', 'A plataforma completa para criar, gerenciar e escalar seu negócio digital com facilidade e eficiência.'); ?></p>
            <div class="hero-buttons">
                <a href="<?php echo get_theme_mod('cta_link', '/capture'); ?>" class="btn btn-primary">
                    <?php echo get_theme_mod('cta_text', 'Começar Grátis'); ?>
                </a>
                <a href="#features" class="btn btn-outline">Ver Demo</a>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="features" id="features">
        <div class="container">
            <h2>Por que escolher nossa plataforma?</h2>
            <div class="features-grid">
                <?php
                $features = array(
                    array(
                        'icon' => '⚡',
                        'title' => 'Rápido e Eficiente',
                        'description' => 'Configure tudo em minutos, não em semanas.'
                    ),
                    array(
                        'icon' => '🔒',
                        'title' => 'Seguro e Confiável',
                        'description' => 'Seus dados protegidos com criptografia de ponta.'
                    ),
                    array(
                        'icon' => '📱',
                        'title' => 'Responsivo',
                        'description' => 'Funciona perfeitamente em qualquer dispositivo.'
                    ),
                    array(
                        'icon' => '🚀',
                        'title' => 'Escalável',
                        'description' => 'Cresce junto com seu negócio sem limites.'
                    ),
                    array(
                        'icon' => '💡',
                        'title' => 'Intuitivo',
                        'description' => 'Interface simples que qualquer um pode usar.'
                    ),
                    array(
                        'icon' => '📊',
                        'title' => 'Analytics',
                        'description' => 'Dados detalhados para otimizar resultados.'
                    )
                );

                foreach($features as $feature): ?>
                    <div class="feature-card">
                        <div class="feature-icon"><?php echo $feature['icon']; ?></div>
                        <h3><?php echo $feature['title']; ?></h3>
                        <p><?php echo $feature['description']; ?></p>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Blog Posts (se houver) -->
    <?php if(have_posts()): ?>
        <section class="blog-posts" style="padding: 80px 0; background: white;">
            <div class="container">
                <h2 style="text-align: center; margin-bottom: 3rem;">Últimas Novidades</h2>
                <div class="posts-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                    <?php while(have_posts()): the_post(); ?>
                        <article class="post-card" style="background: #f8fafc; padding: 2rem; border-radius: 12px;">
                            <?php if(has_post_thumbnail()): ?>
                                <div class="post-thumbnail" style="margin-bottom: 1rem;">
                                    <?php the_post_thumbnail('medium', array('style' => 'width: 100%; border-radius: 8px;')); ?>
                                </div>
                            <?php endif; ?>
                            <h3 style="margin-bottom: 1rem;">
                                <a href="<?php the_permalink(); ?>" style="text-decoration: none; color: #1e293b;">
                                    <?php the_title(); ?>
                                </a>
                            </h3>
                            <p style="color: #64748b; margin-bottom: 1rem;"><?php echo wp_trim_words(get_the_excerpt(), 20); ?></p>
                            <a href="<?php the_permalink(); ?>" class="btn btn-outline" style="font-size: 0.9rem; padding: 0.5rem 1rem;">Ler Mais</a>
                        </article>
                    <?php endwhile; ?>
                </div>
            </div>
        </section>
    <?php endif; ?>
</main>

<?php get_footer(); ?>