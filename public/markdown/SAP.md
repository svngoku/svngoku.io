# SAP , CONCEPTS GÉNÉRAUX ET APPRENTISSAGE

## Paysage système

### Description du paysage système SAP

SAP recommande la mise en place du paysage système suivant:

* une machine de développement,

* une machine de qualité ou ( recette ),

* une machine de production .

Toute ces machines sont installées par l'équipe d'administtation , l'équipe ets responsable de la maintenace des machines,
de leur interaction .

Ces trois machines , nommées *DEV* , *QAL* , *PROD* , forment le paysage système. La relation qui les unit est gérée par les adminstrateurs SAP . Elle permet la communication des modifications du paysage systèmes depuis la macchine de développementvers la machine de production, en permettant une traçabilité, et des étapes de validation avant la mise en production .

### La machine de développement

Cette machine est composé de plusieurs *mandants* .Les mandants sont des environnements de travail au sein de la machine. Lorsqu'un utilisateur ce connecte à une machine , il a l'obligation d'indiquer le mandant sur lequel il se connecte .

Trois mandants sont généralement utilisés:

* le mandant de référence , d'où partiront les ordres de transport.

* un mandant de test, contenant des données , permettant aux consultatants fonctionnels de tester leur modification du paramétrage .

* un mandant de test , dit *bac à sable*, dans lequel les développeurs testent leur travail.

Les consultants fonctionnels ont pour objectif d'utiliser toutes les possibilités de SAP pour s'adapter aux règles du métier de l'entreprise ( *process* en anglais ) : ils utilisent pour cela le paramétrage ( *customizing* en anglais ).
Les développeus ont pour fonction d'adapter techniquement la machine, en modifiant les programmes standards SAP, ou en développant des applications spcéifiques.

Il y'a aussi les impressions, les échanges de données avec les partenaires externes (EDI , fichiers plats...), les portails Internet.

### La machine de qualité

Le respect de l'intégrité du système repose sur la validation du travail fait par le développeurs sur une nouvelle machine. Les développeurs ne testent plus leurs applications , c'est le role des consultants fonctionnels et/ ou  d'utilisateurs cléfs. Ce second niveau de controle permet de garantir que les modifications n'auront pas d'impact sur la machine de production .
