<?php
/**
 * The template for displaying 404 pages (not found).
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package BeOnePage
 */

get_header(); ?>

	<header class="page-header img-background clearfix">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<h1 class="page-title"><?php echo esc_html__( '404','beonepage' ); ?></h1>

					<?php beonepage_get_breadcrumbs(); ?>
				</div><!-- col-md-12 -->
			</div><!-- .row -->
		</div><!-- .container -->
	</header><!-- .page-header -->

    <div class="container">
		<div class="row">
			<div class="col-md-12">
				<div id="primary" class="content-area">
					<main id="main" class="site-main" role="main">
                        <article id="post-404" class="clearfix post-669 page type-page status-private hentry">
	                       <div class="entry-content">
                               <div class="my-photo" style="opacity: 1.1; height: 1774px;">
                                    <div class="maintenance-page container slider-caption text-center clearfix" style="opacity: 0.5; transform: translate(0px, -5.33333px);">
                                        <h1 class="maintenance-page">Oops! cette page n'existe pas</h1><br>
                                        <h2 class="maintenance-page">Restez calme</h2>
                                        <p class="maintenance-page">Tentez une recherche ?</p>
                                        <p class="maintenance-page"><?php get_search_form(); ?></p>
                                    </div>
                                </div>
                            </div><!-- .entry-content -->

                           <footer class="entry-footer">
                              <span class="edit-link"><a class="post-edit-link" href="http://labdev.fr/wp-admin/post.php?post=669&amp;action=edit">Edit <span class="screen-reader-text">"Privé&nbsp;: Site en maintenance"</span></a></span>	
                            </footer><!-- .entry-footer -->
                        </article><!-- #post-## -->
					</main><!-- #main -->
				</div><!-- #primary -->
			</div><!-- col-md-12 -->
		</div><!-- .row -->
	</div>

<?php get_footer(); ?>