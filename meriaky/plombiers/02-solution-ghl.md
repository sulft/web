# Solution GHL : 3 briques pour les plombiers Québec

**Document interne** — conception technique de l'offre "done-for-you" GoHighLevel.
Principe directeur : **zéro changement d'habitude côté plombier.** Il travaille pareil.
Meriaky installe, configure et opère. Tout ce qui exigerait une action manuelle du
plombier a une alternative automatique ou opérée par Meriaky.

3 briques retenues (max autorisé : 3) :
1. **Réception d'appels IA 24/7** (Voice AI entrant + missed-call text-back)
2. **Relance automatique des soumissions**
3. **Machine à avis Google**

Aucune 4e brique (calendrier, sync GBP, workflows notifs) — ce sont des composants
internes des 3 briques ci-dessus, pas des briques séparées.

---

## 1. Mapping enjeu → brique → preuve de valeur visible

| Enjeu (fichier 01) | Brique GHL | Preuve de valeur — ce que le plombier voit | Délai |
|---|---|---|---|
| 30-40 % d'appels manqués sur le terrain ; 78 % des clients choisissent le premier qui répond ; 43 % des appels arrivent hors heures de bureau | **Brique 1** — Réception d'appels IA 24/7 | SMS de résumé/transcription pour chaque appel capté, envoyé dans l'heure ; rapport "X appels sauvés cette semaine" | Dès le 1er appel manqué capté (J+1 à J+3) |
| 84-88 % des soumissions standard perdues sans relance ; relance structurée = conversion 12-16 % → 41-49 % | **Brique 2** — Relance auto des soumissions | Le plombier voit les SMS/emails de relance partir automatiquement sur ses devis de la semaine ; rapport hebdo "X relances envoyées, Y réponses" | Première relance envoyée dans les 24h suivant l'entrée d'un devis (J+1 à J+7) |
| 93 % des clients lisent les avis avant de choisir ; écart de ~60-70 % d'appels entre plombier bien noté et mal noté | **Brique 3** — Machine à avis Google | Il voit la première demande d'avis partir automatiquement après un rendez-vous complété ; 1er nouvel avis Google visible en général sous 5-10 jours | Demande envoyée le jour même du 1er rdv terminé (semaine 1) |

**Note de séquençage important** (voir section 5 pour le détail) : la Brique 1 (appels
vocaux) peut démarrer sans attendre l'enregistrement A2P/CRTC. Les Briques 2 et 3
(fortement dépendantes du SMS) ne tournent à pleine capacité qu'après validation A2P
(délai 5-7 jours). C'est donc la Brique 1 qui porte la démonstration de valeur en
semaine 1 ; les Briques 2 et 3 arrivent juste derrière.

---

## 2. Description technique des 3 briques

### Brique 1 — Réception d'appels IA 24/7

- **Numéro LC Phone** local, indicatif régional du plombier (514/450/418/581…).
- **Renvoi d'appel conditionnel** configuré sur la ligne actuelle du plombier
  (occupé / pas de réponse après 3-4 sonneries / hors zone) → redirige vers le
  numéro GHL. Le plombier garde son numéro actuel, ses clients ne voient rien changer.
- **Agent Voice AI en français**, prompt configuré avec : nom de l'entreprise,
  services offerts, zone desservie, disponibilités calendrier, script de collecte
  (nom, adresse, type de problème, urgence oui/non).
- **Message d'accueil assumé** : "Bonjour, ici [Entreprise], je suis l'assistante
  virtuelle, je prends votre appel." — transparence totale, pas de tromperie sur la
  nature IA (voir risque accent, section 5).
- **Actions de l'agent** : booking direct dans le calendrier GHL si créneau
  disponible, sinon prise de message + SMS instantané au plombier + SMS de
  confirmation au client.
- **Filet de sécurité (missed-call text-back)** : si un appel reste malgré tout sans
  réponse (panne, agent occupé), SMS automatique immédiat au client ("On a manqué
  votre appel, texte-nous ici").
- **Notification propriétaire** : SMS/push au plombier à chaque appel capté, avec résumé.

### Brique 2 — Relance automatique des soumissions

- Pipeline "Soumissions" dans GHL, étape **"Soumission envoyée"**.
- Déclenchement du workflow : dès qu'un devis est marqué "envoyé". **Le plombier
  n'entre rien lui-même** — il transmet l'info à Meriaky comme il le fait déjà
  aujourd'hui (SMS, photo du bon, forward d'email), et c'est l'équipe Meriaky qui
  saisit le statut dans GHL. Alternative 100 % automatique si le plombier utilise
  déjà un outil de soumission compatible (webhook/Zapier) — à évaluer au cas par cas.
- **Séquence** : J+1 SMS ("Une question sur votre soumission ?"), J+3 email récap
  avec lien pour accepter en ligne, J+7 appel Voice AI de relance (optionnel selon
  plombier), J+10 relance finale.
