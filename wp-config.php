<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', "db809045208" );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', "dbo809045208" );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', "Fred&200172" );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', "db809045208.hosting-data.io" );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8' );

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '^M^#4G8?y0tqw*!|4Lm7t!hi ,OPZ ]{1Y1exL=~!l^e</SheS`+uI79mF7IE%Y^' );
define( 'SECURE_AUTH_KEY',  'J*N`5* I(,is^C1VB8A:&&~$r4]+cs~6Mv<H8Fjq:Ok1QvFW;qH`ak4i]m5X$M`g' );
define( 'LOGGED_IN_KEY',    'd@%g-6] Cb/o0jY?ugW{6ikD*N #.FvXUw9*7>-@J`HDrR`bF&5j?Z#MQ_VdQMwX' );
define( 'NONCE_KEY',        'p+Z<ES{rdz!P/ORNiU,m{z##@hHo?.hD[4koNO,d0-jlw-D%(XWg9y-7`.&,SQ j' );
define( 'AUTH_SALT',        '+-7NY<r>cZd)U7/GC4dXm;0mvU9}b>.S`!+mDf9q&W4fzGy+UB]=0-tzg#9N4K.T' );
define( 'SECURE_AUTH_SALT', ',g(ULLGKjj2a3.8d#MGrM7s@q];W(%wdXZ2_`{F[cDZhM0#l`OhaGh}xa]r?=h)r' );
define( 'LOGGED_IN_SALT',   '.jvCMtfd8%|e-6q5=wT6}~dU*!g/|T~wq:5LPY+PwjQ0;%qr(|m7;:hA9=L<7t^5' );
define( 'NONCE_SALT',       '}Ms#) UYbCOj(99!w#r_ys?t2w%#]hH&86;S[ lsDJ25GcZYy4$CA:1?VNGueX[E' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', true);
define( 'WP_DEBUG_LOG', true );
/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
