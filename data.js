
const PHASES=[
{
t:"Projektstart & Bedürfnisse",s:"Was soll gebaut werden – und was muss die Gebäudetechnik leisten?",
why:"Bevor gezeichnet wird, müssen Nutzung, Anforderungen, Räume und Schnittstellen verstanden werden.",
steps:["Bauherrschaft formuliert Ziele, Nutzung und Rahmenbedingungen.","Architektur und Fachplanung klären Anforderungen und Zuständigkeiten.","Sanitäranlagen, Platzbedarf, Schächte und Leitungswege werden früh mitgedacht."],
terms:[["Bauherrschaft","Auftraggeberin bzw. Auftraggeber des Bauprojekts."],["Nutzung","Bestimmt, welche Räume und technischen Anlagen erforderlich sind."],["Schnittstelle","Berührungspunkt zwischen zwei Gewerken oder Bauteilen."]],
san:"Sanitärplanung beginnt nicht erst beim Rohr. Platzbedarf, Leitungswege, Schächte, Anschlüsse und Zugänglichkeit müssen früh koordiniert werden.",
exam:"Warum reduziert eine gute Projektklärung spätere Änderungen und Konflikte?",
error:"Falsche Vorstellung: zuerst bauen, danach Leitungen planen. Gebäudetechnik muss früh mit der Architektur koordiniert werden.",scene:0
},
{
t:"Grundstück & Grundlagen",s:"Terrain, Lage, Zufahrt, Erschliessung und vorhandene Unterlagen verstehen.",
why:"Das Grundstück bestimmt Randbedingungen wie Höhen, Gebäudelage und Anschlusspunkte.",
steps:["Projekt- und Grundstücksunterlagen beschaffen.","Terrain, Zufahrt und vorhandene Erschliessung beurteilen.","Bestehende Werkleitungen und Anschlusspunkte in die Planung einbeziehen."],
terms:[["Terrain","Natürliche oder bestehende Geländeoberfläche."],["Erschliessung","Anbindung an Strasse sowie Versorgungs- und Entsorgungsnetze."],["Werkleitung","Leitung im Aussenbereich, z. B. Wasser, Abwasser, Strom oder Kommunikation."]],
san:"Für Sanitär sind besonders Wasserzuführung, Entwässerungsanschluss und Höhenbeziehungen wichtig.",
exam:"Nenne drei Informationen, die vor dem Planen über das Grundstück bekannt sein sollten.",
error:"Nie annehmen, dass Leitungen dort liegen, wo es praktisch wäre. Grundlagen müssen beschafft und geprüft werden.",scene:0
},
{
t:"Vermessung & Geometer",s:"Aus dem realen Grundstück werden verlässliche Lage- und Höhendaten.",
why:"Planung braucht messbare Bezugspunkte. Ohne korrekte Lage und Höhe können Gebäude und Leitungen nicht sauber koordiniert werden.",
steps:["Geometer erfasst bzw. liefert Lage- und Höhendaten.","Fixpunkte und Höhenbezüge werden für Planung und Ausführung verwendet.","Später wird das geplante Gebäude präzise auf dem Grundstück abgesteckt."],
terms:[["Fixpunkt","Stabiler Bezugspunkt für Lage oder Höhe."],["Höhenkote","Angabe einer Höhe bezogen auf einen festgelegten Bezug."],["Absteckung","Übertragen geplanter Punkte und Achsen in die Realität."]],
san:"Höhen sind für die Entwässerungsplanung entscheidend, weil Leitungsführung und Anschlusshöhen zusammenpassen müssen.",
exam:"Warum reicht ein Grundriss ohne Höheninformationen für Entwässerung nicht aus?",
error:"Lage und Höhe nicht verwechseln: Ein Punkt kann im Grundriss richtig liegen, aber in der Höhe falsch sein.",scene:0
},
{
t:"Vorprojekt & Koordination",s:"Gebäudeform, Räume, Tragwerk und Gebäudetechnik werden aufeinander abgestimmt.",
why:"In dieser Phase fallen grundlegende Entscheidungen, bevor jedes Detail festgelegt ist.",
steps:["Architektur entwickelt Grundrisse, Schnitte und Ansichten.","Tragwerk und Fachplanungen melden Platzbedarf und Randbedingungen.","Schächte, Technikräume und Hauptleitungswege werden koordiniert."],
terms:[["Grundriss","Horizontale Darstellung eines Geschosses."],["Schnitt","Vertikale Darstellung durch das Gebäude."],["Schacht","Vertikaler Bereich zur Führung technischer Installationen."]],
san:"Sinnvoll angeordnete Nassräume, kurze Leitungswege und gut platzierte Schächte erleichtern die Planung.",
exam:"Warum ist es günstig, wenn Nassräume mehrerer Geschosse sinnvoll aufeinander abgestimmt sind?",
error:"Nur einen Geschossgrundriss betrachten. Viele Konflikte erkennt man erst im Schnitt oder über mehrere Geschosse.",scene:1
},
{
t:"Bewilligung & Ausführungsplanung",s:"Aus dem Entwurf werden koordinierte Unterlagen für die Realisierung.",
why:"Vor dem Bauen müssen die erforderlichen Freigaben vorliegen und die Ausführung ausreichend genau geplant sein.",
steps:["Projektunterlagen werden vervollständigt und koordiniert.","Erforderliche Bewilligungen und Vorgaben werden berücksichtigt.","Ausführungspläne legen relevante Bauteile, Durchbrüche, Anschlüsse und Leitungswege fest."],
terms:[["Ausführungsplan","Plan mit Informationen für die konkrete Realisierung."],["Aussparung","Geplanter freier Bereich in einem Bauteil."],["Durchbruch","Öffnung durch Wand oder Decke für Führung oder Zugang."]],
san:"Aussparungen und Durchbrüche müssen vor dem Erstellen der entsprechenden Bauteile koordiniert sein.",
exam:"Warum ist ein vergessener Deckendurchbruch später problematisch?",
error:"«Man kann später einfach bohren» ist keine saubere Planungsstrategie. Tragwerk und weitere Anforderungen können betroffen sein.",scene:1
},
{
t:"Baustelleneinrichtung",s:"Die Baustelle wird organisiert, erschlossen und sicher vorbereitet.",
why:"Vor dem eigentlichen Bau braucht es Zufahrt, Lagerflächen, Geräte, Schutzmassnahmen und funktionierende Logistik.",
steps:["Baustellenzugang, Lager- und Arbeitsbereiche festlegen.","Provisorische Versorgung und Entsorgung organisieren.","Sicherheitsbereiche und Bauablauf koordinieren."],
terms:[["Baustelleneinrichtung","Temporäre Infrastruktur für die Bauausführung."],["Bauinstallation","Provisorische Einrichtungen für Betrieb und Arbeiten auf der Baustelle."],["Logistik","Organisation von Material-, Personen- und Gerätebewegungen."]],
san:"Auch Planer müssen Bauablauf und Zugänglichkeit verstehen, damit geplante Montagewege realistisch sind.",
exam:"Nenne zwei Gründe, warum Baustellenlogistik die Fachplanung beeinflussen kann.",
error:"Baustelleneinrichtung ist keine Nebensache. Schlechte Logistik kann Arbeiten verzögern und gefährlich machen.",scene:1
},
{
t:"Absteckung",s:"Das geplante Gebäude wird präzise in die Realität übertragen.",
why:"Die Lage des Gebäudes muss auf dem Grundstück eindeutig festgelegt werden.",
steps:["Gebäudeecken bzw. Achsen werden anhand der Planung übertragen.","Kontrollmasse und Höhenbezüge werden geprüft.","Die Ausführung orientiert sich an diesen Referenzen."],
terms:[["Gebäudeachse","Geometrische Bezugslinie für Planung und Ausführung."],["Schnurgerüst","Mögliche Hilfskonstruktion zur Übertragung von Achsen und Fluchten."],["Flucht","Geradlinige Ausrichtung von Punkten oder Bauteilen."]],
san:"Aussenanschlüsse und Gebäudeeinführungen müssen zur tatsächlichen Gebäudelage passen.",
exam:"Was bedeutet «Abstecken» im Bauablauf?",
error:"Absteckung nicht mit Aushub verwechseln: Zuerst wird die Lage übertragen, danach folgt der gezielte Aushub.",scene:1
},
{
t:"Aushub & Baugrube",s:"Der Boden wird für Untergeschoss, Fundation und unterirdische Leitungen entfernt.",
why:"Die Baugrube schafft den Raum, in dem unterirdische Bauteile entstehen.",
steps:["Erdmaterial entsprechend dem Bauablauf abtragen.","Baugrube bis zu den vorgesehenen Höhen herstellen.","Baugrube sichern und Wasserverhältnisse berücksichtigen."],
terms:[["Aushub","Entfernen von Erdmaterial."],["Baugrube","Ausgehobener Bereich für unterirdische Bauteile."],["Baugrubensicherung","Massnahmen zur Stabilisierung der Baugrube und ihrer Ränder."]],
san:"Leitungen unter der Bodenplatte oder im Erdreich müssen jetzt zeitlich und räumlich mit dem Rohbau abgestimmt werden.",
exam:"Welche Arbeiten werden durch die Baugrube überhaupt erst möglich?",
error:"Baugrube ist mehr als ein Loch: Sicherheit, Sicherung, Wasser und Höhenlage gehören zum Verständnis.",scene:2
},
{
t:"Planum & Unterbau",s:"Die Aufstandsfläche wird vorbereitet, bevor Fundation und Bodenplatte entstehen.",
why:"Eine tragfähige und korrekt vorbereitete Grundlage ist Voraussetzung für den weiteren Aufbau.",
steps:["Baugrund bzw. Planum vorbereiten und kontrollieren.","Je nach Konstruktion geeignete Unterbau- oder Sauberkeitsschichten herstellen.","Leitungsdurchführungen und notwendige Einlagen koordinieren."],
terms:[["Planum","Geplante, hergestellte Oberfläche des Untergrunds."],["Unterbau","Schichten unter dem eigentlichen tragenden Bauteil."],["Sauberkeitsschicht","Hilfsschicht, die eine saubere und definierte Arbeitsfläche schaffen kann."]],
san:"Vor dem Betonieren muss klar sein, welche Leitungen oder Durchführungen unter bzw. durch die Bodenplatte führen.",
exam:"Warum müssen Rohbau und Haustechnik spätestens hier eng koordiniert sein?",
error:"Nachträgliche Leitungswege durch tragende oder abgedichtete Bauteile sind nicht automatisch problemlos.",scene:2
},
{
t:"Werkleitungen & Grundleitungen",s:"Unterirdische Ver- und Entsorgungswege werden vorbereitet.",
why:"Was später unter Bodenplatte oder Umgebung liegt, ist nach Fertigstellung nur schwer zugänglich.",
steps:["Trassen und Höhen der Leitungen gemäss Planung festlegen.","Leitungen und Anschlüsse in koordinierter Lage ausführen.","Vor dem Überdecken Lage und Funktion gemäss Projekt kontrollieren."],
terms:[["Grundleitung","Im Erdreich oder unter der Bodenplatte geführte Entwässerungsleitung."],["Hauseinführung","Stelle, an der eine Versorgung in das Gebäude geführt wird."],["Trasse","Geplanter räumlicher Verlauf einer Leitung."]],
san:"Entwässerung benötigt eine funktionierende Höhenführung; Wassereinführungen brauchen koordinierte Gebäudeeintritte.",
exam:"Warum ist eine falsche Höhe bei einer Grundleitung besonders kritisch?",
error:"Nur den Grundriss prüfen. Bei Entwässerung muss die Höhenführung immer mitgedacht werden.",scene:3
},
{
t:"Fundation",s:"Lasten aus dem Gebäude werden sicher in den Baugrund übertragen.",
why:"Die Fundation verbindet Tragwerk und Baugrund.",
steps:["Fundationsart ergibt sich aus Tragwerk, Baugrund und Projekt.","Schalung, Bewehrung und Einlagen werden koordiniert, soweit erforderlich.","Betonbauteile werden gemäss Tragwerksplanung erstellt."],
terms:[["Fundation","Bauteile zur Übertragung von Gebäudelasten in den Baugrund."],["Fundament","Teil der Fundation, z. B. unter Wänden oder Stützen."],["Bewehrung","Stahleinlagen im Stahlbeton zur Aufnahme bestimmter Beanspruchungen."]],
san:"Gebäudetechnik darf tragende Bauteile nicht ungeplant schwächen. Durchführungen müssen koordiniert werden.",
exam:"Welche Hauptaufgabe hat die Fundation?",
error:"Fundament und Bodenplatte nicht automatisch gleichsetzen. Sie können zusammenwirken, sind aber begrifflich nicht dasselbe.",scene:4
},
{
t:"Bodenplatte",s:"Das unterste flächige Bauteil des Gebäudes entsteht.",
why:"Die Bodenplatte ist eine zentrale Schnittstelle zwischen Tragwerk, Abdichtung, Untergrund und Haustechnik.",
steps:["Schalung, Bewehrung und notwendige Einlagen kontrollieren.","Durchführungen und Anschlüsse vor dem Betonieren prüfen.","Betonieren, erhärten lassen und weitere Bauteile darauf aufbauen."],
terms:[["Bodenplatte","Flächiges Bauteil am Gebäudesockel."],["Einlage","Vor dem Betonieren eingebautes Element, z. B. Hülse oder Leerrohr."],["Abdichtung","Schutz des Bauwerks gegen unerwünschten Wassereintritt entsprechend Projekt."]],
san:"Ein falsch platzierter Anschluss oder Durchbruch kann später erhebliche Folgen haben.",
exam:"Was muss aus Sicht Gebäudetechnik unbedingt vor dem Betonieren geprüft werden?",
error:"Alles, was im Beton oder darunter liegt, verlangt frühzeitige Planung.",scene:5
},
{
t:"Untergeschoss / Keller",s:"Wände, Stützen und Decken des unteren Gebäudeteils werden erstellt.",
why:"Jetzt entstehen Räume, Technikbereiche und vertikale Übergänge in die oberen Geschosse.",
steps:["Tragende und nichttragende Bauteile gemäss Projekt herstellen.","Technikräume, Schächte und Öffnungen berücksichtigen.","Erdberührte Bauteile und Abdichtungen gemäss Konstruktion ausführen."],
terms:[["Tragwand","Wand, die Lasten aufnimmt und weiterleitet."],["Nichttragende Wand","Raumtrennendes Bauteil ohne primäre Tragfunktion."],["Technikraum","Raum für gebäudetechnische Anlagen und Verteilungen."]],
san:"Technikraum und Schächte sind zentrale Knotenpunkte. Zugänglichkeit, Platz und Leitungsführung müssen stimmen.",
exam:"Warum ist ein Technikraum nicht einfach «Restfläche»?",
error:"Nur Apparatefläche betrachten. Wartung, Zugänglichkeit und Leitungsanschlüsse benötigen ebenfalls Raum.",scene:6
},
{
t:"Wände, Stützen & Geschosse",s:"Der Rohbau wächst Geschoss für Geschoss.",
why:"Tragstruktur und Raumaufteilung werden räumlich sichtbar.",
steps:["Wände und Stützen nach Achsen und Plänen erstellen.","Öffnungen, Einlagen und Leitungszonen koordinieren.","Geschosse aufeinander aufbauen und laufend kontrollieren."],
terms:[["Rohbau","Tragende und wesentliche konstruktive Grundstruktur eines Gebäudes."],["Stütze","Vertikales tragendes Bauteil."],["Installationszone","Vorgesehener Bereich für technische Leitungen und Komponenten."]],
san:"Sanitärplanung muss besonders auf Tragwerk, Türöffnungen, andere Gewerke und verfügbare Installationszonen achten.",
exam:"Nenne zwei typische Konflikte zwischen Gebäudetechnik und Rohbau.",
error:"Ein Leitungsweg kann im Plan passen, aber real mit Träger, Stütze oder Tür kollidieren.",scene:7
},
{
t:"Geschossdecken",s:"Horizontale Tragflächen verbinden und trennen die Geschosse.",
why:"Decken sind zentrale Koordinationsflächen für Durchbrüche, Einlagen und vertikale Leitungsführungen.",
steps:["Schalung und Bewehrung vorbereiten.","Aussparungen, Einlagen und Durchbrüche mit den Fachplanungen koordinieren.","Decke gemäss Konstruktionssystem erstellen."],
terms:[["Decke","Horizontales Bauteil zwischen Geschossen."],["Deckendurchbruch","Geplante Öffnung durch die Decke."],["Schalung","Temporäre Form für Frischbeton."]],
san:"Steigzonen und Fallleitungen benötigen passende Deckendurchbrüche. Lagefehler können sich durch mehrere Geschosse fortsetzen.",
exam:"Warum müssen vertikale Leitungsachsen über mehrere Geschosse betrachtet werden?",
error:"Jedes Geschoss separat planen. Eine Fallleitung muss räumlich durchgehend funktionieren.",scene:8
},
{
t:"Dach & Gebäudeabschluss",s:"Das Gebäude erhält seinen oberen Abschluss.",
why:"Das Dach schützt das Gebäude und führt Niederschlagswasser kontrolliert ab.",
steps:["Tragkonstruktion des Dachs erstellen.","Dachaufbau und Abdichtungs- bzw. Deckschichten ausführen.","Dachentwässerung und Durchdringungen koordinieren."],
terms:[["Dachentwässerung","System zur kontrollierten Ableitung von Niederschlagswasser."],["Dachdurchdringung","Öffnung durch Dachschichten, z. B. für Leitungen oder Lüftung."],["Gefälle","Höhenänderung über eine Strecke."]],
san:"Regenwasserableitung und Lüftungsführungen über Dach sind wichtige Sanitärschnittstellen.",
exam:"Welche zwei Sanitärthemen können das Dach direkt betreffen?",
error:"Dach nicht nur als Dachdecker-Thema betrachten. Auch Gebäudetechnik hat relevante Durchdringungen und Entwässerung.",scene:9
},
{
t:"Fenster, Fassade & Gebäudehülle",s:"Das Gebäude wird gegen Aussen zunehmend geschlossen.",
why:"Die Gebäudehülle trennt Innen und Aussen und schützt vor Witterung.",
steps:["Fenster und Aussentüren einsetzen.","Fassaden- und Dämmschichten gemäss System vervollständigen.","Anschlüsse und Durchdringungen koordinieren."],
terms:[["Gebäudehülle","Bauteile, die Innenräume gegen aussen abgrenzen."],["Wärmedämmung","Schicht zur Verringerung des Wärmedurchgangs."],["Anschlussdetail","Konstruktive Verbindung zwischen unterschiedlichen Bauteilen."]],
san:"Leitungsdurchführungen durch die Gebäudehülle müssen mit Abdichtung und Bauphysik abgestimmt sein.",
exam:"Warum sind Durchdringungen durch die Gebäudehülle sensibel?",
error:"Nur an die Leitung denken, nicht an Dichtheit, Wärmeschutz und Anschlussdetails.",scene:10
},
{
t:"Rohinstallation Gebäudetechnik",s:"Leitungsnetze und technische Systeme werden im Rohbau realisiert.",
why:"Jetzt werden die zuvor geplanten Trassen im realen Gebäude umgesetzt.",
steps:["Haupttrassen und Steigzonen gemäss koordinierten Plänen umsetzen.","Kaltwasser, Warmwasser, Entwässerung und weitere Systeme räumlich koordinieren.","Anschlusspunkte für spätere Apparate vorbereiten."],
terms:[["Steigzone","Vertikaler Installationsbereich über mehrere Geschosse."],["Rohinstallation","Leitungen und technische Komponenten vor der Endmontage."],["Anschlusspunkt","Definierte Stelle für den Anschluss eines Geräts oder Apparats."]],
san:"Planer vergleichen Ausführung und Planung, klären Abweichungen und koordinieren mit anderen Gewerken.",
exam:"Was ist der Unterschied zwischen Rohinstallation und Endmontage?",
error:"Leitungen nicht einfach in Schächten stapeln. Zugänglichkeit, Gefälle, Kreuzungen und Reihenfolge müssen geplant sein.",scene:11
},
{
t:"Innenwände & Vorwandsysteme",s:"Räume werden fertig gegliedert und Installationen integriert.",
why:"Vorwände schaffen Platz für Leitungen, Anschlüsse und Befestigungen bei Sanitärapparaten.",
steps:["Nichttragende Innenwände und Installationsbereiche erstellen.","Vorwandsysteme für Sanitäranschlüsse koordinieren.","Anschluss- und Befestigungspunkte für Apparate vorbereiten."],
terms:[["Vorwand","Konstruktion vor einer Wand zur Aufnahme von Installationen und Befestigungen."],["Montageelement","Systemelement für Befestigung und Anschluss bestimmter Sanitärapparate."],["Beplankung","Plattenförmige Bekleidung einer Unterkonstruktion."]],
san:"WC, Waschtisch, Dusche und weitere Apparate benötigen abgestimmte Höhen, Tiefen, Anschlüsse und Freiräume.",
exam:"Warum ist eine Vorwand für die Sanitärplanung mehr als nur eine Verkleidung?",
error:"Nur Leitungen einzeichnen. Befestigung, Bedienung, Wartung und Endoberfläche müssen ebenfalls passen.",scene:12
},
{
t:"Bodenaufbau, Abdichtung & Oberflächen",s:"Boden- und Wandaufbauten werden für den Ausbau fertiggestellt.",
why:"Jetzt entstehen Schichten, die Höhen und Anschlüsse endgültig beeinflussen.",
steps:["Bodenaufbauten und erforderliche Abdichtungen ausführen.","Gefällebereiche, etwa bei Duschen, gemäss Projekt herstellen.","Platten, Beläge und weitere Oberflächen fertigstellen."],
terms:[["Unterlagsboden / Estrich","Schicht des Bodenaufbaus zur Aufnahme des Belags bzw. als Nutzschicht je nach System."],["Abdichtung","Schicht bzw. System zum Schutz vor unerwünschtem Wasserdurchtritt."],["Fertigboden","Endgültige nutzbare Bodenoberfläche."]],
san:"Sanitäranschlusshöhen beziehen sich auf definierte Höhen. Rohboden und Fertigboden dürfen nicht verwechselt werden.",
exam:"Warum ist die Unterscheidung Rohboden/Fertigboden für Anschlusshöhen wichtig?",
error:"Höhen ohne Bezugsebene angeben. Das führt leicht zu falsch platzierten Anschlüssen.",scene:13
},
{
t:"Sanitär-Endmontage",s:"Sichtbare Apparate und Armaturen werden montiert und angeschlossen.",
why:"Aus vorbereiteten Anschlüssen wird eine nutzbare Sanitäranlage.",
steps:["Apparate und Armaturen an vorbereiteten Punkten montieren.","Anschlüsse herstellen und Funktion kontrollieren.","Oberflächen, Zugänglichkeit und Bedienbarkeit prüfen."],
terms:[["Sanitärapparat","Ausstattungsobjekt wie WC, Waschtisch oder Dusche."],["Armatur","Bauteil zur Steuerung oder Entnahme von Wasser."],["Endmontage","Letzte Montagephase sichtbarer und nutzbarer Komponenten."]],
san:"Die Planungsqualität zeigt sich jetzt deutlich: Stimmen Achsen, Höhen, Platzverhältnisse und Anschlüsse?",
exam:"Nenne vier Dinge, die bei der Endmontage sichtbar werden, wenn vorher schlecht geplant wurde.",
error:"Endmontage ist nicht nur handwerklich; sie ist auch eine Kontrolle der vorgängigen Planung.",scene:14
},
{
t:"Umgebung & Aussenentwässerung",s:"Aussenflächen, Gelände und Entwässerung werden fertiggestellt.",
why:"Gebäude und Grundstück müssen auch ausserhalb der Fassade als System funktionieren.",
steps:["Gelände und Aussenflächen auf geplante Höhen bringen.","Entwässerung von Dach- und Aussenflächen koordinieren.","Schächte, Anschlüsse und Zugänge fertigstellen."],
terms:[["Aussenentwässerung","Ableitung bzw. Bewirtschaftung von Niederschlags- und Entwässerungswasser im Aussenbereich."],["Schacht","Zugänglicher Bauteil für Leitungsführung, Kontrolle oder Anschluss."],["Terrainhöhe","Höhe der fertigen oder bestehenden Geländeoberfläche."]],
san:"Höhen und Anschlussstellen müssen mit Gebäude und Umgebung zusammenpassen.",
exam:"Warum kann eine Terrainänderung Auswirkungen auf die Entwässerungsplanung haben?",
error:"Umgebung nicht getrennt vom Gebäude betrachten. Leitungs- und Höhenbeziehungen gehen über die Fassade hinaus.",scene:15
},
{
t:"Prüfung & Inbetriebnahme",s:"Die Anlage wird kontrolliert, dokumentiert und für den Betrieb vorbereitet.",
why:"Eine Anlage ist nicht fertig, nur weil alles montiert aussieht.",
steps:["Ausführung und Funktion gemäss Projekt und Vorgaben kontrollieren.","Erforderliche Prüfungen und Einstellungen durchführen.","Dokumentation, Instruktion und Übergabe vorbereiten."],
terms:[["Inbetriebnahme","Geordneter Übergang einer Anlage in den vorgesehenen Betrieb."],["Kontrolle","Vergleich zwischen Anforderungen, Planung und Ausführung."],["Revisionsunterlagen","Dokumentation des tatsächlich ausgeführten Zustands."]],
san:"Änderungen müssen dokumentiert und Unterlagen dem realen Zustand angepasst werden.",
exam:"Was ist der Zweck von Revisionsunterlagen?",
error:"Planunterlagen nach Bauende unverändert lassen, obwohl auf der Baustelle Änderungen gemacht wurden.",scene:16
},
{
t:"Übergabe & Betrieb",s:"Das fertige Gebäude wird übergeben und geht in die Nutzungsphase.",
why:"Gebäudetechnik muss nicht nur gebaut, sondern langfristig betrieben und unterhalten werden können.",
steps:["Gebäude und Anlagen werden der Bauherrschaft übergeben.","Nutzende bzw. Betreiber erhalten notwendige Informationen.","Wartung, Zugänglichkeit und spätere Änderungen werden im Betrieb relevant."],
terms:[["Übergabe","Abschluss der Realisierungsphase und Übergang an Bauherrschaft bzw. Nutzung."],["Betrieb","Nutzungsphase des Gebäudes."],["Unterhalt","Massnahmen zur Erhaltung von Funktion und Zustand."]],
san:"Gute Planung denkt den Lebenszyklus mit: Bedienung, Wartung, Reparatur und Ersatz.",
exam:"Warum endet gute Gebäudetechnikplanung nicht mit der Montage?",
error:"Nur Baukosten betrachten. Zugänglichkeit und Unterhalt beeinflussen die Qualität über viele Jahre.",scene:16
}
];