- Réponse "oui" → notification immédiate au plombier + déplacement automatique du
  pipeline vers "Accepté". Réponse "non" → arrêt de la séquence, tag "perdu".

### Brique 3 — Machine à avis Google

- **Sync Google Business Profile** connecté à GHL (accès "gestionnaire" donné à Meriaky).
- **Déclencheur automatique** = X heures après l'**heure de fin prévue** du
  rendez-vous dans le calendrier GHL. Pas besoin que le plombier marque quoi que ce
  soit comme "terminé".
- **Pour les interventions hors calendrier** (urgences prises par téléphone direct) :
  Meriaky déclenche la demande manuellement à partir du relevé d'appels/textos que
  le plombier envoie déjà en fin de journée — alternative "opérée par Meriaky",
  zéro nouvelle tâche pour lui.
- SMS + email avec lien direct pré-rempli vers la fiche Google (5 étoiles).
- **AI review response** : mode suggestif (brouillon validé par Meriaky) pendant les
  30 premiers jours ; ensuite auto-publish pour les avis 4-5 étoiles seulement ; les
  avis 1-3 étoiles sont toujours mis en attente pour un suivi humain.

---

## 3. Checklist d'installation done-for-you

| # | Étape | Qui | Durée | Prérequis plombier |
|---|---|---|---|---|
| 0 | Appel de kickoff : collecte infos (horaires, zone, services, ton), signature entente | Meriaky + plombier | 20 min | Être disponible pour l'appel |
| 1 | Création sous-compte GHL + achat numéro local | Meriaky | 15 min | — |
| 2 | Renvoi d'appel conditionnel configuré sur le cellulaire/ligne actuelle | Plombier (guidé en direct par Meriaky) | 5 min | Avoir son téléphone en main |
| 3 | Lancement dossier A2P/CRTC (Business Number/NEQ requis) | Meriaky lance, plombier fournit le numéro | 2 min (plombier) + 24-72h approbation externe | NEQ / numéro d'entreprise |
| 4 | Accès "gestionnaire" sur la fiche Google Business Profile | Plombier | 2 min | Être admin de sa fiche GBP (ou la retrouver) |
| 5 | Script Voice AI + test de voix (accent) | Meriaky | 2-3h | — |
| 6 | Validation courte du message d'accueil IA (écoute + pouce vert) | Plombier (async) | 5 min | — |
| 7 | Configuration calendrier + workflows relance soumissions + machine à avis | Meriaky | 3-4h | — |
| 8 | Test end-to-end : appel test, SMS test, demande d'avis test | Meriaky + plombier | 15-20 min | — |
| 9 | Mise en prod Brique 1 (Voice AI) | Meriaky | — | — |
| 10 | Mise en prod Briques 2-3 (SMS) dès validation A2P | Meriaky | — | — |
| 11 | Monitoring semaine 1 + 1er rapport de valeur | Meriaky | — | — |

**Délai global** : Brique 1 (appels) opérationnelle en 2-3 jours. Briques 2-3
(dépendantes SMS) pleinement actives à **J+5 à J+7** (délai A2P/CRTC). Le plombier
est prévenu de ce séquençage dès le kickoff pour gérer ses attentes.

**Temps total exigé du plombier** : ~30 minutes réparties sur 2 semaines (voir détail
onboarding dans `03-offre.md`).

---

## 4. Coûts réels pour Meriaky

### Décision : paiement à l'usage, PAS l'add-on "AI Employee Unlimited"

Les notes GHL indiquent un add-on **"AI Employee Unlimited" à 97 $/mois par
sous-compte** (Voice AI illimité). Pour le volume attendu chez un plombier qui
démarre (~120 min Voice AI/mois), ce n'est pas rentable.

**Calcul du seuil de rentabilité** (breakeven = 97 $ ÷ taux/minute) :

| Taux Voice AI | Seuil de minutes/mois pour justifier l'add-on |
|---|---|
| 0,163 $/min (moyenne, notes GHL) | ≈ 595 min/mois (~9h55) |
| 0,20 $/min (voix premium ElevenLabs) | ≈ 485 min/mois (~8h05) |

**Seuil pratique retenu : ~500-600 minutes Voice AI/mois par sous-compte.**
En dessous, le paiement à l'usage est toujours moins cher. Le volume estimé pour un
plombier gratuit (~120 min/mois) est **4 à 5 fois** sous ce seuil.

