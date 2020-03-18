Ma page d'accueil est accessible via une redirection depuis la racine du site.
Elle possède son propre template "template-front-page.php", et elle est reliée à la page d'accueil d'origine du thème. Cette dernière page est nommée "Accueil Origine" est doit rester en mode "privé".

Ma page n'est donc pas définie dans WP "Apparence/Personnaliser/réglages de la page d'accueil/"La page d’accueil affiche" et n'apparait donc pas dans "Apparence/Personnaliser/Front Page".
Car si je fais cela WP ne tient pas compte de son template et reprend celui d'origine.

Ainsi pour modifier ma page d'accueil sur BeOnePage il faut la faire réapparaitre dans :
Apparence/Personnaliser/Front Page (ce qui n'est le cas qu'avec le template d'origine)
Procéder comme suit :

1 - Repasser la page "Accueil Origine" en mode de lecture "public"
2 - Aller dans Apparence/Personnaliser/réglages de la page d'accueil/ et la sélectionner en page "statique"
3 - Retourner sur Apparence/Personnaliser/Front Page(apparait) et y faire les modifications souhaitées
4 - Repasser la page "Accueil Origine" en mode de lecture "privé"
2 - Aller dans Apparence/Personnaliser/réglages de la page d'accueil/ et cocher "La page d’accueil affiche" => "une page statique" sans en sélectionner aucune.