const FLASHCARDS=[
["Absteckung","Plan → Realität","Die geplante Lage des Gebäudes wird auf das Grundstück übertragen."],
["Aushub","Boden → Baugrube","Erdmaterial wird entfernt, damit unterirdische Bauteile entstehen können."],
["Fundation","Gebäude → Baugrund","Sie überträgt die Lasten des Bauwerks in den Baugrund."],
["Bodenplatte","Basis des Gebäudes","Wichtige Schnittstelle für Tragwerk, Abdichtung und Einlagen."],
["Rohbau","Tragstruktur","Wände, Stützen und Decken formen die konstruktive Grundstruktur."],
["Schacht","Vertikale Technikzone","Führt Installationen über mehrere Geschosse."],
["Durchbruch","Geplante Öffnung","Muss mit Tragwerk und weiteren Anforderungen koordiniert sein."],
["Rohinstallation","Technik vor Endmontage","Leitungen und vorbereitete Anschlusspunkte werden umgesetzt."],
["Vorwand","Installations- und Montageraum","Nimmt Leitungen, Anschlüsse und Befestigungen für Apparate auf."],
["Fertigboden","Endgültige Bezugsebene","Für Anschlusshöhen nicht mit Rohboden verwechseln."],
["Inbetriebnahme","Funktion prüfen","Anlage kontrollieren, dokumentieren und betriebsbereit machen."],
["Revisionsunterlagen","Wie wirklich gebaut wurde","Dokumentieren den ausgeführten Zustand."]
];