**Recommandation** : paiement à l'usage pour les 5 plombiers gratuits, avec un
**plafond de sécurité fixé à 250 min Voice AI/mois** par sous-compte (~2x le volume
estimé). Si un plombier dépasse ce plafond de façon récurrente (bon signe commercial
— beaucoup d'appels), **bascule au cas par cas vers l'add-on Unlimited** dès que le
volume approche le seuil de 500 min/mois.

### Coût mensuel par plombier (paiement à l'usage)

| Poste | Volume estimé | Tarif | Coût bas | Coût haut |
|---|---|---|---|---|
| Voice AI | 120 min/mois | 0,12-0,20 $/min | 14,40 $ | 24,00 $ |
| SMS (missed-call, relances, avis) | 250-350 seg/mois | 0,013-0,018 $/seg | 3,25 $ | 6,30 $ |
| Numéro local Canada | 1 | 1,15 $/mois | 1,15 $ | 1,15 $ |
| AI review responses | 5-20 réponses/mois | 0,08 $/réponse | 0,40 $ | 1,60 $ |
| **Total usage/mois/plombier** | — | — | **~19,20 $** | **~33,05 $** |

Plafond de sécurité (250 min Voice AI) → pire cas réaliste avant bascule :
**~50 $/mois/plombier.**

### Coût ponctuel (setup, mois 1 seulement)

| Poste | Coût unitaire | × 5 plombiers |
|---|---|---|
| Enregistrement A2P/CRTC (NEQ requis, par entité) | 100-200 $ USD | 500-1 000 $ |

### Budget total pour Terry — 5 plombiers gratuits

| Période | Bas | Haut |
|---|---|---|
| **Mois 1** (usage + setup A2P) | ~600 $ | ~1 165 $ |
| **Mois 2+ si prolongation** (usage seul, 5 combinés) | ~96 $/mois | ~165 $/mois |

**Comparatif** : la même chose avec l'add-on Unlimited sur les 5 sous-comptes aurait
coûté 5 × 97 $ = 485 $/mois **rien qu'en add-on**, plus l'usage — soit ~600 $/mois
pour les 5. Le paiement à l'usage fait économiser **~350-500 $/mois** à Terry tant
que le volume reste sous le seuil de rentabilité.

**Hypothèse à vérifier** : ces chiffres supposent que Terry a déjà un abonnement
GHL au niveau agence (sous-comptes illimités) comme coût fixe séparé, non
incrémental à cette offre. Si ce n'est pas le cas, ajouter ce coût de plan de base.

---

## 5. Risques techniques et parades

| Risque | Impact | Parade |
|---|---|---|
| **Accent québécois Voice AI non confirmé** — voix ElevenLabs génériques, pas de témoignage d'accent local | Le client perçoit un bot "étranger", peut raccrocher | Tester 3-5 clips de voix avant chaque lancement ; message d'accueil assumé "assistante virtuelle" (transparence désamorce la surprise) ; script permettant un transfert humain immédiat si le client insiste |
| **Délais A2P/CRTC** — 24-72h d'approbation officielle, mais prévoir 5-7 jours réels ; NEQ obligatoire | Briques 2-3 (SMS) non fonctionnelles la 1re semaine | Lancer la demande A2P dès le jour du kickoff (étape 3) ; démarrer la Brique 1 (Voice AI, pas de dépendance SMS) immédiatement pour montrer de la valeur pendant l'attente ; communiquer le délai clairement au plombier |
| **Sync Google Business Profile** — accès manager pas donné à temps, ou fiche dupliquée/mal configurée | Zéro demande d'avis visible, Brique 3 bloquée | Demander l'accès dès le kickoff (2 min) ; vérifier l'unicité et l'exactitude de la fiche (horaires, catégorie, zone) avant fin de semaine 1 |
| **Coûts Voice AI imprévisibles** — tokens LLM variables selon durée d'appel, jusqu'à 0,17-0,20 $/min | Dérive budgétaire si volume explose | Plafond usage fixé à 250 min/mois par sous-compte, monitoring hebdo par Meriaky, alerte automatique à l'approche du plafond, bascule Unlimited si dépassement récurrent |
| **Frais carrier SMS cachés** — tarif affiché 0,0079 $/seg, coût réel 0,013-0,018 $/seg (~2x) | Sous-budgétisation si on utilise le tarif brut | Toujours budgéter avec le taux réel (0,013-0,018 $/seg), jamais le tarif affiché |

---

## Résumé décisionnel

- **3 briques**, chacune adossée à un enjeu chiffré du fichier 01.
- **Zéro nouvelle tâche pour le plombier** : chaque automatisation a un déclencheur
  temporel/automatique ou une alternative opérée par Meriaky.
- **Valeur visible en 7 jours** via la Brique 1 (transcriptions d'appels dès J+1-3),
  même si les Briques 2-3 attendent la validation A2P.
- **Paiement à l'usage recommandé** pour les 5 gratuits (seuil de rentabilité de
  l'add-on Unlimited ≈ 500-600 min/mois, très au-dessus du volume réel attendu).
- **Budget réaliste pour Terry** : ~600-1 165 $ le mois 1 (setup A2P inclus),
  puis ~100-170 $/mois pour les 5 combinés si prolongation.
