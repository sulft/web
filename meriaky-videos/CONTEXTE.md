# Contexte : vidéos client Meriaky (Vitrine Active 50 $ → puis offre 200 $)

Note de reprise, écrite le 11 oct. 2026. À coller ou à lire au début de la prochaine conversation.

## 1. L'objectif

Créer des vidéos de présentation pour les **futurs clients**, sans voix, avec de la musique et des animations soignées, dans l'univers Meriaky (horlogerie, cadrans, engrenages, prune et turquoise). Le ton doit être engageant, pas « corporate ». Le texte est en tutoiement.

1. **Vidéo de l'offre à 50 $ (Vitrine Active) : faite.**
2. **Vidéo de l'offre à 200 $ (pack automatisation) : prochaine étape**, sur le même modèle.

## 2. Les livrables actuels

| Quoi | Où |
|---|---|
| MP4 final, 52 s, 1080×1350, h264 + aac | `meriaky-videos/vitrine-active-50.mp4` (branche `claude/serene-meitner-wfzy5d`, PR sulft/web#299) |
| Page web (vidéo + offre écrite) | https://claude.ai/artifact/AtGYxvgLGe3mBi5HwTcEHU (privée, à partager via Share) |
| Sources pour refaire le rendu | `meriaky-videos/source/` (voir §6) |

**Pages de référence plus anciennes :**
- Page privée pour Edouard : https://claude.ai/artifact/QaMMpoXsQre6zoYLNcjcp8
- Ancienne version client : https://claude.ai/artifact/5xJ9Pnrwn4oZSvUBEUxMmA

## 3. Les prix retenus (compte rendu « $100M Money Models »)

Principe : **« Mensuel avec frais d'intégration, ou annuel avec intégration offerte. »** On ne force pas 12 mois d'engagement.

### Offre 1 : Vitrine Active (site web pro)
- **Flexible :** 50 $/mois + 150 $ d'intégration. Annulable avant la prochaine facture. L'intégration n'est pas remboursable une fois le travail commencé.
- **Annuel :** 400 $/an, intégration offerte. Pas de remboursement au prorata après activation.
- **Offre fondateur (communauté) :** 300 $/an, intégration offerte. **Limitée à 10 personnes** (décision de Terry). Elle est présentée comme une cohorte pilote, pas comme le prix normal.
- **Ce qui est installé :**
  - le site pro, que le client crée en 10 min avec l'IA (AI Studio, hébergé chez nous) ;
  - un numéro pro ;
  - un SMS automatique à chaque appel manqué ;
  - une alerte à chaque demande ;
  - les avis Google en un clic ;
  - une appli où tous les messages arrivent au même endroit.

### Offre 2 : Pack automatisation (vidéo à faire)
- **Mensuel :** 200 $/mois + 600 $ d'intégration. Annulable avant la prochaine facture. L'intégration couvre la configuration de Google, du calendrier, des rappels, du suivi des appels manqués, du numéro pro et des demandes d'avis.
- **Annuel :** 2 000 $/an, intégration offerte, payé à l'avance.
- **Offre communauté :** 1 500 $/an, limitée dans le temps, présentée comme une cohorte pilote. Nombre de places à confirmer avec Terry.
- **Ce qui est inclus (décisions du 7-8 oct.) :**
  - le site fait par nous (3 maquettes au choix, transférable) ;
  - la prise de rendez-vous et les rappels ;
  - un assistant IA (WhatsApp ou son propre Claude) ;
  - les avis automatiques ;
  - des emails à l'image du client ;
  - en annuel : 2 h d'onboarding privé.
- **Phrase de vente :** « Vous pouvez commencer à 200 $ par mois avec 600 $ d'intégration. Si vous choisissez l'année complète à 2 000 $, l'intégration est offerte. Dans les deux cas, vous bénéficiez d'une garantie de 30 jours sur la bonne installation du système. »

### Garantie et remboursements (les deux offres)
- **Garantie 30 jours sur l'installation uniquement** : jamais sur les ventes, les avis ou le chiffre d'affaires.
  - Si le système n'est pas installé comme prévu dans les 30 jours après réception des accès, on corrige gratuitement.
  - Si on ne peut pas livrer, on rembourse l'annuel.
- **Remboursements :**
  - avant le début du travail : remboursement possible ;
  - après le début de l'installation : pas de remboursement pour un simple changement d'avis ;
  - après une installation conforme : pas de remboursement au prorata ;
  - avant le renouvellement annuel : rappel envoyé au client.
- Les conditions sont à faire valider par un juriste (droit de rétractation, reconduction automatique).

### Encore à trancher (offre 200 $)
- Plusieurs utilisateurs dans le 200 $ ?
- Tests : renvoi d'appel, wallet, permissions.
- Lancement : snapshot, mode SaaS.
- Promo live : 1 500 $ ou 1 750 $ ? Le compte rendu dit 1 500 $.

## 4. Le déroulé de la vidéo 50 $ (52 s, calé sur le beat)

| Temps | Scène | Contenu |
|---|---|---|
| 0–5 s | Hook, fond sombre | Cadran et engrenages animés : « Pendant que tu travailles, ton téléphone sonne. Et ton client appelle **le suivant**. » Flash blanc à 5 s, quand le beat démarre. |
| 5–10,5 s | Prune | « Chaque appel manqué **a un prix**. » + « On installe le système qui rattrape tes clients pendant que tu travailles. » |
| 10,5–21,4 s | Clair + engrenages | « Ton système, **déjà branché**. » 6 coches : site pro (10 min avec l'IA), numéro pro, SMS à chaque appel manqué, alerte à chaque demande, avis Google en un clic, appli pour tout. |
| 21,4–32,3 s | Clair | « Deux chemins. Tu choisis. » Cartes Flexible (50 $/mois + 150 $) et Annuel (400 $, le « + 150 $ » se fait barrer, badge « Intégration offerte »). Encadré : « 350 $ de moins la première année ». |
| 32,3–37,7 s | Prune, break musical | « Offre fondateur · 10 places ». « Les **10 premiers** entrent à 300 $ par an. » 3 coches + 10 pastilles turquoise. « Quand les 10 places sont prises, c'est fini. » |
| 37,7–45,9 s | Clair | Garantie : anneau « 30 jours » + 3 lignes (écart corrigé gratuitement, remboursement si on ne livre pas, on garantit ce qu'on contrôle). |
| 45,9–52 s | Carte de fin | « Tu ne paies pas un abonnement. Tu reçois un système **installé, qui tourne**. » Récap des 3 lignes + « Choisis ton chemin. On s'occupe du reste. » |

## 5. Les choix créatifs validés

- **Branding Meriaky :**
  - fond `#FBF8FC`, prune `#3C0249`, turquoise `#14CCA6` / `#0B8F74`, texte `#1C1330`, lignes `#E0DBFA` ;
  - police Urbanist ;
  - logo « meriaky » + double barre oblique turquoise ;
  - cadran et engrenages dessinés en SVG.
- **Musique :** « Lofi Hip-Hop » de VelarioMusic (Pixabay), environ 89 BPM.
  - Le morceau démarre à 6,656 s, pour que la grosse caisse tombe à 5 s dans la vidéo.
  - Toutes les scènes et apparitions sont calées sur les temps et demi-temps.
  - Les trotteuses avancent d'un cran à chaque temps.
  - Fondu de sortie de 3,5 s.
- **Pas de voix off.** On a testé le clone ElevenLabs « Voix de terry » (voice_id `wpnqMH3UlBFZLgOJyQb7`). Terry l'a refusé : ça s'entend que ce n'est pas lui. Si on revient à une voix, ce sera un vrai enregistrement de Terry.
- **Hook Higgsfield :** un clip de mouvement de montre a été généré (job `5c1243fa-af54-49fe-a3b5-94b111054a28`, Cinema Studio v2, 9:16, 5 s). Il n'a pas pu être téléchargé : le domaine `d8j0ntlcm91z4.cloudfront.net` est bloqué par le réseau de l'environnement. La vidéo utilise à la place une animation de cadran faite maison. La page est déjà prévue pour un fichier `hook.mp4` : s'il est présent, il remplace l'animation.

## 6. Comment refaire ou modifier la vidéo (sources dans `meriaky-videos/source/`)

- **Les fichiers :**
  - `head.html` : styles ;
  - `body_beat.html` : scènes, avec les temps calés sur le beat ;
  - `lib.js` : dessin du cadran et des engrenages ;
  - `tail_beat.js` : timeline, grille des temps, lecteur.
- **Assemblage de la page :**
  `{ cat head.html body_beat.html; printf '<script>\n(function () {\n  "use strict";\n'; cat lib.js tail_beat.js; } > vitrine-active-50.html`
- **Fichier pour le rendu :** préfixer avec `<!doctype html><meta charset="utf-8">` et l'enregistrer en `index.html`. L'ouvrir en `file://` (le serveur http local est tué par l'environnement).
- **Rendu :** `node render.js file://…/index.html <dossier> full`. Le script utilise Playwright (`/opt/node-tools/node_modules/playwright`, chromium `/opt/pw-browsers/chromium`) et capture 30 images/s via `window.__capture()` puis `window.__render(t)`. Le mode `stills` sort quelques images de contrôle.
- **Assemblage MP4 :**
  `ffmpeg -framerate 30 -i f%05d.jpg -i musique-lofi.mp3 -c:v libx264 -pix_fmt yuv420p -crf 18 -c:a aac -b:a 192k -shortest -movflags +faststart`
- **Retiming sur une autre musique :** `retime.py` (librosa) détecte les temps, puis remappe tous les `data-t`, `data-hl`, `data-c` et les bornes de scène sur la grille. `beat.json` contient l'offset et la grille actuels.
- **Moteur d'animation :** les scènes sont déclarées en HTML.
  - Chaque scène : `.sc` avec `data-a` / `data-b` (début / fin) ; la classe `dark` donne le fond prune avec un volet.
  - Apparitions : `data-t` (instant d'entrée) + `data-fx` (`words`, `up`, `right`, `left`, `pop`, `fade`).
  - Effets : `data-draw` (tracé SVG), `data-hl` (soulignement turquoise ; la classe `sk` donne un barré), `data-count` + `data-c` (compteur de chiffres).

## 7. Les contraintes de l'environnement cloud

- **Bloqués** par le réseau : pixabay.com, cloudfront Higgsfield, api.elevenlabs.io.
- **Accessible :** storage.googleapis.com, d'où le téléchargement des audios ElevenLabs a fonctionné.
- **Fichiers locaux de Terry :** son Mac n'est pas accessible. Il faut glisser les fichiers dans le chat (ils arrivent dans `/root/.claude/uploads/…`) ou les pousser sur la branche.
- **Connecteurs actifs :** Higgsfield (≈5 380 crédits au départ) et ElevenLabs (connecteur restreint : voix seulement).

## 8. Prochaine étape

Faire la **vidéo de l'offre à 200 $** avec le même moteur, la même direction artistique et la même musique (ou une autre à choisir) :
1. Confirmer avec Terry :
   - le nombre de places de l'offre communauté à 1 500 $ ;
   - ce qui est inclus dans le pack (§3) ;
   - s'il veut un nouveau hook Higgsfield.
2. Reprendre la structure en 7 scènes et l'adapter :
   - hook « tu perds des rendez-vous / tu passes tes soirées à relancer » ;
   - « On fait pour toi » ;
   - liste de ce qui est inclus ;
   - Mensuel 200 $ + 600 $ / Annuel 2 000 $ intégration offerte, en montrant l'économie (3 000 $ − 2 000 $ = **1 000 $ de moins** la 1re année) ;
   - offre communauté 1 500 $ ;
   - garantie 30 jours ;
   - carte de fin.
3. Rendre le MP4, le pousser sur la branche et publier une page web.