const EXAM_QS=[
{q:"Was passiert typischerweise vor dem Aushub?",a:["Sanitär-Endmontage","Absteckung des Gebäudes","Fertigboden erstellen","Inbetriebnahme"],c:1,e:"Die geplante Gebäudelage wird vor den Erdarbeiten in die Realität übertragen."},
{q:"Warum sind Höhenkoten für Entwässerungsleitungen wichtig?",a:["Nur damit der Plan sauber aussieht","Weil Entwässerung eine funktionierende Höhenführung benötigt","Damit Fenster gleich hoch sind","Nur für die Kostenberechnung"],c:1,e:"Bei Entwässerung sind Lage und insbesondere Höhenbeziehungen entscheidend."},
{q:"Wann müssen Deckendurchbrüche idealerweise koordiniert sein?",a:["Nach der Endmontage","Vor dem Erstellen der Decke","Nach der Gebäudeübergabe","Erst nach der Fassade"],c:1,e:"Durchbrüche und Einlagen werden vor der Herstellung des Bauteils koordiniert."},
{q:"Welche Aussage zum Schacht ist richtig?",a:["Er ist nur architektonische Dekoration","Er dient häufig der vertikalen Führung technischer Installationen","Er ersetzt immer einen Technikraum","Er kommt nur im Dach vor"],c:1,e:"Schächte sind wichtige vertikale Installationszonen."},
{q:"Was gehört zur Rohinstallation?",a:["Nur sichtbare Armaturen","Leitungsnetze und vorbereitete Anschlusspunkte vor der Endmontage","Nur Bodenbeläge","Nur Fassadenarbeiten"],c:1,e:"Die Rohinstallation umfasst technische Leitungen und vorbereitete Anschlüsse."},
{q:"Was ist ein häufiger Planungsfehler bei mehreren Geschossen?",a:["Vertikale Leitungswege geschossweise isoliert betrachten","Grundriss und Schnitt gemeinsam prüfen","Schächte früh koordinieren","Höhenbezüge angeben"],c:0,e:"Vertikale Systeme müssen über mehrere Geschosse durchgehend funktionieren."},
{q:"Welche Hauptaufgabe hat die Fundation?",a:["Dach entwässern","Gebäudelasten in den Baugrund übertragen","Fenster befestigen","Armaturen tragen"],c:1,e:"Die Fundation bildet die lastübertragende Verbindung zwischen Gebäude und Baugrund."},
{q:"Warum ist der Technikraum früh zu planen?",a:["Weil dort keine Leitungen verlaufen","Weil Anlagen, Leitungen, Bedienung und Wartung Platz benötigen","Nur wegen der Wandfarbe","Er ist erst nach Bauende wichtig"],c:1,e:"Technikräume brauchen Geräte-, Anschluss-, Bedien- und Wartungsräume."},
{q:"Was unterscheidet Fertigboden vom Rohboden?",a:["Nichts","Fertigboden ist die endgültige Oberfläche; dazwischen können weitere Schichten liegen","Rohboden ist immer Holz","Fertigboden gibt es nur im Keller"],c:1,e:"Für Anschlusshöhen ist der richtige Höhenbezug entscheidend."},
{q:"Was sind Revisionsunterlagen?",a:["Werbeunterlagen","Dokumentation des tatsächlich ausgeführten Zustands","Baustellenzufahrt","Baubewilligung"],c:1,e:"Sie halten den real ausgeführten Zustand bzw. Änderungen fest."},
{q:"Welche Reihenfolge ist plausibel?",a:["Endmontage → Aushub → Fundation","Aushub → Fundation → Rohbau → Rohinstallation → Endmontage","Dach → Grundstück → Bodenplatte","Inbetriebnahme → Rohbau → Planung"],c:1,e:"Die Bauphasen folgen einer logischen Abfolge vom Erd- und Rohbau bis zum Ausbau."},
{q:"Warum ist ein Gebäudeschnitt für Sanitärplaner wichtig?",a:["Nur wegen der Fassadenfarbe","Er zeigt Höhen, Geschosse und vertikale Leitungsbeziehungen","Er zeigt nur Möblierung","Er ersetzt sämtliche Grundrisse"],c:1,e:"Schnitte machen vertikale Beziehungen sichtbar, die ein Grundriss allein nicht zeigt."},
{q:"Was muss vor dem Betonieren einer Bodenplatte besonders geprüft werden?",a:["Nur die spätere Wandfarbe","Geplante Einlagen, Durchführungen und Anschlusspunkte","Nur die Möblierung","Nur das Dach"],c:1,e:"Spätere Änderungen an einbetonierten oder darunterliegenden Elementen können schwierig sein."},
{q:"Was ist der beste Merksatz zur Planung von Entwässerung?",a:["Nur der Grundriss zählt","Lage und Höhe immer gemeinsam prüfen","Gefälle ist nur beim Dach wichtig","Entwässerung beginnt erst bei der Endmontage"],c:1,e:"Entwässerung muss räumlich und in der Höhe funktionieren."},
{q:"Was ist die Aufgabe der Inbetriebnahme?",a:["Gebäude wieder planen","Anlage kontrollieren, dokumentieren und betriebsbereit machen","Nur Apparate bestellen","Baugrube vermessen"],c:1,e:"Nach der Montage folgen Funktionskontrolle, Dokumentation und Übergabe in den Betrieb."}
];

