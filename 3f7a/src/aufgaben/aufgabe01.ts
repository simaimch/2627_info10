// =====================================================================
//  AUFGABE 1: Einstellungen ausprobieren
// =====================================================================
//
//  ZIEL
//  Du lernst, was Variablen sind, und siehst, wie ihre Werte das Spiel
//  verändern.
//
//  WAS HIER STEHT
//  Unten findest du fünf Variablen. Jede Variable hat einen Namen und
//  einen Wert. Andere Dateien lesen diese Werte, zum Beispiel baut
//  "welt.ts" damit die Spielwelt.
//
//      export let name = wert;
//      │      │   │      └─ der gespeicherte Wert
//      │      │   └─ der Name, unter dem der Wert gespeichert ist
//      │      └─ "let" legt eine Variable an
//      └─ "export": andere Dateien dürfen die Variable lesen
//
//  DAS SOLLST DU TUN
//  1. Ändere "hoehe" und "breite". Speichere mit Strg+S und schau dir
//     die Spielwelt an. Welche Variable bestimmt die Anzahl der Zeilen,
//     welche die Anzahl der Spalten?
//  2. Ändere "schrittDauerMs". Macht ein größerer oder ein kleinerer
//     Wert die Schlange schneller? Begründe.
//  3. Ändere "minMuenzen" und "maxMuenzen". Starte das Spiel mehrmals
//     neu (Seite neu laden). Was beobachtest du?
//  4. Was passiert, wenn "minMuenzen" größer als "maxMuenzen" ist?
//  5. Stelle zum Schluss Werte ein, mit denen du gut spielen kannst.
//
//  Schreibe deine Antworten als Kommentare unter diese Zeilen:
//
//  1. die variable höhe und breite sind für das spielfeld zuständig.
//  2. ein kleinerer quasi desto kleiner dert desto schneller ist die Schlange
//  3. ich beobachte das meine vorgegebene zahl an münzen jetzt da steht
//  4. das funktoniert nicht
//
//  SO TESTEST DU
//  Die Spielwelt hat die Größe, die du eingestellt hast.
// =====================================================================

/** Anzahl der Zeilen der Spielwelt */
export let hoehe = 30;
/** Anzahl der Spalten der Spielwelt */
export let breite = 30;
/** Zeit zwischen zwei Schritten der Schlange in Millisekunden */
export let schrittDauerMs = 200;
/** Kleinste und größte Anzahl an Münzen (zufällig dazwischen) */
export let minMuenzen = 4;
export let maxMuenzen = 7;
