# [Live Version](https://mi-classroom.github.io/miniprojekt-cd-Roid/)

# Web-Development-miniprojekt George Iyawe 

Im Rahmen des Moduls Frontend Developments wurde die Aufgabe gestellt eine Webseite für das Cranach Digital Archive zu entwickeln. Bei diesem Projekt handelt es sich um eine Teilaufgabe die darin besteht ein Mockup für eine Timeline aus einem anderen Modul nachzubauen anhand der gegebenen Daten aus den Digital Archive. Wesentliche Funktionen der Seite sind
- Abbilden der Bilder aus dem Archiv in einer Timeline 
- Eine Detailansicht wo mehr Informationen zum Bild zu sehen sind. 
- Eine Option die Sprache auszuwählen 
- Eine Option bestimmte oder alle Jahre auszublenden
- Eine Option durch die Bilder in der Detailansicht zu navigieren

## Must Haves 
  - [X] Seite entspricht die gegebenen Regeln
  - [X] Bilderübersicht
  - [X] Detailanssicht auf Klick
  - [X] Sprachauswahl
  - [X] Akkordeon
  - [X] Alle Akkordeons ausblenden auf Klick
  - [X] Navigation in Detailansicht
  - [X] Mobile Ansicht
  - [X] Auf Github Pages gehostet
  
  ## Nice to Have
  
  - [X] Platzhalter bei fehlende Bilder 
  - [X] Funktionaler "Favorisieren" Button
  - [X] Desktop: Bei der Detailansicht kann rausnavigiert werden wenn auf den Hintergrund geklickt wird.
  
  ## Framework 
  Bei der Wahl des Framesworks gab es für mich nur eine Option, VueJS. Das Komponenten System in VueJS ist einfach zu verstehen und vereinfacht das entwickeln, da Komponenten als Templates genutzt werden können. Somit werden bestimmte Funktionen zu Komponenten die unabhängig voneinander entwickelt werden können. Vue zeigt seine Stärke besonders in Verbindung mit vuex bei State Management. Mit vuex haben wir ein "single source of truth" im Projekt. Mit vuex kann man sicher sein dass Daten richtig weitergegeben werden an die Komponenten und nicht verändert wurde. Ich wollte die chance Nutzen um Vue besser kennenzulernen und so ein großes Projekt hat sich gut dafür geeignet.
  
  ##  Probleme
  
 - Am Anfang der Entwicklungsphase ist mir aufgefallen dass viele Images nicht vorhanden waren da der cranach server mit dem Status 404 antwortete.
  Lösung: 
  
  ### Platzhalter
  Da die Anzahl an Artikel ohne Images recht groß war entschied ich mich dafür diese nicht zu löschen, sondern mit Platzhalter Images von [Placeholder](https://placeholder.com/) diese werden zu Laufzeit geändert, da ich nicht meine Zeit damit verbringen wollte die Daten mauell zu ändern. Ist auch keine realistische Lösung. 
  
  ### Images mit null Objekten
  Einige Artikel hatten auch garkeine Links zu ihren Images. Diese werden ignoriert damit sie nicht nach dem Laden auch noch behandelt werden müssen.
  
 