const MEMORY=[
"Erst Anforderungen klären, dann zeichnen und bauen.",
"Grundstück, Höhen und Anschlüsse sind Teil der technischen Planung.",
"Der Geometer macht Lage und Höhe zuverlässig nutzbar.",
"Schächte und Technikräume sind keine Restflächen.",
"Was später im Bauteil liegt, muss vorher koordiniert sein.",
"Eine Baustelle braucht Organisation, bevor sie Leistung bringen kann.",
"Abstecken bedeutet: Planung präzise in die Realität übertragen.",
"Aushub schafft den Raum für alles, was unter Terrain entsteht.",
"Vor der Bodenplatte müssen Untergrund und Einlagen stimmen.",
"Unterirdische Leitungen immer in Lage UND Höhe prüfen.",
"Die Fundation bringt die Lasten sicher in den Baugrund.",
"Vor dem Betonieren: Durchführungen, Einlagen und Anschlüsse prüfen.",
"Technikraum und Schächte brauchen Platz und Zugänglichkeit.",
"Ein Leitungsweg darf nicht mit Tragwerk oder Öffnungen kollidieren.",
"Vertikale Leitungen müssen über mehrere Geschosse zusammenpassen.",
"Auch das Dach ist eine Schnittstelle zur Sanitärplanung.",
"Gebäudehülle und Leitungsdurchführung müssen gemeinsam funktionieren.",
"Rohinstallation = Leitungsnetze und vorbereitete Anschlüsse.",
"Vorwand = Installationsraum + Befestigung + Ausbaukoordination.",
"Anschlusshöhen brauchen eine eindeutige Bezugshöhe.",
"Endmontage zeigt, ob die Vorplanung wirklich gepasst hat.",
"Gebäude und Umgebung bilden bei der Entwässerung ein System.",
"Inbetriebnahme bedeutet kontrollieren, dokumentieren und betriebsbereit machen.",
"Gute Planung denkt Wartung und Betrieb mit."
];
