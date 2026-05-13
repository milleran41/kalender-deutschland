// Extra long-form history text and additional open-access media.
(function() {
  const img = function(file) {
    return 'assets/history/' + file
      .normalize('NFKD')
      .replace(/[^\w.\-()]+/g, '_')
      .replace(/_+/g, '_')
      .replace(/^_|_$/g, '');
  };

  const extra = {
    'tribes-rome': {
      body: {
        ru: ['Для ранней истории Германии важно не представлять германцев как готовую нацию. Это были разные племена и союзы племён, жившие между Рейном, Эльбой, Дунаем и Балтикой. Римляне торговали с ними, нанимали воинов, строили укрепления и одновременно боялись нестабильной границы.', 'Римское влияние ощущалось через дороги, монеты, оружие, роскошные предметы и военную службу. Победа Арминия стала символом сопротивления, но реальная история была сложнее: часть германских лидеров сотрудничала с Римом, часть воевала, а границы постоянно менялись.'],
        de: ['Für die frühe deutsche Geschichte ist wichtig: Germanen waren keine fertige Nation, sondern viele Stämme und Stammesverbände zwischen Rhein, Elbe, Donau und Ostsee. Rom handelte mit ihnen, warb Krieger an, baute Grenzanlagen und fürchtete zugleich die instabile Grenze.', 'Römischer Einfluss zeigte sich in Straßen, Münzen, Waffen, Luxusgütern und Militärdienst. Arminius wurde später zum Symbol des Widerstands, doch die Wirklichkeit war gemischter: Manche Anführer kooperierten mit Rom, andere kämpften gegen Rom.'],
        en: ['For early German history, it is important not to imagine the Germanic peoples as a ready-made nation. They were many tribes and tribal coalitions living between the Rhine, Elbe, Danube and Baltic Sea. Rome traded with them, recruited warriors, built frontier defenses and feared the unstable border.', 'Roman influence appeared through roads, coins, weapons, luxury goods and military service. Arminius later became a symbol of resistance, but the reality was more complex: some leaders cooperated with Rome, others fought it.']
      },
      media: [
        { title: { ru: 'Лимес на римской границе', de: 'Limes an der römischen Grenze', en: 'Limes on the Roman frontier' }, image: img('Limes2.png'), kind: 'map' },
        { title: { ru: 'Римская Германия и племена', de: 'Römisches Germanien und Stämme', en: 'Roman Germania and tribes' }, image: img('Germania_98.svg'), kind: 'map' }
      ]
    },
    'franks-carolingians': {
      body: {
        ru: ['Франкское королевство стало мостом между античным Римом и средневековой Европой. Оно унаследовало латинскую церковь, часть римской административной культуры и военную энергию германских элит.', 'Каролингская империя была огромной, но держалась на личной власти, земельных дарах и союзе с церковью. После разделов наследства западная и восточная части пошли разными путями, что постепенно подготовило будущие Францию и Германию.'],
        de: ['Das Frankenreich wurde zur Brücke zwischen antikem Rom und mittelalterlichem Europa. Es übernahm lateinische Kirche, Teile römischer Verwaltungskultur und die militärische Energie germanischer Eliten.', 'Das karolingische Reich war groß, beruhte aber auf persönlicher Herrschaft, Landschenkungen und dem Bündnis mit der Kirche. Nach den Reichsteilungen gingen westliche und östliche Teile verschiedene Wege.'],
        en: ['The Frankish kingdom became a bridge between ancient Rome and medieval Europe. It inherited the Latin church, parts of Roman administrative culture and the military energy of Germanic elites.', 'The Carolingian Empire was vast, but it rested on personal rule, land grants and alliance with the church. After the partitions, western and eastern parts moved in different directions, preparing the ground for France and Germany.']
      },
      media: [
        { title: { ru: 'Разделы Франкской империи', de: 'Teilungen des Frankenreiches', en: 'Partitions of the Frankish Empire' }, image: img('Treaty_of_Verdun.svg'), kind: 'map' },
        { title: { ru: 'Ахенская капелла Карла Великого', de: 'Aachener Pfalzkapelle Karls des Großen', en: 'Charlemagne’s Palatine Chapel in Aachen' }, image: img('Aachen_Germany_Imperial-Cathedral-01.jpg'), kind: 'image' }
      ]
    },
    'holy-roman-empire': {
      body: {
        ru: ['Священная Римская империя не была государством в современном смысле. Император обладал престижем, но власть делилась с князьями, епископами, городами и курфюрстами. Поэтому немецкая история долго развивалась как история многих центров.', 'Эта раздробленность мешала единой политике, но создавала богатую карту культур: имперские города, церковные земли, княжества, университеты и торговые пути. Германия стала не одной столицей, а множеством региональных миров.'],
        de: ['Das Heilige Römische Reich war kein Staat im modernen Sinn. Der Kaiser besaß Prestige, doch Macht lag auch bei Fürsten, Bischöfen, Städten und Kurfürsten. Deshalb entwickelte sich deutsche Geschichte lange als Geschichte vieler Zentren.', 'Diese Zersplitterung erschwerte einheitliche Politik, schuf aber eine reiche Kulturlandschaft: Reichsstädte, geistliche Territorien, Fürstentümer, Universitäten und Handelswege.'],
        en: ['The Holy Roman Empire was not a state in the modern sense. The emperor had prestige, but power was shared with princes, bishops, cities and electors. German history therefore developed for centuries as the history of many centers.', 'This fragmentation made unified policy difficult, but it created a rich cultural map of imperial cities, ecclesiastical territories, principalities, universities and trade routes.']
      },
      media: [
        { title: { ru: 'Империя в 1618 году', de: 'Das Reich 1618', en: 'The Empire in 1618' }, image: img('Map_of_the_Holy_Roman_Empire_(1618)_-_DE.svg'), kind: 'map' },
        { title: { ru: 'Имперские регалии', de: 'Reichskleinodien', en: 'Imperial regalia' }, image: img('Reichskrone.jpg'), kind: 'image' }
      ]
    },
    'medieval-cities': {
      body: {
        ru: ['Средневековые города меняли жизнь сильнее, чем кажется. В них возникали ремесленные цехи, рынки, городские советы и собственное право. Горожане учились договариваться, защищать стены и торговать далеко за пределами своего региона.', 'Ганза стала северной торговой сетью, где немецкие города связывали Балтику, Северное море, Скандинавию, Русь и Англию. Это была не империя, а союз интересов, денег, кораблей и привилегий.'],
        de: ['Mittelalterliche Städte veränderten das Leben stärker, als es zunächst scheint. In ihnen entstanden Zünfte, Märkte, Stadträte und eigenes Recht. Bürger lernten zu verhandeln, Mauern zu verteidigen und weit zu handeln.', 'Die Hanse wurde zu einem nördlichen Handelsnetz, in dem deutsche Städte Ostsee, Nordsee, Skandinavien, Russland und England verbanden. Sie war kein Staat, sondern ein Bündnis aus Interessen, Geld, Schiffen und Privilegien.'],
        en: ['Medieval cities changed life more deeply than it may seem. Guilds, markets, town councils and urban law emerged there. Citizens learned to negotiate, defend walls and trade far beyond their region.', 'The Hanse became a northern trade network in which German cities connected the Baltic, North Sea, Scandinavia, Rus’ and England. It was not an empire, but an alliance of interests, money, ships and privileges.']
      },
      media: [
        { title: { ru: 'Ганзейский союз', de: 'Hansebund', en: 'Hanseatic League' }, image: img('Hansa-1400.png'), kind: 'map' },
        { title: { ru: 'Ганзейский город Любек', de: 'Hansestadt Lübeck', en: 'Hanseatic city of Lübeck' }, image: img('Lübeck_Holstentor_2007.jpg'), kind: 'image' }
      ]
    },
    'reformation': {
      body: {
        ru: ['Реформация изменила не только церковь. Она ускорила распространение грамотности, усилила роль печатного слова и дала князьям новый инструмент политической самостоятельности. Немецкие земли стали полем спора о вере, власти и праве совести.', 'Перевод Библии Лютером повлиял на немецкий литературный язык. Но Реформация также породила конфликты: крестьянская война, споры между князьями и императором, а затем долгий конфессиональный раскол.'],
        de: ['Die Reformation veränderte nicht nur die Kirche. Sie beschleunigte Alphabetisierung, stärkte das gedruckte Wort und gab Fürsten ein neues Instrument politischer Eigenständigkeit. Deutsche Länder wurden zum Streitfeld von Glauben, Macht und Gewissen.', 'Luthers Bibelübersetzung prägte die deutsche Schriftsprache. Doch die Reformation brachte auch Konflikte hervor: Bauernkrieg, Streit zwischen Fürsten und Kaiser und eine lange konfessionelle Spaltung.'],
        en: ['The Reformation changed more than the church. It accelerated literacy, strengthened the printed word and gave princes a new instrument of political autonomy. German lands became an arena of faith, power and conscience.', 'Luther’s Bible translation influenced the German literary language. But the Reformation also produced conflict: the Peasants’ War, disputes between princes and emperor and a long confessional split.']
      },
      media: [
        { title: { ru: '95 тезисов', de: '95 Thesen', en: 'Ninety-five Theses' }, image: img('95Thesen.jpg'), kind: 'image' },
        { title: { ru: 'Замковая церковь в Виттенберге', de: 'Schlosskirche Wittenberg', en: 'Castle Church in Wittenberg' }, image: img('Wittenberg_Schlosskirche.jpg'), kind: 'image' }
      ]
    },
    'thirty-years-war': {
      body: {
        ru: ['Тридцатилетняя война стала одной из самых разрушительных страниц немецкой истории. Армии проходили через одни и те же территории, брали контрибуции, жгли деревни и оставляли после себя голод и эпидемии.', 'Вестфальский мир не создал немецкого единства, но закрепил право территорий самостоятельно определять многое в своей политике. Для Европы он стал символом новой дипломатии, где баланс сил важнее мечты об универсальной империи.'],
        de: ['Der Dreißigjährige Krieg wurde zu einer der zerstörerischsten Phasen deutscher Geschichte. Armeen zogen wiederholt durch dieselben Gebiete, erhoben Kontributionen, verbrannten Dörfer und hinterließen Hunger und Seuchen.', 'Der Westfälische Frieden schuf keine deutsche Einheit, bestätigte aber die Eigenständigkeit vieler Territorien. Für Europa wurde er zum Symbol neuer Diplomatie, in der Gleichgewicht wichtiger wurde als Universalreich.'],
        en: ['The Thirty Years’ War became one of the most destructive phases of German history. Armies repeatedly crossed the same territories, levied contributions, burned villages and left hunger and disease behind.', 'The Peace of Westphalia did not create German unity, but it confirmed the autonomy of many territories. For Europe it became a symbol of new diplomacy, where balance of power mattered more than universal empire.']
      },
      media: [
        { title: { ru: 'Империя накануне войны', de: 'Das Reich vor dem Krieg', en: 'The Empire before the war' }, image: img('Map_of_the_Holy_Roman_Empire_(1618)_-_DE.svg'), kind: 'map' },
        { title: { ru: 'Вестфальский мир', de: 'Westfälischer Frieden', en: 'Peace of Westphalia' }, image: img('Ratification_of_the_Treaty_of_Münster,_1648.jpg'), kind: 'image' }
      ]
    },
    'prussia-enlightenment': {
      body: {
        ru: ['Пруссия строилась как государство дисциплины: армия, чиновники, налоги и школа работали на усиление монархии. Но рядом с этой жёсткой системой развивались наука, музыка, философия и идеи просвещённого правления.', 'Фридрих II стал двойственным символом эпохи: полководец и покровитель культуры, циничный практик и поклонник философии. Именно в это время соперничество Австрии и Пруссии стало главным вопросом немецкой политики.'],
        de: ['Preußen entstand als Staat der Disziplin: Armee, Beamte, Steuern und Schule dienten der Stärkung der Monarchie. Zugleich entwickelten sich Wissenschaft, Musik, Philosophie und Ideen aufgeklärter Herrschaft.', 'Friedrich II wurde zum ambivalenten Symbol der Epoche: Feldherr und Kulturförderer, nüchterner Machtpolitiker und Bewunderer der Philosophie. In dieser Zeit wurde der Gegensatz zwischen Österreich und Preußen zur Kernfrage deutscher Politik.'],
        en: ['Prussia was built as a state of discipline: army, bureaucracy, taxes and schools served the monarchy. Alongside this strict system, science, music, philosophy and ideas of enlightened rule developed.', 'Frederick II became an ambiguous symbol of the age: commander and patron of culture, hard-headed power politician and admirer of philosophy. The rivalry between Austria and Prussia became the central question of German politics.']
      },
      media: [
        { title: { ru: 'Пруссия в XVIII веке', de: 'Preußen im 18. Jahrhundert', en: 'Prussia in the eighteenth century' }, image: img('Prussia_1806.svg'), kind: 'map' },
        { title: { ru: 'Кант в Кёнигсберге', de: 'Kant in Königsberg', en: 'Kant in Königsberg' }, image: img('Immanuel_Kant_(painted_portrait).jpg'), kind: 'image' }
      ]
    },
    'napoleonic-era': {
      body: {
        ru: ['Наполеоновская эпоха разрушила старую имперскую оболочку. Множество мелких владений исчезло, появились новые государства и реформы, а французское право и административные модели повлияли на западные немецкие земли.', 'Поражение Пруссии стало шоком, но именно оно подтолкнуло реформы армии, образования и местного самоуправления. Освободительные войны создали новый язык патриотизма, который позже станет частью идеи объединения.'],
        de: ['Die napoleonische Epoche sprengte die alte Reichsordnung. Viele Kleinterritorien verschwanden, neue Staaten und Reformen entstanden, französisches Recht und Verwaltung prägten westdeutsche Gebiete.', 'Preußens Niederlage war ein Schock, trieb aber Reformen in Armee, Bildung und kommunaler Verwaltung an. Die Befreiungskriege schufen eine neue Sprache des Patriotismus, die später in die Einheitsidee einging.'],
        en: ['The Napoleonic era broke the old imperial order. Many small territories disappeared, new states and reforms emerged, and French law and administration influenced western German lands.', 'Prussia’s defeat was a shock, but it pushed reforms in the army, education and local government. The Wars of Liberation created a new language of patriotism that later fed the idea of unity.']
      },
      media: [
        { title: { ru: 'Германские земли при Наполеоне', de: 'Deutsche Länder unter Napoleon', en: 'German lands under Napoleon' }, image: img('Rheinbund_1812.png'), kind: 'map' },
        { title: { ru: 'Наполеон в Берлине', de: 'Napoleon in Berlin', en: 'Napoleon in Berlin' }, image: img('Napoleon_in_Berlin_1806.jpg'), kind: 'image' }
      ]
    },
    'revolutions-1848': {
      body: {
        ru: ['Революции 1848 года были моментом, когда либеральная и национальная мечта почти стала политической реальностью. Депутаты во Франкфурте обсуждали права граждан, устройство государства и границы будущей Германии.', 'Главная слабость революции была в том, что она зависела от согласия монархов и армий. Когда король Пруссии отказался принять корону “из рук народа”, проект единства через парламент рухнул, но память о нём осталась.'],
        de: ['Die Revolutionen von 1848 waren der Moment, in dem liberale und nationale Träume fast politische Wirklichkeit wurden. Abgeordnete in Frankfurt diskutierten Bürgerrechte, Staatsordnung und Grenzen eines künftigen Deutschlands.', 'Die Schwäche der Revolution lag darin, dass sie vom Einverständnis der Monarchen und Armeen abhängig blieb. Als der preußische König die Krone „aus der Hand des Volkes“ ablehnte, scheiterte die parlamentarische Einigung.'],
        en: ['The revolutions of 1848 were the moment when liberal and national dreams almost became political reality. Deputies in Frankfurt debated civil rights, constitutional order and the borders of a future Germany.', 'The weakness of the revolution was its dependence on monarchs and armies. When the Prussian king refused a crown “from the hands of the people,” the parliamentary project of unity collapsed, but its memory survived.']
      },
      media: [
        { title: { ru: 'Паульскирхе во Франкфурте', de: 'Paulskirche in Frankfurt', en: 'Paulskirche in Frankfurt' }, image: img('Frankfurt_Am_Main-Paulskirche-Ansicht_von_Südosten-20110410.jpg'), kind: 'image' },
        { title: { ru: 'Германия и революции 1848', de: 'Deutschland und die Revolution 1848', en: 'Germany and the 1848 revolutions' }, image: img('Revolutions_of_1848_in_Europe.png'), kind: 'map' }
      ]
    },
    'unification': {
      body: {
        ru: ['Объединение Германии произошло через “малонемецкое” решение: без Австрии и под руководством Пруссии. Это создало сильное государство, но также закрепило военную и монархическую рамку рождения империи.', 'Версальская церемония 1871 года была символичной: немецкая империя возникла в зале французских королей после победы над Францией. Этот триумф сразу содержал будущую проблему европейского баланса и французского реваншизма.'],
        de: ['Die deutsche Einigung erfolgte als kleindeutsche Lösung: ohne Österreich und unter Führung Preußens. Sie schuf einen starken Staat, verankerte aber auch den militärisch-monarchischen Rahmen seiner Geburt.', 'Die Zeremonie von Versailles 1871 war hochsymbolisch: Das Reich entstand im Spiegelsaal der französischen Könige nach dem Sieg über Frankreich. Der Triumph enthielt bereits künftige Probleme des europäischen Gleichgewichts.'],
        en: ['German unification followed the “Lesser German” solution: without Austria and under Prussian leadership. It created a strong state, but also embedded the military and monarchical framework of its birth.', 'The ceremony at Versailles in 1871 was highly symbolic: the empire was proclaimed in the hall of French kings after victory over France. The triumph already contained future problems of European balance and French revanchism.']
      },
      media: [
        { title: { ru: 'Карта объединения Германии', de: 'Karte der deutschen Einigung', en: 'Map of German unification' }, image: img('C._1871_Unification_of_Germany.jpg'), kind: 'map' },
        { title: { ru: 'Провозглашение империи 1871', de: 'Kaiserproklamation 1871', en: 'Proclamation of the Empire 1871' }, image: img('1871_Proclamation_of_the_German_Empire.jpg'), kind: 'image' }
      ]
    },
    'german-empire': {
      body: {
        ru: ['Германская империя быстро стала промышленным гигантом. Химия, электротехника, машиностроение, железные дороги и университеты сделали её одной из самых динамичных стран мира.', 'Но политическая система оставалась противоречивой: парламент существовал, партии росли, но император, армия и прусские элиты сохраняли огромную власть. Модернизация общества опережала демократизацию государства.'],
        de: ['Das Kaiserreich wurde rasch zum industriellen Giganten. Chemie, Elektrotechnik, Maschinenbau, Eisenbahnen und Universitäten machten es zu einem der dynamischsten Länder der Welt.', 'Doch das politische System blieb widersprüchlich: Parlament und Parteien wuchsen, aber Kaiser, Militär und preußische Eliten behielten große Macht. Die Modernisierung der Gesellschaft überholte die Demokratisierung des Staates.'],
        en: ['The German Empire quickly became an industrial giant. Chemistry, electrical engineering, machine building, railways and universities made it one of the world’s most dynamic countries.', 'Yet its political system remained contradictory: parliament and parties grew, but emperor, army and Prussian elites retained enormous power. Social modernization outpaced democratization of the state.']
      },
      media: [
        { title: { ru: 'Германская империя', de: 'Deutsches Kaiserreich', en: 'German Empire' }, image: img('German_Empire,_Wilhelminian_third_version.svg'), kind: 'map' },
        { title: { ru: 'Индустриальный Рур', de: 'Industrielles Ruhrgebiet', en: 'Industrial Ruhr' }, image: img('Zeche_Zollverein_abends.jpg'), kind: 'image' }
      ]
    },
    'weimar': {
      body: {
        ru: ['Веймарская республика была не только кризисом. Это была эпоха женского избирательного права, новых социальных прав, авангарда, радио, кино, дизайна и бурной городской культуры.', 'Но демократия родилась в условиях поражения, инфляции и политического насилия. Её враги были и справа, и слева, а экономический обвал после 1929 года сделал компромисс всё более невозможным.'],
        de: ['Die Weimarer Republik war nicht nur Krise. Sie brachte Frauenwahlrecht, neue soziale Rechte, Avantgarde, Radio, Film, Design und eine lebendige Stadtkultur.', 'Doch die Demokratie entstand unter Niederlage, Inflation und politischer Gewalt. Ihre Gegner standen rechts und links, und der Wirtschaftseinbruch nach 1929 machte Kompromisse immer schwieriger.'],
        en: ['The Weimar Republic was not only crisis. It brought women’s suffrage, new social rights, avant-garde art, radio, film, design and vibrant urban culture.', 'But democracy was born amid defeat, inflation and political violence. Its enemies stood on both right and left, and the economic collapse after 1929 made compromise increasingly difficult.']
      },
      media: [
        { title: { ru: 'Баухаус', de: 'Bauhaus', en: 'Bauhaus' }, image: img('Bauhaus_Dessau.jpg'), kind: 'image' },
        { title: { ru: 'Гиперинфляция 1923 года', de: 'Hyperinflation 1923', en: 'Hyperinflation of 1923' }, image: img('Bundesarchiv_Bild_102-00104,_Berlin,_Geldtransport.jpg'), kind: 'image' }
      ]
    },
    'nazi-ww2': {
      body: {
        ru: ['Эта эпоха должна быть показана без романтизации. Нацистский режим построил диктатуру через террор, пропаганду, уничтожение правового государства и исключение целых групп людей из общества.', 'Война и Холокост стали результатом идеологии расизма, экспансии и насилия. Для современной Германии память об этой катастрофе — основа политической ответственности, образования и отношения к демократии.'],
        de: ['Diese Epoche muss ohne Romantisierung gezeigt werden. Das NS-Regime errichtete Diktatur durch Terror, Propaganda, Zerstörung des Rechtsstaates und Ausschluss ganzer Gruppen aus der Gesellschaft.', 'Krieg und Holocaust waren Ergebnis einer Ideologie von Rassismus, Expansion und Gewalt. Für das heutige Deutschland ist die Erinnerung daran Grundlage politischer Verantwortung und demokratischer Bildung.'],
        en: ['This period must be shown without romanticization. The Nazi regime built dictatorship through terror, propaganda, destruction of the rule of law and exclusion of entire groups from society.', 'War and the Holocaust resulted from an ideology of racism, expansion and violence. For modern Germany, memory of this catastrophe is a foundation of political responsibility and democratic education.']
      },
      media: [
        { title: { ru: 'Памятник жертвам Холокоста в Берлине', de: 'Denkmal für die ermordeten Juden Europas', en: 'Memorial to the Murdered Jews of Europe' }, image: img('Holocaust-Mahnmal_Berlin_2006.jpg'), kind: 'image' },
        { title: { ru: 'Европа под властью нацистов', de: 'Europa unter NS-Herrschaft', en: 'Europe under Nazi rule' }, image: img('Europe_under_Nazi_domination.png'), kind: 'map' }
      ]
    },
    'divided-germany': {
      body: {
        ru: ['Разделение Германии было не только геополитикой, но и повседневным опытом. Люди жили с разными паспортами, медиа, школами, армиями, экономиками и представлениями о будущем.', 'ФРГ постепенно встроилась в западные союзы и европейскую интеграцию. ГДР создала собственную социалистическую идентичность, но зависела от контроля, границ и аппарата безопасности. Берлинская стена стала самым сильным образом этой системы.'],
        de: ['Die Teilung Deutschlands war nicht nur Geopolitik, sondern Alltagserfahrung. Menschen lebten mit verschiedenen Pässen, Medien, Schulen, Armeen, Wirtschaftssystemen und Zukunftsbildern.', 'Die BRD integrierte sich in westliche Bündnisse und Europa. Die DDR entwickelte eine sozialistische Identität, blieb aber auf Kontrolle, Grenzen und Sicherheitsapparat angewiesen. Die Mauer wurde zum stärksten Bild dieser Ordnung.'],
        en: ['Germany’s division was not only geopolitics, but an everyday experience. People lived with different passports, media, schools, armies, economies and visions of the future.', 'West Germany integrated into western alliances and Europe. East Germany developed a socialist identity, but depended on control, borders and a security apparatus. The Wall became the strongest image of this order.']
      },
      media: [
        { title: { ru: 'ФРГ и ГДР', de: 'BRD und DDR', en: 'West and East Germany' }, image: img('Map-Germany-1945.svg'), kind: 'map' },
        { title: { ru: 'Чекпойнт Чарли', de: 'Checkpoint Charlie', en: 'Checkpoint Charlie' }, image: img('Checkpoint_Charlie_1961-10-27.jpg'), kind: 'image' }
      ]
    },
    'reunification': {
      body: {
        ru: ['Воссоединение было не внезапным подарком, а результатом давления снизу, кризиса ГДР, перестройки в СССР и быстрой дипломатии. Люди на улицах Лейпцига, Берлина и других городов сделали невозможным прежний порядок.', 'После 1990 года началась трудная интеграция: приватизация, безработица, переезд институтов, споры о памяти и неравенстве. Поэтому воссоединение — это не только праздник, но и долгий социальный процесс.'],
        de: ['Die Wiedervereinigung war kein plötzliches Geschenk, sondern Ergebnis von Druck von unten, Krise der DDR, Perestroika in der Sowjetunion und schneller Diplomatie. Menschen in Leipzig, Berlin und anderen Städten machten die alte Ordnung unmöglich.', 'Nach 1990 begann eine schwierige Integration: Privatisierung, Arbeitslosigkeit, Umzug von Institutionen, Debatten über Erinnerung und Ungleichheit. Einheit ist daher Festtag und langer sozialer Prozess zugleich.'],
        en: ['Reunification was not a sudden gift, but the result of pressure from below, the crisis of East Germany, perestroika in the Soviet Union and rapid diplomacy. People in Leipzig, Berlin and other cities made the old order impossible.', 'After 1990, difficult integration began: privatization, unemployment, relocation of institutions and debates over memory and inequality. Unity is therefore both a celebration and a long social process.']
      },
      media: [
        { title: { ru: 'Демонстрация в Лейпциге', de: 'Demonstration in Leipzig', en: 'Demonstration in Leipzig' }, image: img('Leipzig_Montagsdemonstration_1989.jpg'), kind: 'image' },
        { title: { ru: 'Договор “два плюс четыре”', de: 'Zwei-plus-Vier-Vertrag', en: 'Two Plus Four Agreement' }, image: img('Zwei-plus-Vier-Vertrag.jpg'), kind: 'image' }
      ]
    },
    'berlin-republic': {
      body: {
        ru: ['Берлинская республика — это Германия после возвращения столицы в Берлин и после принятия новой роли в Европе. Она больше не живёт только вопросом объединения, но постоянно возвращается к нему через различия между востоком и западом.', 'Эпоха Меркель дала образ стабильности, но оставила спорные темы: энергетическая зависимость, миграция, инфраструктура, оборона и цифровизация. После 2022 года Германия снова пересматривает своё место в безопасности Европы.'],
        de: ['Die Berliner Republik ist Deutschland nach der Rückkehr der Hauptstadt nach Berlin und nach der Übernahme einer neuen Rolle in Europa. Sie lebt nicht mehr nur von der Einheitsfrage, kehrt aber durch Ost-West-Unterschiede immer wieder zu ihr zurück.', 'Die Ära Merkel vermittelte Stabilität, hinterließ aber offene Streitfragen: Energieabhängigkeit, Migration, Infrastruktur, Verteidigung und Digitalisierung. Seit 2022 überprüft Deutschland seine Rolle in Europas Sicherheit neu.'],
        en: ['The Berlin Republic is Germany after the capital’s return to Berlin and after assuming a new role in Europe. It no longer lives only through the question of unity, but east-west differences keep bringing that question back.', 'The Merkel era projected stability, but left contested issues: energy dependence, migration, infrastructure, defense and digitalization. Since 2022, Germany has again been reassessing its role in European security.']
      },
      media: [
        { title: { ru: 'Берлинская правительственная четверть', de: 'Berliner Regierungsviertel', en: 'Berlin government district' }, image: img('Bundeskanzleramt_Berlin_2010.jpg'), kind: 'image' },
        { title: { ru: 'Европейский союз и Германия', de: 'Europäische Union und Deutschland', en: 'European Union and Germany' }, image: img('Germany_in_European_Union.svg'), kind: 'map' }
      ]
    },
    es: {
      'tribes-rome': {
        body: [
          "Para la historia temprana de Alemania es importante no imaginar a los germanos como una nación ya formada. Eran pueblos, alianzas y grupos distintos que vivían entre el Rin, el Elba, el Danubio y el Báltico.",
          "Roma comerciaba con ellos, contrataba guerreros, construía fortificaciones y al mismo tiempo temía una frontera inestable. Carreteras, monedas, armas, objetos de lujo y el servicio militar romano cambiaron poco a poco la vida de las élites locales."
        ],
        highlights: [
          "El Rin y el Danubio fueron líneas principales de contacto con Roma.",
          "La batalla del bosque de Teutoburgo detuvo la expansión romana hacia el este.",
          "La memoria de Arminio se convirtió mucho después en parte del mito nacional alemán."
        ]
      },
      'franks-carolingians': {
        body: [
          "El reino franco unió amplias regiones de Europa occidental y central. Bajo Carlomagno se formó un espacio político donde el cristianismo, la corte, el ejército y la escritura administrativa reforzaron el poder real.",
          "Tras la división del imperio carolingio, las tierras orientales se convirtieron gradualmente en el núcleo del futuro mundo alemán. No fue todavía un Estado nacional, sino una red de duques, obispos, monasterios y señores locales."
        ],
        highlights: [
          "Carlomagno combinó conquista militar, reforma religiosa y administración.",
          "Los monasterios conservaron textos, enseñaron y organizaron territorios.",
          "La Francia oriental preparó el marco político del futuro reino alemán."
        ]
      },
      'holy-roman-empire': {
        body: [
          "El Sacro Imperio Romano no fue un Estado centralizado como las monarquías modernas. Era una estructura política flexible donde emperadores, príncipes, obispos, ciudades libres y caballeros compartían y disputaban autoridad.",
          "Su fuerza estaba en la diversidad regional, pero esa misma diversidad limitaba el poder central. Durante siglos, la política alemana se desarrolló como negociación entre dinastías, leyes imperiales, Iglesia y territorios."
        ],
        highlights: [
          "La coronación imperial vinculaba la política alemana con Roma y la tradición cristiana.",
          "Los príncipes territoriales ganaron cada vez más autonomía.",
          "El imperio sobrevivió casi mil años, aunque cambió profundamente con el tiempo."
        ]
      },
      'medieval-cities': {
        body: [
          "En la Edad Media, las ciudades alemanas se convirtieron en centros de comercio, artesanía, derecho urbano y cultura. Mercados, murallas, gremios y consejos municipales dieron a muchas ciudades una fuerte identidad propia.",
          "La Liga Hanseática conectó puertos del mar del Norte y del Báltico con rutas comerciales internacionales. Al mismo tiempo, el mapa político seguía fragmentado entre principados, obispados y ciudades libres."
        ],
        highlights: [
          "Las ciudades libres defendían privilegios y autonomía frente a los señores territoriales.",
          "La Hansa hizo de Lübeck, Hamburgo y Bremen nodos comerciales importantes.",
          "La fragmentación política permitió mucha diversidad regional."
        ]
      },
      reformation: {
        body: [
          "La Reforma comenzó como una disputa teológica, pero transformó la política, la educación, la imprenta y la vida cotidiana. Alemania se convirtió en uno de los principales escenarios de la división confesional europea.",
          "Los escritos de Lutero se difundieron rápidamente gracias a la imprenta. Para muchos príncipes, la Reforma también fue una forma de fortalecer su autonomía frente al emperador y a Roma."
        ],
        highlights: [
          "La imprenta aceleró la difusión de ideas religiosas y políticas.",
          "La traducción bíblica de Lutero influyó en la lengua alemana escrita.",
          "La división entre católicos y protestantes marcó la historia alemana durante siglos."
        ]
      },
      'thirty-years-war': {
        body: [
          "La Guerra de los Treinta Años comenzó como conflicto religioso en el imperio, pero se convirtió en una guerra europea por poder, territorios y equilibrio político. Muchas regiones alemanas sufrieron destrucción, hambre y despoblación.",
          "La Paz de Westfalia no creó una Alemania unida, sino que confirmó la importancia de los territorios y de la diplomacia. Desde entonces, la política imperial dependió todavía más de compromisos entre múltiples poderes."
        ],
        highlights: [
          "El conflicto mezcló religión, ambición dinástica e intereses de potencias extranjeras.",
          "Ciudades y campos quedaron devastados en muchas zonas del imperio.",
          "Westfalia reforzó la autonomía de los territorios imperiales."
        ]
      },
      'prussia-enlightenment': {
        body: [
          "Prusia creció como potencia militar y administrativa. Su disciplina estatal, su ejército y sus reformas hicieron del reino uno de los actores principales del mundo alemán.",
          "Al mismo tiempo, la Ilustración alemana impulsó debates sobre razón, educación, derecho y libertad. Kant, Lessing y otros pensadores dieron a esta época una dimensión intelectual que iba más allá de la política dinástica."
        ],
        highlights: [
          "Prusia se convirtió en rival de Austria dentro del espacio alemán.",
          "Federico II combinó absolutismo, reformas y cultura ilustrada.",
          "La Ilustración alemana influyó en educación, filosofía y derecho."
        ]
      },
      'napoleonic-era': {
        body: [
          "Las guerras napoleónicas destruyeron el viejo orden imperial. En 1806 desapareció el Sacro Imperio Romano, y muchos territorios alemanes fueron reorganizados bajo influencia francesa.",
          "La ocupación y las reformas provocaron tanto modernización como resistencia. Nacieron nuevas ideas sobre ciudadanía, administración, ejército y nación, que serían decisivas en el siglo XIX."
        ],
        highlights: [
          "El Sacro Imperio Romano terminó en 1806.",
          "La Confederación del Rin reorganizó muchos territorios alemanes.",
          "Las guerras contra Napoleón fortalecieron el sentimiento nacional alemán."
        ]
      },
      'revolutions-1848': {
        body: [
          "Las revoluciones de 1848 exigieron constituciones, derechos civiles, libertad de prensa y unidad nacional. En Fráncfort se reunió una asamblea que intentó crear una Alemania constitucional.",
          "El proyecto fracasó por la resistencia de los monarcas, las divisiones internas y la cuestión de Austria y Prusia. Sin embargo, los colores negro, rojo y oro quedaron unidos a la idea democrática alemana."
        ],
        highlights: [
          "La Asamblea Nacional de Fráncfort fue un intento de crear una Alemania parlamentaria.",
          "Los revolucionarios defendieron derechos civiles y unidad nacional.",
          "El fracaso de 1848 no borró sus símbolos ni sus ideas democráticas."
        ]
      },
      unification: {
        body: [
          "La unificación alemana no nació de una revolución liberal, sino de la política de poder prusiana. Otto von Bismarck utilizó diplomacia, reformas limitadas y guerras para desplazar a Austria y reunir a muchos Estados alemanes bajo liderazgo prusiano.",
          "En 1871 se proclamó el Imperio alemán en Versalles. La unidad llegó con un parlamento, pero también con fuerte poder monárquico, militarismo prusiano y tensiones entre democracia, nacionalismo y autoridad."
        ],
        highlights: [
          "Prusia derrotó a Dinamarca, Austria y Francia en el camino hacia la unidad.",
          "Bismarck convirtió la cuestión nacional en un proyecto conservador.",
          "El Imperio alemán fue proclamado el 18 de enero de 1871."
        ]
      },
      'german-empire': {
        body: [
          "El Imperio alemán se industrializó con enorme rapidez. Ferrocarriles, carbón, acero, química, universidades y grandes ciudades cambiaron la sociedad y convirtieron al país en una potencia europea.",
          "Pero el sistema político seguía marcado por el emperador, el ejército y las élites conservadoras. El crecimiento económico convivía con conflictos sociales, antisemitismo, nacionalismo agresivo y una política exterior cada vez más arriesgada."
        ],
        highlights: [
          "Alemania se convirtió en una de las economías industriales más fuertes del mundo.",
          "El movimiento obrero y los partidos de masas cambiaron la política.",
          "La rivalidad imperial y militar contribuyó al clima que llevó a la Primera Guerra Mundial."
        ]
      },
      weimar: {
        body: [
          "La República de Weimar fue la primera democracia parlamentaria alemana. Nació tras la derrota en la Primera Guerra Mundial, en un ambiente de revolución, violencia política, crisis económica y desconfianza hacia las nuevas instituciones.",
          "A pesar de sus logros culturales y sociales, Weimar fue debilitada por la inflación, el desempleo, los extremismos y las élites que nunca aceptaron plenamente la democracia. Su historia muestra que una constitución por sí sola no protege una república."
        ],
        highlights: [
          "Weimar introdujo sufragio amplio, parlamento y derechos sociales.",
          "La cultura de los años veinte fue innovadora en cine, arte, arquitectura y prensa.",
          "La crisis económica mundial aceleró el colapso de la democracia."
        ]
      },
      'nazi-ww2': {
        body: [
          "Esta época debe mostrarse sin romantización. El régimen nazi construyó su dictadura mediante terror, propaganda, destrucción del Estado de derecho y exclusión de grupos enteros de la sociedad.",
          "La guerra y el Holocausto fueron consecuencia de una ideología de racismo, expansión y violencia. Para la Alemania actual, la memoria de esta catástrofe es base de responsabilidad política, educación y relación con la democracia."
        ],
        highlights: [
          "1933 marcó el comienzo de la dictadura y la persecución.",
          "La guerra destruyó Europa y costó la vida a millones de personas.",
          "El Holocausto sigue siendo el centro moral de la memoria del nazismo."
        ]
      },
      'divided-germany': {
        body: [
          "La división de Alemania no fue solo geopolítica: se convirtió en experiencia cotidiana. Las personas vivían con pasaportes, medios, escuelas, ejércitos, economías y visiones de futuro diferentes.",
          "La República Federal se integró cada vez más en Occidente y en Europa. La RDA desarrolló una identidad socialista propia, pero dependía del control, las fronteras y el aparato de seguridad. El Muro de Berlín se convirtió en la imagen más fuerte de ese orden."
        ],
        highlights: [
          "La República Federal construyó una democracia parlamentaria y una economía social de mercado.",
          "La RDA fue un Estado socialista bajo influencia soviética.",
          "El Muro de Berlín dividió familias, una ciudad y Europa."
        ]
      },
      reunification: {
        body: [
          "La reunificación no fue un regalo repentino, sino resultado de presión ciudadana, crisis de la RDA, perestroika soviética y diplomacia rápida. Las personas de Leipzig, Berlín y otras ciudades hicieron imposible el viejo orden.",
          "Después de 1990 comenzó una integración difícil: privatizaciones, desempleo, transferencia de instituciones, debates sobre memoria y desigualdades. Por eso la unidad es a la vez una fiesta y un largo proceso social."
        ],
        highlights: [
          "Las manifestaciones de Leipzig mostraron la fuerza del movimiento cívico.",
          "El Muro de Berlín cayó el 9 de noviembre de 1989.",
          "La reunificación puso fin a la división alemana de posguerra."
        ]
      },
      'berlin-republic': {
        body: [
          "La República de Berlín describe la Alemania posterior al regreso de la capital a Berlín y a la adopción de un nuevo papel en Europa. Ya no vive solo de la cuestión de la unidad, aunque las diferencias entre Este y Oeste vuelven una y otra vez.",
          "La era Merkel dio una imagen de estabilidad, pero dejó temas controvertidos: dependencia energética, migración, infraestructuras, defensa y digitalización. Desde 2022, Alemania vuelve a revisar su papel en la seguridad europea."
        ],
        highlights: [
          "Berlín volvió a ser capital y centro político.",
          "La integración europea se convirtió en marco central de la política alemana.",
          "La Alemania actual debate memoria, migración, energía, seguridad y papel global."
        ]
      }
    },
    it: {
      'tribes-rome': {
        body: [
          "Per la storia antica della Germania è importante non immaginare i Germani come una nazione già pronta. Erano popoli, alleanze e gruppi diversi che vivevano tra Reno, Elba, Danubio e Baltico.",
          "Roma commerciava con loro, reclutava guerrieri, costruiva fortificazioni e allo stesso tempo temeva una frontiera instabile. Strade, monete, armi, oggetti di lusso e servizio militare romano cambiarono poco a poco la vita delle élite locali."
        ],
        highlights: [
          "Reno e Danubio furono linee principali di contatto con Roma.",
          "La battaglia della foresta di Teutoburgo fermò l'espansione romana verso est.",
          "Il ricordo di Arminio divenne molto più tardi parte del mito nazionale tedesco."
        ]
      },
      'franks-carolingians': {
        body: [
          "Il regno franco unì vaste regioni dell'Europa occidentale e centrale. Sotto Carlo Magno nacque uno spazio politico in cui cristianesimo, corte, esercito e scrittura amministrativa rafforzarono il potere regio.",
          "Dopo la divisione dell'impero carolingio, le terre orientali divennero gradualmente il nucleo del futuro mondo tedesco. Non era ancora uno Stato nazionale, ma una rete di duchi, vescovi, monasteri e signori locali."
        ],
        highlights: [
          "Carlo Magno unì conquista militare, riforma religiosa e amministrazione.",
          "I monasteri conservarono testi, insegnarono e organizzarono territori.",
          "La Francia orientale preparò il quadro politico del futuro regno tedesco."
        ]
      },
      'holy-roman-empire': {
        body: [
          "Il Sacro Romano Impero non fu uno Stato centralizzato come le monarchie moderne. Era una struttura politica flessibile in cui imperatori, principi, vescovi, città libere e cavalieri condividevano e contendevano l'autorità.",
          "La sua forza stava nella diversità regionale, ma proprio questa diversità limitava il potere centrale. Per secoli la politica tedesca si sviluppò come negoziazione tra dinastie, leggi imperiali, Chiesa e territori."
        ],
        highlights: [
          "L'incoronazione imperiale collegava la politica tedesca a Roma e alla tradizione cristiana.",
          "I principi territoriali ottennero sempre maggiore autonomia.",
          "L'impero sopravvisse quasi mille anni, pur cambiando profondamente nel tempo."
        ]
      },
      'medieval-cities': {
        body: [
          "Nel Medioevo le città tedesche divennero centri di commercio, artigianato, diritto urbano e cultura. Mercati, mura, corporazioni e consigli cittadini diedero a molte città una forte identità propria.",
          "La Lega anseatica collegò i porti del Mare del Nord e del Baltico con rotte commerciali internazionali. Allo stesso tempo, la carta politica rimase frammentata tra principati, vescovati e città libere."
        ],
        highlights: [
          "Le città libere difendevano privilegi e autonomia contro i signori territoriali.",
          "La Hansa fece di Lubecca, Amburgo e Brema importanti nodi commerciali.",
          "La frammentazione politica permise una grande varietà regionale."
        ]
      },
      reformation: {
        body: [
          "La Riforma iniziò come disputa teologica, ma trasformò politica, istruzione, stampa e vita quotidiana. La Germania divenne uno dei principali spazi della divisione confessionale europea.",
          "Gli scritti di Lutero si diffusero rapidamente grazie alla stampa. Per molti principi, la Riforma fu anche un modo per rafforzare la propria autonomia rispetto all'imperatore e a Roma."
        ],
        highlights: [
          "La stampa accelerò la diffusione di idee religiose e politiche.",
          "La traduzione biblica di Lutero influenzò la lingua tedesca scritta.",
          "La divisione tra cattolici e protestanti segnò la storia tedesca per secoli."
        ]
      },
      'thirty-years-war': {
        body: [
          "La Guerra dei Trent'anni iniziò come conflitto religioso nell'impero, ma divenne una guerra europea per potere, territori ed equilibrio politico. Molte regioni tedesche subirono distruzione, fame e spopolamento.",
          "La Pace di Vestfalia non creò una Germania unita, ma confermò l'importanza dei territori e della diplomazia. Da allora la politica imperiale dipese ancora di più dai compromessi tra molti poteri."
        ],
        highlights: [
          "Il conflitto mescolò religione, ambizione dinastica e interessi di potenze straniere.",
          "Città e campagne furono devastate in molte zone dell'impero.",
          "Vestfalia rafforzò l'autonomia dei territori imperiali."
        ]
      },
      'prussia-enlightenment': {
        body: [
          "La Prussia crebbe come potenza militare e amministrativa. La disciplina statale, l'esercito e le riforme fecero del regno uno degli attori principali del mondo tedesco.",
          "Allo stesso tempo, l'Illuminismo tedesco aprì dibattiti su ragione, istruzione, diritto e libertà. Kant, Lessing e altri pensatori diedero a quest'epoca una dimensione intellettuale oltre la politica dinastica."
        ],
        highlights: [
          "La Prussia divenne rivale dell'Austria nello spazio tedesco.",
          "Federico II unì assolutismo, riforme e cultura illuminista.",
          "L'Illuminismo tedesco influenzò istruzione, filosofia e diritto."
        ]
      },
      'napoleonic-era': {
        body: [
          "Le guerre napoleoniche distrussero il vecchio ordine imperiale. Nel 1806 scomparve il Sacro Romano Impero, e molti territori tedeschi furono riorganizzati sotto influenza francese.",
          "L'occupazione e le riforme produssero sia modernizzazione sia resistenza. Nacquero nuove idee su cittadinanza, amministrazione, esercito e nazione, decisive nel XIX secolo."
        ],
        highlights: [
          "Il Sacro Romano Impero terminò nel 1806.",
          "La Confederazione del Reno riorganizzò molti territori tedeschi.",
          "Le guerre contro Napoleone rafforzarono il sentimento nazionale tedesco."
        ]
      },
      'revolutions-1848': {
        body: [
          "Le rivoluzioni del 1848 chiesero costituzioni, diritti civili, libertà di stampa e unità nazionale. A Francoforte si riunì un'assemblea che cercò di creare una Germania costituzionale.",
          "Il progetto fallì per la resistenza dei monarchi, le divisioni interne e la questione di Austria e Prussia. Tuttavia i colori nero, rosso e oro rimasero legati all'idea democratica tedesca."
        ],
        highlights: [
          "L'Assemblea nazionale di Francoforte fu un tentativo di creare una Germania parlamentare.",
          "I rivoluzionari difesero diritti civili e unità nazionale.",
          "Il fallimento del 1848 non cancellò i suoi simboli né le sue idee democratiche."
        ]
      },
      unification: {
        body: [
          "L'unificazione tedesca non nacque da una rivoluzione liberale, ma dalla politica di potenza prussiana. Otto von Bismarck usò diplomazia, riforme limitate e guerre per escludere l'Austria e riunire molti Stati tedeschi sotto guida prussiana.",
          "Nel 1871 l'Impero tedesco fu proclamato a Versailles. L'unità arrivò con un parlamento, ma anche con forte potere monarchico, militarismo prussiano e tensioni tra democrazia, nazionalismo e autorità."
        ],
        highlights: [
          "Prussia sconfisse Danimarca, Austria e Francia nel percorso verso l'unità.",
          "Bismarck trasformò la questione nazionale in un progetto conservatore.",
          "L'Impero tedesco fu proclamato il 18 gennaio 1871."
        ]
      },
      'german-empire': {
        body: [
          "L'Impero tedesco si industrializzò con enorme rapidità. Ferrovie, carbone, acciaio, chimica, università e grandi città cambiarono la società e resero il paese una potenza europea.",
          "Ma il sistema politico rimase segnato dall'imperatore, dall'esercito e dalle élite conservatrici. La crescita economica conviveva con conflitti sociali, antisemitismo, nazionalismo aggressivo e politica estera sempre più rischiosa."
        ],
        highlights: [
          "La Germania divenne una delle economie industriali più forti del mondo.",
          "Il movimento operaio e i partiti di massa cambiarono la politica.",
          "La rivalità imperiale e militare contribuì al clima che portò alla Prima guerra mondiale."
        ]
      },
      weimar: {
        body: [
          "La Repubblica di Weimar fu la prima democrazia parlamentare tedesca. Nacque dopo la sconfitta nella Prima guerra mondiale, in un clima di rivoluzione, violenza politica, crisi economica e sfiducia verso le nuove istituzioni.",
          "Nonostante i suoi risultati culturali e sociali, Weimar fu indebolita da inflazione, disoccupazione, estremismi ed élite che non accettarono mai pienamente la democrazia. La sua storia mostra che una costituzione da sola non protegge una repubblica."
        ],
        highlights: [
          "Weimar introdusse ampio suffragio, parlamento e diritti sociali.",
          "La cultura degli anni Venti fu innovativa in cinema, arte, architettura e stampa.",
          "La crisi economica mondiale accelerò il crollo della democrazia."
        ]
      },
      'nazi-ww2': {
        body: [
          "Quest'epoca deve essere mostrata senza romanticizzazioni. Il regime nazista costruì la propria dittatura con terrore, propaganda, distruzione dello Stato di diritto ed esclusione di interi gruppi dalla società.",
          "La guerra e la Shoah furono conseguenza di un'ideologia di razzismo, espansione e violenza. Per la Germania contemporanea, la memoria di questa catastrofe è base di responsabilità politica, educazione e rapporto con la democrazia."
        ],
        highlights: [
          "Il 1933 segnò l'inizio della dittatura e delle persecuzioni.",
          "La guerra distrusse l'Europa e costò la vita a milioni di persone.",
          "La Shoah resta il centro morale della memoria del nazismo."
        ]
      },
      'divided-germany': {
        body: [
          "La divisione della Germania non fu solo geopolitica: divenne esperienza quotidiana. Le persone vivevano con passaporti, media, scuole, eserciti, economie e visioni del futuro differenti.",
          "La Repubblica Federale si integrò sempre più nelle alleanze occidentali e in Europa. La DDR sviluppò una propria identità socialista, ma dipendeva da controllo, frontiere e apparato di sicurezza. Il Muro di Berlino divenne l'immagine più forte di quell'ordine."
        ],
        highlights: [
          "La Repubblica Federale costruì una democrazia parlamentare e un'economia sociale di mercato.",
          "La DDR fu uno Stato socialista sotto influenza sovietica.",
          "Il Muro di Berlino divise famiglie, una città e l'Europa."
        ]
      },
      reunification: {
        body: [
          "La riunificazione non fu un dono improvviso, ma il risultato della pressione dal basso, della crisi della DDR, della perestrojka sovietica e di una diplomazia rapida. Gli abitanti di Lipsia, Berlino e altre città resero impossibile il vecchio ordine.",
          "Dopo il 1990 iniziò un'integrazione difficile: privatizzazioni, disoccupazione, trasferimento di istituzioni, dibattiti sulla memoria e disuguaglianze. L'unità è quindi insieme una festa e un lungo processo sociale."
        ],
        highlights: [
          "Le manifestazioni di Lipsia mostrarono la forza del movimento civico.",
          "Il Muro di Berlino cadde il 9 novembre 1989.",
          "La riunificazione pose fine alla divisione tedesca del dopoguerra."
        ]
      },
      'berlin-republic': {
        body: [
          "La Repubblica di Berlino indica la Germania dopo il ritorno della capitale a Berlino e l'assunzione di un nuovo ruolo in Europa. Non vive più solo della questione dell'unità, anche se le differenze tra Est e Ovest riaffiorano regolarmente.",
          "L'era Merkel diede un'immagine di stabilità, ma lasciò temi controversi: dipendenza energetica, migrazione, infrastrutture, difesa e digitalizzazione. Dal 2022 la Germania rivaluta nuovamente il proprio ruolo nella sicurezza europea."
        ],
        highlights: [
          "Berlino tornò capitale e centro politico.",
          "L'integrazione europea divenne un quadro centrale della politica tedesca.",
          "La Germania contemporanea discute memoria, migrazione, energia, sicurezza e ruolo globale."
        ]
      }
    },
    pl: {
      'tribes-rome': {
        body: [
          "We wczesnej historii Niemiec Germanie nie byli jeszcze jednym narodem. Były to różne plemiona i związki plemienne żyjące między Renem, Łabą, Dunajem i Bałtykiem.",
          "Rzym handlował z nimi, werbował wojowników, budował umocnienia i obawiał się niestabilnej granicy. Drogi, monety, broń i służba w armii rzymskiej stopniowo zmieniały lokalne elity."
        ],
        highlights: [
          "Ren i Dunaj były głównymi liniami kontaktu z Rzymem.",
          "Bitwa w Lesie Teutoburskim zatrzymała rzymską ekspansję na wschód.",
          "Arminiusz stał się później częścią niemieckiego mitu narodowego."
        ]
      },
      'franks-carolingians': {
        body: [
          "Państwo Franków połączyło dziedzictwo Rzymu ze średniowieczną Europą. Za Karola Wielkiego chrześcijaństwo, dwór, armia i administracja wzmacniały władzę królewską.",
          "Po podziałach imperium karolińskiego ziemie wschodnie stopniowo stały się rdzeniem przyszłego świata niemieckiego, choć nie były jeszcze państwem narodowym."
        ],
        highlights: [
          "Karol Wielki łączył podboje, reformę religijną i administrację.",
          "Klasztory przechowywały teksty, prowadziły nauczanie i organizowały terytoria.",
          "Frankonia Wschodnia przygotowała polityczne ramy przyszłego królestwa niemieckiego."
        ]
      },
      'holy-roman-empire': {
        body: [
          "Święte Cesarstwo Rzymskie nie było nowoczesnym państwem scentralizowanym. Cesarze, książęta, biskupi, wolne miasta i rycerze dzielili władzę i rywalizowali o nią.",
          "Regionalna różnorodność ograniczała centrum, ale tworzyła bogaty krajobraz polityczny: terytoria, prawa imperialne, Kościół, miasta i dynastie."
        ],
        highlights: [
          "Koronacja cesarska łączyła politykę niemiecką z Rzymem.",
          "Książęta terytorialni uzyskiwali coraz większą samodzielność.",
          "Cesarstwo trwało niemal tysiąc lat, głęboko się zmieniając."
        ]
      },
      'medieval-cities': {
        body: [
          "Średniowieczne miasta niemieckie stały się centrami handlu, rzemiosła, prawa miejskiego i kultury. Rynki, mury, cechy i rady miejskie nadawały im własną tożsamość.",
          "Hanza łączyła porty Morza Północnego i Bałtyku z handlem międzynarodowym, podczas gdy mapa polityczna pozostawała rozdrobniona."
        ],
        highlights: [
          "Wolne miasta broniły przywilejów i autonomii.",
          "Lubeka, Hamburg i Brema były ważnymi ośrodkami Hanzy.",
          "Rozdrobnienie polityczne sprzyjało różnorodności regionalnej."
        ]
      },
      reformation: {
        body: [
          "Reformacja zaczęła się jako spór teologiczny, ale zmieniła politykę, edukację, druk i codzienne życie. Ziemie niemieckie stały się centrum europejskiego podziału wyznaniowego.",
          "Pisma Lutra szybko rozchodziły się dzięki drukowi. Dla wielu książąt reformacja była także sposobem wzmocnienia niezależności od cesarza i Rzymu."
        ],
        highlights: [
          "Druk przyspieszył rozpowszechnianie idei religijnych i politycznych.",
          "Przekład Biblii Lutra wpłynął na niemiecki język pisany.",
          "Podział katolicko-protestancki naznaczył historię Niemiec na stulecia."
        ]
      },
      'thirty-years-war': {
        body: [
          "Wojna trzydziestoletnia zaczęła się jako konflikt religijny w cesarstwie, lecz stała się europejską wojną o władzę, terytoria i równowagę polityczną.",
          "Wiele regionów niemieckich doświadczyło zniszczeń, głodu i wyludnienia. Pokój westfalski wzmocnił autonomię terytoriów i znaczenie dyplomacji."
        ],
        highlights: [
          "Religia, ambicje dynastii i interesy obcych mocarstw splotły się ze sobą.",
          "Miasta i wsie w wielu regionach zostały spustoszone.",
          "Westfalia potwierdziła siłę terytoriów cesarskich."
        ]
      },
      'prussia-enlightenment': {
        body: [
          "Prusy rosły jako potęga wojskowa i administracyjna. Armia, urzędnicy, podatki i szkoła służyły wzmocnieniu państwa.",
          "Jednocześnie niemieckie oświecenie rozwijało debaty o rozumie, edukacji, prawie i wolności. Kant, Lessing i inni nadali epoce wielkie znaczenie intelektualne."
        ],
        highlights: [
          "Prusy stały się rywalem Austrii w świecie niemieckim.",
          "Fryderyk II łączył absolutyzm, reformy i kulturę oświecenia.",
          "Oświecenie wpłynęło na filozofię, edukację i prawo."
        ]
      },
      'napoleonic-era': {
        body: [
          "Wojny napoleońskie zniszczyły dawny porządek imperialny. W 1806 roku zniknęło Święte Cesarstwo Rzymskie, a wiele ziem niemieckich przebudowano pod wpływem Francji.",
          "Okupacja i reformy przyniosły modernizację oraz opór. Nowej siły nabrały idee obywatelstwa, administracji, armii i narodu."
        ],
        highlights: [
          "Święte Cesarstwo Rzymskie zakończyło istnienie w 1806 roku.",
          "Związek Reński zreorganizował wiele terytoriów niemieckich.",
          "Wojny przeciw Napoleonowi wzmocniły niemieckie poczucie narodowe."
        ]
      },
      'revolutions-1848': {
        body: [
          "Rewolucje 1848 roku domagały się konstytucji, praw obywatelskich, wolności prasy i jedności narodowej. We Frankfurcie zebrał się parlament, który próbował stworzyć konstytucyjne Niemcy.",
          "Projekt upadł przez opór monarchów, podziały wewnętrzne i spór o Austrię i Prusy. Kolory czarny, czerwony i złoty pozostały jednak symbolem demokracji."
        ],
        highlights: [
          "Zgromadzenie frankfurckie próbowało stworzyć Niemcy parlamentarne.",
          "Rewolucjoniści bronili praw obywatelskich i jedności.",
          "Klęska 1848 roku nie zatarła demokratycznych symboli."
        ]
      },
      unification: {
        body: [
          "Zjednoczenie Niemiec wynikało z pruskiej polityki siły, a nie z liberalnej rewolucji. Bismarck użył dyplomacji, ograniczonych reform i wojen.",
          "W 1871 roku w Wersalu ogłoszono Cesarstwo Niemieckie. Jedność przyszła z parlamentem, ale też z silną monarchią i pruskim militaryzmem."
        ],
        highlights: [
          "Prusy pokonały Danię, Austrię i Francję.",
          "Bismarck przekształcił kwestię narodową w projekt konserwatywny.",
          "Cesarstwo Niemieckie ogłoszono 18 stycznia 1871 roku."
        ]
      },
      'german-empire': {
        body: [
          "Cesarstwo Niemieckie bardzo szybko się uprzemysłowiło. Koleje, węgiel, stal, chemia, uniwersytety i wielkie miasta zmieniły społeczeństwo.",
          "Jednak cesarz, armia i konserwatywne elity zachowały ogromną władzę. Modernizacja społeczna wyprzedzała demokratyzację państwa."
        ],
        highlights: [
          "Niemcy stały się wielką potęgą przemysłową.",
          "Ruch robotniczy i partie masowe zmieniły politykę.",
          "Rywalizacja imperialna i militarna przyczyniła się do I wojny światowej."
        ]
      },
      weimar: {
        body: [
          "Republika Weimarska była pierwszą niemiecką demokracją parlamentarną. Powstała po klęsce wojennej, wśród rewolucji, przemocy politycznej i kryzysu gospodarczego.",
          "Mimo osiągnięć kulturalnych i społecznych osłabiały ją inflacja, bezrobocie, ekstremizmy i elity, które nigdy w pełni nie zaakceptowały demokracji."
        ],
        highlights: [
          "Weimar przyniósł szerokie prawo wyborcze, parlament i prawa socjalne.",
          "Kultura lat dwudziestych była nowatorska w filmie, sztuce, architekturze i prasie.",
          "Światowy kryzys gospodarczy przyspieszył upadek demokracji."
        ]
      },
      'nazi-ww2': {
        body: [
          "Ten okres trzeba pokazywać bez romantyzowania. Reżim nazistowski zbudował dyktaturę przez terror, propagandę, zniszczenie państwa prawa i wykluczenie całych grup ludzi.",
          "Wojna i Zagłada wynikały z ideologii rasizmu, ekspansji i przemocy. Dla współczesnych Niemiec pamięć o tej katastrofie jest podstawą odpowiedzialności politycznej i edukacji demokratycznej."
        ],
        highlights: [
          "Rok 1933 oznaczał początek dyktatury i prześladowań.",
          "Wojna zniszczyła Europę i kosztowała życie milionów ludzi.",
          "Zagłada pozostaje moralnym centrum pamięci o nazizmie."
        ]
      },
      'divided-germany': {
        body: [
          "Podział Niemiec był nie tylko geopolityką, lecz także codziennym doświadczeniem. Ludzie żyli z różnymi paszportami, mediami, szkołami, armiami i gospodarkami.",
          "RFN integrowała się z Zachodem i Europą. NRD stworzyła socjalistyczną tożsamość, ale opierała się na kontroli, granicach i aparacie bezpieczeństwa."
        ],
        highlights: [
          "RFN zbudowała demokrację parlamentarną i społeczną gospodarkę rynkową.",
          "NRD była państwem socjalistycznym pod wpływem ZSRR.",
          "Mur berliński podzielił rodziny, miasto i Europę."
        ]
      },
      reunification: {
        body: [
          "Zjednoczenie nie było nagłym darem, lecz skutkiem presji obywateli, kryzysu NRD, radzieckiej pierestrojki i szybkiej dyplomacji.",
          "Po 1990 roku zaczęła się trudna integracja: prywatyzacja, bezrobocie, przenoszenie instytucji oraz spory o pamięć i nierówności."
        ],
        highlights: [
          "Demonstracje w Lipsku pokazały siłę ruchu obywatelskiego.",
          "Mur berliński upadł 9 listopada 1989 roku.",
          "Zjednoczenie zakończyło powojenny podział Niemiec."
        ]
      },
      'berlin-republic': {
        body: [
          "Republika Berlińska oznacza Niemcy po powrocie stolicy do Berlina i przyjęciu nowej roli w Europie.",
          "Era Merkel dawała obraz stabilności, ale zostawiła spory o energię, migrację, infrastrukturę, obronność i cyfryzację. Od 2022 roku Niemcy ponownie oceniają swoją rolę w bezpieczeństwie Europy."
        ],
        highlights: [
          "Berlin ponownie stał się stolicą i centrum politycznym.",
          "Integracja europejska stała się główną ramą niemieckiej polityki.",
          "Współczesne Niemcy debatują o pamięci, migracji, energii, bezpieczeństwie i roli globalnej."
        ]
      }
    },
    tr: {
      'tribes-rome': {
        body: [
          "Almanya'nın erken tarihinde Germenler henüz tek bir ulus değildi. Ren, Elbe, Tuna ve Baltık arasında yaşayan farklı kabileler ve ittifaklardan oluşuyorlardı.",
          "Roma onlarla ticaret yaptı, savaşçı topladı, sınır tahkimatları kurdu ve istikrarsız sınırdan çekindi. Yollar, paralar, silahlar ve Roma ordusundaki hizmet yerel seçkinleri yavaşça değiştirdi."
        ],
        highlights: [
          "Ren ve Tuna, Roma ile temasın ana hatlarıydı.",
          "Teutoburg Ormanı Savaşı Roma'nın doğuya ilerleyişini durdurdu.",
          "Arminius daha sonra Alman ulusal mitinin parçası oldu."
        ]
      },
      'franks-carolingians': {
        body: [
          "Frank Krallığı Roma mirası ile Orta Çağ Avrupa'sı arasında köprü kurdu. Şarlman döneminde Hristiyanlık, saray, ordu ve yazılı yönetim kraliyet gücünü pekiştirdi.",
          "Karolenj İmparatorluğu bölündükten sonra doğu toprakları yavaş yavaş gelecekteki Alman dünyasının çekirdeğine dönüştü."
        ],
        highlights: [
          "Şarlman fetih, dini reform ve yönetimi birleştirdi.",
          "Manastırlar metinleri, eğitimi ve bölgesel düzeni korudu.",
          "Doğu Frank Krallığı gelecekteki Alman krallığının siyasal çerçevesini hazırladı."
        ]
      },
      'holy-roman-empire': {
        body: [
          "Kutsal Roma İmparatorluğu modern anlamda merkezi bir devlet değildi. İmparatorlar, prensler, piskoposlar, özgür şehirler ve şövalyeler otoriteyi paylaşıyor ve tartışıyordu.",
          "Bu bölgesel çeşitlilik merkezi gücü sınırladı, ama zengin bir siyasal dünya yarattı: topraklar, imparatorluk hukuku, Kilise, şehirler ve hanedanlar."
        ],
        highlights: [
          "İmparatorluk tacı Alman siyasetini Roma geleneğine bağladı.",
          "Bölgesel prensler giderek daha fazla özerklik kazandı.",
          "İmparatorluk neredeyse bin yıl sürdü ve derinden değişti."
        ]
      },
      'medieval-cities': {
        body: [
          "Orta Çağ Alman şehirleri ticaret, zanaat, şehir hukuku ve kültür merkezleri oldu. Pazarlar, surlar, loncalar ve şehir meclisleri güçlü bir kent kimliği yarattı.",
          "Hansa Birliği Kuzey Denizi ve Baltık limanlarını uluslararası ticaret yollarına bağladı; siyasal harita ise prenslikler ve özgür şehirlerle parçalı kaldı."
        ],
        highlights: [
          "Özgür şehirler ayrıcalıklarını ve özerkliklerini savundu.",
          "Lübeck, Hamburg ve Bremen önemli Hansa merkezleriydi.",
          "Siyasal parçalanma bölgesel çeşitliliği artırdı."
        ]
      },
      reformation: {
        body: [
          "Reform teolojik bir tartışma olarak başladı, fakat siyaseti, eğitimi, matbaayı ve günlük yaşamı değiştirdi. Alman toprakları Avrupa'daki mezhep ayrılığının merkezlerinden biri oldu.",
          "Luther'in yazıları matbaa sayesinde hızla yayıldı. Birçok prens için Reform, imparatora ve Roma'ya karşı özerkliği güçlendiren bir araçtı."
        ],
        highlights: [
          "Matbaa dini ve siyasi fikirlerin yayılmasını hızlandırdı.",
          "Luther'in İncil çevirisi yazılı Almancayı etkiledi.",
          "Katolik-Protestan ayrılığı Alman tarihini yüzyıllarca belirledi."
        ]
      },
      'thirty-years-war': {
        body: [
          "Otuz Yıl Savaşı imparatorluk içinde dini çatışma olarak başladı, fakat güç, toprak ve siyasal denge için Avrupa savaşına dönüştü.",
          "Birçok Alman bölgesi yıkım, açlık ve nüfus kaybı yaşadı. Westphalia Barışı toprakların özerkliğini ve diplomasinin önemini güçlendirdi."
        ],
        highlights: [
          "Din, hanedan çıkarları ve yabancı güçlerin hedefleri iç içe geçti.",
          "Birçok şehir ve köy yıkıma uğradı.",
          "Westphalia imparatorluk topraklarının gücünü doğruladı."
        ]
      },
      'prussia-enlightenment': {
        body: [
          "Prusya askeri ve idari bir güç olarak büyüdü. Ordu, bürokrasi, vergiler ve okul sistemi devleti güçlendirdi.",
          "Aynı dönemde Alman Aydınlanması akıl, eğitim, hukuk ve özgürlük üzerine tartışmalar açtı. Kant, Lessing ve başkaları döneme güçlü bir entelektüel anlam verdi."
        ],
        highlights: [
          "Prusya Alman dünyasında Avusturya'nın rakibi oldu.",
          "II. Friedrich mutlakiyetçiliği, reformları ve aydınlanmacı kültürü birleştirdi.",
          "Aydınlanma felsefeyi, eğitimi ve hukuku etkiledi."
        ]
      },
      'napoleonic-era': {
        body: [
          "Napolyon Savaşları eski imparatorluk düzenini yıktı. 1806'da Kutsal Roma İmparatorluğu sona erdi ve birçok Alman toprağı Fransız etkisiyle yeniden düzenlendi.",
          "İşgal ve reformlar hem modernleşme hem de direniş getirdi. Yurttaşlık, yönetim, ordu ve ulus fikirleri yeni bir güç kazandı."
        ],
        highlights: [
          "Kutsal Roma İmparatorluğu 1806'da sona erdi.",
          "Ren Konfederasyonu birçok Alman toprağını yeniden düzenledi.",
          "Napolyon'a karşı savaşlar Alman ulusal duygusunu güçlendirdi."
        ]
      },
      'revolutions-1848': {
        body: [
          "1848 devrimleri anayasa, yurttaş hakları, basın özgürlüğü ve ulusal birlik istedi. Frankfurt'ta anayasal bir Almanya kurmaya çalışan bir meclis toplandı.",
          "Proje monarkların direnci, iç bölünmeler ve Avusturya-Prusya sorunu yüzünden başarısız oldu. Siyah, kırmızı ve altın renkleri demokratik fikirle bağlantılı kaldı."
        ],
        highlights: [
          "Frankfurt Ulusal Meclisi parlamenter Almanya kurmaya çalıştı.",
          "Devrimciler yurttaş haklarını ve birliği savundu.",
          "1848 yenilgisi demokratik sembolleri yok etmedi."
        ]
      },
      unification: {
        body: [
          "Alman birliği liberal bir devrimden değil, Prusya güç siyasetinden doğdu. Bismarck diplomasi, sınırlı reformlar ve savaşları kullandı.",
          "1871'de Alman İmparatorluğu Versailles'da ilan edildi. Birlik parlamento ile geldi, ancak güçlü monarşi ve Prusya militarizmi de korundu."
        ],
        highlights: [
          "Prusya Danimarka, Avusturya ve Fransa'yı yendi.",
          "Bismarck ulusal sorunu muhafazakar bir projeye dönüştürdü.",
          "Alman İmparatorluğu 18 Ocak 1871'de ilan edildi."
        ]
      },
      'german-empire': {
        body: [
          "Alman İmparatorluğu çok hızlı sanayileşti. Demiryolları, kömür, çelik, kimya, üniversiteler ve büyük şehirler toplumu değiştirdi.",
          "Fakat imparator, ordu ve muhafazakar seçkinler büyük gücü korudu. Toplumsal modernleşme devletin demokratikleşmesinden daha hızlı ilerledi."
        ],
        highlights: [
          "Almanya büyük bir sanayi gücüne dönüştü.",
          "İşçi hareketi ve kitle partileri siyaseti değiştirdi.",
          "İmparatorluk ve askerî rekabet Birinci Dünya Savaşı'na giden ortamı besledi."
        ]
      },
      weimar: {
        body: [
          "Weimar Cumhuriyeti Almanya'nın ilk parlamenter demokrasisiydi. Birinci Dünya Savaşı yenilgisi, devrim, siyasal şiddet ve ekonomik kriz ortamında doğdu.",
          "Kültürel ve toplumsal başarılarına rağmen enflasyon, işsizlik, aşırılıklar ve demokrasiyi tam kabul etmeyen elitler tarafından zayıflatıldı."
        ],
        highlights: [
          "Weimar geniş oy hakkı, parlamento ve sosyal haklar getirdi.",
          "1920'ler sinema, sanat, mimari ve basında yenilikçiydi.",
          "Dünya ekonomik krizi demokrasinin çöküşünü hızlandırdı."
        ]
      },
      'nazi-ww2': {
        body: [
          "Bu dönem romantikleştirilmeden gösterilmelidir. Nazi rejimi terör, propaganda, hukuk devletinin yıkımı ve toplumdaki bütün grupların dışlanmasıyla diktatörlük kurdu.",
          "Savaş ve Holokost ırkçılık, yayılma ve şiddet ideolojisinin sonucuydu. Bugünkü Almanya için bu felaketin hafızası siyasi sorumluluk ve demokratik eğitimin temelidir."
        ],
        highlights: [
          "1933 diktatörlüğün ve zulmün başlangıcı oldu.",
          "Savaş Avrupa'yı yıktı ve milyonlarca insanın hayatına mal oldu.",
          "Holokost, Nazizm hafızasının ahlaki merkezinde kalır."
        ]
      },
      'divided-germany': {
        body: [
          "Almanya'nın bölünmesi yalnızca jeopolitik değildi; günlük yaşamın da parçasıydı. İnsanlar farklı pasaportlar, medya, okullar, ordular ve ekonomilerle yaşadı.",
          "Batı Almanya Batı ve Avrupa ile bütünleşti. DDR sosyalist bir kimlik geliştirdi, ancak kontrol, sınırlar ve güvenlik aygıtına dayanıyordu."
        ],
        highlights: [
          "Federal Almanya parlamenter demokrasi ve sosyal piyasa ekonomisi kurdu.",
          "DDR Sovyet etkisi altında sosyalist bir devletti.",
          "Berlin Duvarı aileleri, bir şehri ve Avrupa'yı böldü."
        ]
      },
      reunification: {
        body: [
          "Yeniden birleşme ani bir hediye değil, yurttaş baskısı, DDR krizi, Sovyet perestroykası ve hızlı diplomasinin sonucuydu.",
          "1990'dan sonra özelleştirme, işsizlik, kurumların aktarılması, hafıza ve eşitsizlik tartışmalarıyla zor bir bütünleşme başladı."
        ],
        highlights: [
          "Leipzig gösterileri sivil hareketin gücünü gösterdi.",
          "Berlin Duvarı 9 Kasım 1989'da yıkıldı.",
          "Yeniden birleşme savaş sonrası Alman bölünmesini sona erdirdi."
        ]
      },
      'berlin-republic': {
        body: [
          "Berlin Cumhuriyeti, başkentin Berlin'e dönüşünden ve Almanya'nın Avrupa'da yeni bir rol üstlenmesinden sonraki dönemi anlatır.",
          "Merkel dönemi istikrar görüntüsü verdi, ancak enerji, göç, altyapı, savunma ve dijitalleşme tartışmalarını bıraktı. 2022'den beri Almanya Avrupa güvenliğindeki rolünü yeniden değerlendiriyor."
        ],
        highlights: [
          "Berlin yeniden başkent ve siyasal merkez oldu.",
          "Avrupa entegrasyonu Alman siyasetinin ana çerçevesi haline geldi.",
          "Bugünkü Almanya hafıza, göç, enerji, güvenlik ve küresel rolünü tartışıyor."
        ]
      }
    }
  };

  const periods = window.HISTORY_ATLAS_PERIODS || [];
  periods.forEach(function(period) {
    const patch = extra[period.id];
    if (!patch) return;
    period.body = patch.body;
    period.media = (period.media || []).concat(patch.media || []);
  });

  const additionalFullTextTranslations = {
    es: extra.es,
    it: extra.it,
    pl: extra.pl,
    tr: extra.tr,
    zh: {
      'tribes-rome': {
        body: [
          "在德国早期历史中，日耳曼人还不是一个统一民族。他们是生活在莱茵河、易北河、多瑙河和波罗的海之间的不同部落与联盟。",
          "罗马人与他们贸易、招募战士、修建边防，同时也担心不稳定的边境。道路、钱币、武器和罗马军役逐渐改变了当地精英。"
        ],
        highlights: [
          "莱茵河和多瑙河是与罗马接触的重要边线。",
          "条顿堡森林战役阻止了罗马继续向东扩张。",
          "阿米尼乌斯后来成为德国民族神话的一部分。"
        ]
      },
      'franks-carolingians': {
        body: [
          "法兰克王国把罗马遗产与中世纪欧洲连接起来。查理大帝时期，基督教、宫廷、军队和书面行政加强了王权。",
          "加洛林帝国分裂后，东部地区逐渐成为未来德意志世界的核心，但那时还不是民族国家。"
        ],
        highlights: [
          "查理大帝结合了征服、宗教改革和行政建设。",
          "修道院保存文本、教育和地方组织。",
          "东法兰克为后来的德意志王国奠定政治框架。"
        ]
      },
      'holy-roman-empire': {
        body: [
          "神圣罗马帝国不是现代意义上的中央集权国家。皇帝、诸侯、主教、自由城市和骑士共同分享并争夺权力。",
          "这种地区多样性削弱了中央权力，却形成了丰富的政治地图：领地、帝国法律、教会、城市和王朝并存。"
        ],
        highlights: [
          "皇帝加冕把德意志政治与罗马传统连接起来。",
          "地方诸侯获得越来越大的自治权。",
          "帝国存在近千年，并在时间中不断变化。"
        ]
      },
      'medieval-cities': {
        body: [
          "中世纪德意志城市成为贸易、手工业、城市法和文化中心。市场、城墙、行会和市政会塑造了强烈的城市身份。",
          "汉萨同盟把北海和波罗的海港口连接到国际贸易网络，而政治地图仍由诸侯国、主教区和自由城市组成。"
        ],
        highlights: [
          "自由城市维护自己的特权和自治。",
          "吕贝克、汉堡和不来梅是重要的汉萨城市。",
          "政治分裂带来了显著的地区差异。"
        ]
      },
      reformation: {
        body: [
          "宗教改革起初是神学争论，却改变了政治、教育、印刷和日常生活。德意志地区成为欧洲教派分裂的重要中心。",
          "路德的著作借助印刷术迅速传播。对许多诸侯来说，宗教改革也意味着加强相对于皇帝和罗马的独立性。"
        ],
        highlights: [
          "印刷术加快了宗教和政治思想传播。",
          "路德的《圣经》翻译影响了书面德语。",
          "天主教与新教的分裂影响德国数百年。"
        ]
      },
      'thirty-years-war': {
        body: [
          "三十年战争起初是帝国内部的宗教冲突，后来变成欧洲范围内关于权力、领土和政治平衡的战争。",
          "许多德意志地区遭受毁灭、饥荒和人口减少。威斯特伐利亚和约加强了各领地的自治和外交的重要性。"
        ],
        highlights: [
          "宗教、王朝野心和外国势力利益交织在一起。",
          "许多城市和乡村被战争摧毁。",
          "威斯特伐利亚确认了帝国领地的力量。"
        ]
      },
      'prussia-enlightenment': {
        body: [
          "普鲁士作为军事和行政强国崛起。军队、官僚、税收和学校都服务于国家力量的加强。",
          "同时，德国启蒙运动展开了关于理性、教育、法律和自由的讨论。康德、莱辛等人使这个时代具有深厚的思想意义。"
        ],
        highlights: [
          "普鲁士成为德意志世界中奥地利的竞争者。",
          "腓特烈二世结合了专制、改革和启蒙文化。",
          "启蒙运动影响了哲学、教育和法律。"
        ]
      },
      'napoleonic-era': {
        body: [
          "拿破仑战争摧毁了旧帝国秩序。1806年神圣罗马帝国终结，许多德意志地区在法国影响下重组。",
          "占领和改革既带来现代化，也激发抵抗。公民、行政、军队和民族的观念获得新的力量。"
        ],
        highlights: [
          "神圣罗马帝国于1806年结束。",
          "莱茵邦联重组了许多德意志领地。",
          "反拿破仑战争加强了德意志民族意识。"
        ]
      },
      'revolutions-1848': {
        body: [
          "1848年革命要求宪法、公民权、新闻自由和民族统一。法兰克福议会试图建立一个立宪的德国。",
          "由于君主抵抗、内部分歧以及奥地利和普鲁士问题，这个计划失败了。但黑红金三色仍与德国民主理想相连。"
        ],
        highlights: [
          "法兰克福国民议会试图建立议会制德国。",
          "革命者捍卫公民权和民族统一。",
          "1848年的失败没有抹去其民主象征。"
        ]
      },
      unification: {
        body: [
          "德国统一不是自由革命的结果，而是普鲁士权力政治的结果。俾斯麦利用外交、有限改革和战争推动统一。",
          "1871年德意志帝国在凡尔赛宣布成立。统一带来了议会，也保留了强大的君主制和普鲁士军国主义。"
        ],
        highlights: [
          "普鲁士先后击败丹麦、奥地利和法国。",
          "俾斯麦把民族问题变成保守主义项目。",
          "德意志帝国于1871年1月18日宣布成立。"
        ]
      },
      'german-empire': {
        body: [
          "德意志帝国迅速工业化。铁路、煤炭、钢铁、化学、大学和大城市改变了社会。",
          "但皇帝、军队和保守精英仍拥有巨大权力。社会现代化快于国家民主化。"
        ],
        highlights: [
          "德国成为重要工业强国。",
          "工人运动和群众政党改变了政治。",
          "帝国和军事竞争推动了通向第一次世界大战的局势。"
        ]
      },
      weimar: {
        body: [
          "魏玛共和国是德国第一个议会民主制度。它诞生于一战失败、革命、政治暴力和经济危机之中。",
          "尽管有文化和社会成就，魏玛仍被通货膨胀、失业、极端主义以及不完全接受民主的精英削弱。"
        ],
        highlights: [
          "魏玛带来了广泛选举权、议会和社会权利。",
          "20世纪20年代在电影、艺术、建筑和媒体上充满创新。",
          "世界经济危机加速了民主的崩溃。"
        ]
      },
      'nazi-ww2': {
        body: [
          "这一时期必须避免浪漫化。纳粹政权通过恐怖、宣传、摧毁法治和排斥整个社会群体建立独裁。",
          "战争和大屠杀源于种族主义、扩张和暴力意识形态。对现代德国来说，对这场灾难的记忆是政治责任和民主教育的基础。"
        ],
        highlights: [
          "1933年标志着独裁和迫害的开始。",
          "战争摧毁欧洲并夺走数百万生命。",
          "大屠杀仍是纳粹记忆的道德核心。"
        ]
      },
      'divided-germany': {
        body: [
          "德国分裂不仅是地缘政治，也是日常生活。人们生活在不同护照、媒体、学校、军队和经济制度之中。",
          "西德融入西方和欧洲。东德形成社会主义身份，但依赖控制、边界和安全机构。"
        ],
        highlights: [
          "联邦德国建立了议会民主和社会市场经济。",
          "民主德国是受苏联影响的社会主义国家。",
          "柏林墙分割了家庭、一座城市和欧洲。"
        ]
      },
      reunification: {
        body: [
          "统一不是突然的礼物，而是公民压力、东德危机、苏联改革和快速外交共同作用的结果。",
          "1990年后开始了艰难整合：私有化、失业、机构转移以及关于记忆和不平等的争论。"
        ],
        highlights: [
          "莱比锡示威显示了公民运动的力量。",
          "柏林墙于1989年11月9日倒塌。",
          "统一结束了战后德国分裂。"
        ]
      },
      'berlin-republic': {
        body: [
          "柏林共和国指首都回到柏林、德国在欧洲承担新角色之后的时代。",
          "默克尔时代呈现稳定形象，但留下能源、移民、基础设施、国防和数字化争议。自2022年以来，德国重新评估其在欧洲安全中的角色。"
        ],
        highlights: [
          "柏林重新成为首都和政治中心。",
          "欧洲一体化成为德国政治的核心框架。",
          "当代德国讨论记忆、移民、能源、安全和全球角色。"
        ]
      }
    },
    ja: {
      'tribes-rome': { body: ["ドイツ初期史のゲルマン人は、まだ一つの国民ではありませんでした。ライン川、エルベ川、ドナウ川、バルト海の間に暮らす多様な部族と同盟でした。", "ローマは彼らと交易し、兵士を雇い、国境防衛を築きながら、不安定な辺境を警戒しました。道路、貨幣、武器、ローマ軍務は地域の有力者を少しずつ変えました。"], highlights: ["ライン川とドナウ川はローマとの主要な接触線でした。", "トイトブルク森の戦いはローマの東進を止めました。", "アルミニウスは後にドイツ国民神話の一部となりました。"] },
      'franks-carolingians': { body: ["フランク王国はローマの遺産と中世ヨーロッパを結びました。カール大帝の時代、キリスト教、宮廷、軍隊、文書行政が王権を強めました。", "カロリング帝国の分割後、東部地域は徐々に将来のドイツ世界の中核となりましたが、まだ国民国家ではありませんでした。"], highlights: ["カール大帝は征服、宗教改革、行政を結びつけました。", "修道院は文書、教育、地域組織を支えました。", "東フランク王国は後のドイツ王国の政治的枠組みを準備しました。"] },
      'holy-roman-empire': { body: ["神聖ローマ帝国は近代的な中央集権国家ではありませんでした。皇帝、諸侯、司教、自由都市、騎士が権威を分け合い、競い合いました。", "地域の多様性は中央権力を制限しましたが、領邦、帝国法、教会、都市、王朝からなる豊かな政治世界を生みました。"], highlights: ["皇帝戴冠はドイツ政治をローマの伝統と結びました。", "領邦君主は次第に大きな自治を得ました。", "帝国はほぼ千年続き、大きく変化しました。"] },
      'medieval-cities': { body: ["中世のドイツ都市は商業、手工業、都市法、文化の中心になりました。市場、城壁、ギルド、市参事会が都市の独自性を作りました。", "ハンザ同盟は北海とバルト海の港を国際交易に結びましたが、政治地図は諸侯領、司教領、自由都市に分かれたままでした。"], highlights: ["自由都市は特権と自治を守りました。", "リューベック、ハンブルク、ブレーメンは重要なハンザ都市でした。", "政治的分裂は地域の多様性を生みました。"] },
      reformation: { body: ["宗教改革は神学論争として始まりましたが、政治、教育、印刷、日常生活を変えました。ドイツ諸地域はヨーロッパの宗派分裂の中心となりました。", "ルターの著作は印刷によって急速に広がりました。多くの諸侯にとって、宗教改革は皇帝とローマからの自立を強める手段でもありました。"], highlights: ["印刷は宗教的・政治的思想の普及を速めました。", "ルターの聖書翻訳は書き言葉のドイツ語に影響しました。", "カトリックとプロテスタントの分裂は数世紀にわたり歴史を形作りました。"] },
      'thirty-years-war': { body: ["三十年戦争は帝国内の宗教対立として始まり、やがて権力、領土、政治的均衡をめぐるヨーロッパ戦争になりました。", "多くのドイツ地域が破壊、飢饉、人口減少を経験しました。ヴェストファーレン条約は領邦の自治と外交の重要性を強めました。"], highlights: ["宗教、王朝の野心、外国勢力の利害が絡み合いました。", "多くの都市と農村が荒廃しました。", "ヴェストファーレンは帝国領邦の力を確認しました。"] },
      'prussia-enlightenment': { body: ["プロイセンは軍事・行政国家として成長しました。軍隊、官僚、税制、学校が国家強化に役立ちました。", "同時にドイツ啓蒙主義は理性、教育、法、自由についての議論を広げました。カントやレッシングはこの時代に深い知的意味を与えました。"], highlights: ["プロイセンはドイツ世界でオーストリアの競争相手になりました。", "フリードリヒ2世は絶対主義、改革、啓蒙文化を結びました。", "啓蒙主義は哲学、教育、法に影響しました。"] },
      'napoleonic-era': { body: ["ナポレオン戦争は古い帝国秩序を破壊しました。1806年に神聖ローマ帝国は終わり、多くのドイツ領邦がフランスの影響下で再編されました。", "占領と改革は近代化と抵抗の両方を生みました。市民権、行政、軍隊、国民についての考えが新しい力を得ました。"], highlights: ["神聖ローマ帝国は1806年に終わりました。", "ライン同盟は多くのドイツ領邦を再編しました。", "対ナポレオン戦争はドイツの国民意識を強めました。"] },
      'revolutions-1848': { body: ["1848年革命は憲法、市民権、出版の自由、国民統一を求めました。フランクフルトでは立憲的なドイツを作ろうとする議会が開かれました。", "計画は君主の抵抗、内部対立、オーストリアとプロイセンの問題で失敗しました。しかし黒・赤・金の色は民主主義の象徴として残りました。"], highlights: ["フランクフルト国民議会は議会制ドイツを目指しました。", "革命家は市民権と統一を守ろうとしました。", "1848年の失敗は民主的象徴を消しませんでした。"] },
      unification: { body: ["ドイツ統一は自由主義革命ではなく、プロイセンの権力政治から生まれました。ビスマルクは外交、限定的改革、戦争を利用しました。", "1871年、ドイツ帝国はヴェルサイユで宣言されました。統一は議会を伴いましたが、強い君主制とプロイセン軍国主義も残しました。"], highlights: ["プロイセンはデンマーク、オーストリア、フランスを破りました。", "ビスマルクは国民問題を保守的計画に変えました。", "ドイツ帝国は1871年1月18日に宣言されました。"] },
      'german-empire': { body: ["ドイツ帝国は急速に工業化しました。鉄道、石炭、鉄鋼、化学、大学、大都市が社会を変えました。", "しかし皇帝、軍隊、保守的エリートは大きな権力を保ちました。社会の近代化は国家の民主化より速く進みました。"], highlights: ["ドイツは大きな工業国になりました。", "労働運動と大衆政党が政治を変えました。", "帝国主義と軍事競争は第一次世界大戦への空気を強めました。"] },
      weimar: { body: ["ワイマール共和国はドイツ初の議会制民主主義でした。第一次世界大戦の敗北、革命、政治暴力、経済危機の中で生まれました。", "文化的・社会的成果にもかかわらず、インフレ、失業、過激主義、民主主義を十分受け入れないエリートによって弱められました。"], highlights: ["ワイマールは広い選挙権、議会、社会権をもたらしました。", "1920年代文化は映画、芸術、建築、報道で革新的でした。", "世界恐慌は民主主義の崩壊を早めました。"] },
      'nazi-ww2': { body: ["この時代は美化せずに示す必要があります。ナチ体制は恐怖、宣伝、法治国家の破壊、社会集団の排除によって独裁を築きました。", "戦争とホロコーストは人種主義、拡張、暴力の思想から生まれました。現代ドイツにとって、この記憶は政治的責任と民主教育の基礎です。"], highlights: ["1933年は独裁と迫害の始まりでした。", "戦争はヨーロッパを破壊し、数百万人の命を奪いました。", "ホロコーストはナチズム記憶の道徳的中心です。"] },
      'divided-germany': { body: ["ドイツ分断は地政学だけでなく日常生活でもありました。人々は異なる旅券、メディア、学校、軍隊、経済の中で暮らしました。", "西ドイツは西側とヨーロッパに統合されました。東ドイツは社会主義的アイデンティティを作りましたが、統制、国境、治安機構に依存しました。"], highlights: ["西ドイツは議会民主主義と社会的市場経済を築きました。", "東ドイツはソ連の影響下にある社会主義国家でした。", "ベルリンの壁は家族、都市、ヨーロッパを分断しました。"] },
      reunification: { body: ["再統一は突然の贈り物ではなく、市民の圧力、東ドイツ危機、ソ連のペレストロイカ、迅速な外交の結果でした。", "1990年以後、民営化、失業、制度移転、記憶と不平等をめぐる議論を伴う難しい統合が始まりました。"], highlights: ["ライプツィヒのデモは市民運動の力を示しました。", "ベルリンの壁は1989年11月9日に崩壊しました。", "再統一は戦後ドイツの分断を終わらせました。"] },
      'berlin-republic': { body: ["ベルリン共和国とは、首都がベルリンに戻り、ドイツがヨーロッパで新しい役割を担った後の時代を指します。", "メルケル時代は安定の印象を与えましたが、エネルギー、移民、インフラ、防衛、デジタル化をめぐる課題を残しました。2022年以後、ドイツは欧州安全保障での役割を再評価しています。"], highlights: ["ベルリンは再び首都で政治中心となりました。", "欧州統合はドイツ政治の中心的枠組みになりました。", "現代ドイツは記憶、移民、エネルギー、安全保障、世界での役割を議論しています。"] }
    },
    ko: {
      'tribes-rome': { body: ["독일 초기 역사에서 게르만인은 아직 하나의 민족이 아니었습니다. 그들은 라인강, 엘베강, 도나우강, 발트해 사이에 살던 여러 부족과 동맹이었습니다.", "로마는 그들과 교역하고 전사를 모집하며 국경 방어선을 세웠지만 불안정한 변경도 두려워했습니다. 도로, 화폐, 무기, 로마 군복무는 지역 엘리트를 서서히 바꾸었습니다."], highlights: ["라인강과 도나우강은 로마와 접촉한 주요 경계였습니다.", "토이토부르크 숲 전투는 로마의 동진을 막았습니다.", "아르미니우스는 훗날 독일 민족 신화의 일부가 되었습니다."] },
      'franks-carolingians': { body: ["프랑크 왕국은 로마의 유산과 중세 유럽을 연결했습니다. 샤를마뉴 시대에는 기독교, 궁정, 군대, 문서 행정이 왕권을 강화했습니다.", "카롤루스 제국이 분할된 뒤 동부 지역은 점차 훗날 독일 세계의 핵심이 되었지만, 아직 민족국가는 아니었습니다."], highlights: ["샤를마뉴는 정복, 종교 개혁, 행정을 결합했습니다.", "수도원은 문헌, 교육, 지역 조직을 보존했습니다.", "동프랑크는 훗날 독일 왕국의 정치적 틀을 준비했습니다."] },
      'holy-roman-empire': { body: ["신성 로마 제국은 현대적 중앙집권 국가가 아니었습니다. 황제, 제후, 주교, 자유도시, 기사들이 권위를 나누고 다투었습니다.", "지역적 다양성은 중앙 권력을 제한했지만 영토, 제국법, 교회, 도시, 왕조가 공존하는 풍부한 정치 세계를 만들었습니다."], highlights: ["황제 대관은 독일 정치를 로마 전통과 연결했습니다.", "영방 제후들은 점점 더 큰 자치를 얻었습니다.", "제국은 거의 천 년 동안 지속되며 크게 변화했습니다."] },
      'medieval-cities': { body: ["중세 독일 도시는 상업, 수공업, 도시법, 문화의 중심지가 되었습니다. 시장, 성벽, 길드, 시의회가 도시의 정체성을 만들었습니다.", "한자동맹은 북해와 발트해 항구를 국제 무역망에 연결했지만 정치 지도는 제후국, 주교령, 자유도시로 나뉘어 있었습니다."], highlights: ["자유도시는 특권과 자치를 지켰습니다.", "뤼베크, 함부르크, 브레멘은 중요한 한자 도시였습니다.", "정치적 분열은 지역적 다양성을 낳았습니다."] },
      reformation: { body: ["종교개혁은 신학 논쟁으로 시작했지만 정치, 교육, 인쇄, 일상생활을 바꾸었습니다. 독일 지역은 유럽 교파 분열의 중심지가 되었습니다.", "루터의 글은 인쇄술 덕분에 빠르게 퍼졌습니다. 많은 제후에게 종교개혁은 황제와 로마로부터의 자율성을 강화하는 수단이기도 했습니다."], highlights: ["인쇄술은 종교와 정치 사상의 확산을 가속했습니다.", "루터의 성경 번역은 문어 독일어에 영향을 주었습니다.", "가톨릭과 개신교의 분열은 수세기 동안 독일사를 규정했습니다."] },
      'thirty-years-war': { body: ["30년 전쟁은 제국 내부의 종교 갈등으로 시작했지만 권력, 영토, 정치적 균형을 둘러싼 유럽 전쟁으로 확대되었습니다.", "많은 독일 지역이 파괴, 기근, 인구 감소를 겪었습니다. 베스트팔렌 조약은 영토의 자치와 외교의 중요성을 강화했습니다."], highlights: ["종교, 왕조의 야심, 외국 세력의 이해가 뒤섞였습니다.", "많은 도시와 농촌이 황폐해졌습니다.", "베스트팔렌은 제국 영토들의 힘을 확인했습니다."] },
      'prussia-enlightenment': { body: ["프로이센은 군사와 행정의 강국으로 성장했습니다. 군대, 관료제, 세금, 학교가 국가 강화에 쓰였습니다.", "동시에 독일 계몽주의는 이성, 교육, 법, 자유에 대한 논의를 열었습니다. 칸트와 레싱 등은 이 시대에 깊은 지적 의미를 주었습니다."], highlights: ["프로이센은 독일 세계에서 오스트리아의 경쟁자가 되었습니다.", "프리드리히 2세는 절대주의, 개혁, 계몽 문화를 결합했습니다.", "계몽주의는 철학, 교육, 법에 영향을 주었습니다."] },
      'napoleonic-era': { body: ["나폴레옹 전쟁은 옛 제국 질서를 무너뜨렸습니다. 1806년 신성 로마 제국이 끝났고 많은 독일 영토가 프랑스 영향 아래 재편되었습니다.", "점령과 개혁은 근대화와 저항을 함께 낳았습니다. 시민권, 행정, 군대, 민족에 대한 생각이 새 힘을 얻었습니다."], highlights: ["신성 로마 제국은 1806년에 끝났습니다.", "라인 동맹은 많은 독일 영토를 재편했습니다.", "나폴레옹에 맞선 전쟁은 독일 민족 의식을 강화했습니다."] },
      'revolutions-1848': { body: ["1848년 혁명은 헌법, 시민권, 언론 자유, 민족 통일을 요구했습니다. 프랑크푸르트에서는 입헌 독일을 만들려는 의회가 열렸습니다.", "이 계획은 군주의 저항, 내부 분열, 오스트리아와 프로이센 문제 때문에 실패했습니다. 그러나 검정, 빨강, 금색은 민주주의 상징으로 남았습니다."], highlights: ["프랑크푸르트 국민의회는 의회제 독일을 만들려 했습니다.", "혁명가들은 시민권과 통일을 옹호했습니다.", "1848년의 실패는 민주적 상징을 지우지 못했습니다."] },
      unification: { body: ["독일 통일은 자유주의 혁명이 아니라 프로이센 권력정치에서 나왔습니다. 비스마르크는 외교, 제한적 개혁, 전쟁을 활용했습니다.", "1871년 독일 제국은 베르사유에서 선포되었습니다. 통일은 의회를 동반했지만 강한 군주제와 프로이센 군국주의도 남겼습니다."], highlights: ["프로이센은 덴마크, 오스트리아, 프랑스를 이겼습니다.", "비스마르크는 민족 문제를 보수적 프로젝트로 바꾸었습니다.", "독일 제국은 1871년 1월 18일 선포되었습니다."] },
      'german-empire': { body: ["독일 제국은 매우 빠르게 산업화되었습니다. 철도, 석탄, 철강, 화학, 대학, 대도시가 사회를 변화시켰습니다.", "그러나 황제, 군대, 보수 엘리트는 큰 권력을 유지했습니다. 사회의 근대화는 국가의 민주화보다 빨랐습니다."], highlights: ["독일은 주요 산업 강국이 되었습니다.", "노동운동과 대중정당이 정치를 바꾸었습니다.", "제국주의와 군사 경쟁은 제1차 세계대전으로 가는 분위기를 키웠습니다."] },
      weimar: { body: ["바이마르 공화국은 독일 최초의 의회민주주의였습니다. 제1차 세계대전 패배, 혁명, 정치 폭력, 경제 위기 속에서 태어났습니다.", "문화적·사회적 성과에도 불구하고 인플레이션, 실업, 극단주의, 민주주의를 완전히 받아들이지 않은 엘리트 때문에 약해졌습니다."], highlights: ["바이마르는 넓은 선거권, 의회, 사회권을 도입했습니다.", "1920년대 문화는 영화, 예술, 건축, 언론에서 혁신적이었습니다.", "세계 경제 위기는 민주주의 붕괴를 앞당겼습니다."] },
      'nazi-ww2': { body: ["이 시기는 미화 없이 보여야 합니다. 나치 정권은 공포, 선전, 법치 파괴, 사회 집단의 배제로 독재를 세웠습니다.", "전쟁과 홀로코스트는 인종주의, 팽창, 폭력 이데올로기의 결과였습니다. 현대 독일에서 이 기억은 정치적 책임과 민주 교육의 기초입니다."], highlights: ["1933년은 독재와 박해의 시작이었습니다.", "전쟁은 유럽을 파괴하고 수백만 명의 생명을 앗아갔습니다.", "홀로코스트는 나치즘 기억의 도덕적 중심입니다."] },
      'divided-germany': { body: ["독일 분단은 지정학만이 아니라 일상의 경험이었습니다. 사람들은 다른 여권, 미디어, 학교, 군대, 경제 속에서 살았습니다.", "서독은 서방과 유럽에 통합되었습니다. 동독은 사회주의 정체성을 만들었지만 통제, 국경, 보안 기구에 의존했습니다."], highlights: ["서독은 의회민주주의와 사회적 시장경제를 구축했습니다.", "동독은 소련 영향 아래의 사회주의 국가였습니다.", "베를린 장벽은 가족, 도시, 유럽을 갈라놓았습니다."] },
      reunification: { body: ["재통일은 갑작스러운 선물이 아니라 시민 압력, 동독 위기, 소련의 페레스트로이카, 빠른 외교의 결과였습니다.", "1990년 이후 민영화, 실업, 제도 이전, 기억과 불평등 논쟁을 동반한 어려운 통합이 시작되었습니다."], highlights: ["라이프치히 시위는 시민운동의 힘을 보여주었습니다.", "베를린 장벽은 1989년 11월 9일 무너졌습니다.", "재통일은 전후 독일 분단을 끝냈습니다."] },
      'berlin-republic': { body: ["베를린 공화국은 수도가 베를린으로 돌아오고 독일이 유럽에서 새로운 역할을 맡은 이후의 시대를 뜻합니다.", "메르켈 시대는 안정의 이미지를 주었지만 에너지, 이주, 인프라, 국방, 디지털화 논쟁을 남겼습니다. 2022년 이후 독일은 유럽 안보에서 자신의 역할을 다시 평가하고 있습니다."], highlights: ["베를린은 다시 수도이자 정치 중심지가 되었습니다.", "유럽 통합은 독일 정치의 핵심 틀이 되었습니다.", "현대 독일은 기억, 이주, 에너지, 안보, 세계적 역할을 논의합니다."] }
    },
    hi: {
      'tribes-rome': { body: ["जर्मनी के प्रारंभिक इतिहास में जर्मनिक लोग अभी एक राष्ट्र नहीं थे। वे राइन, एल्बे, डेन्यूब और बाल्टिक सागर के बीच रहने वाले अलग-अलग कबीले और संघ थे।", "रोम उनसे व्यापार करता था, योद्धा भर्ती करता था, सीमा किले बनाता था और अस्थिर सीमा से डरता भी था। सड़कें, सिक्के, हथियार और रोमन सेना की सेवा ने स्थानीय अभिजात वर्ग को धीरे-धीरे बदला।"], highlights: ["राइन और डेन्यूब रोम से संपर्क की मुख्य रेखाएँ थीं।", "ट्यूटोबर्ग वन की लड़ाई ने रोम की पूर्वी बढ़त रोक दी।", "आर्मिनियस बाद में जर्मन राष्ट्रीय मिथक का हिस्सा बना।"] },
      'franks-carolingians': { body: ["फ्रैंक राज्य ने रोमन विरासत को मध्यकालीन यूरोप से जोड़ा। शार्लमेन के समय ईसाई धर्म, दरबार, सेना और लिखित प्रशासन ने राजसत्ता को मजबूत किया।", "कैरोलिंजियन साम्राज्य के विभाजन के बाद पूर्वी क्षेत्र धीरे-धीरे भविष्य के जर्मन संसार का केंद्र बने, हालांकि वे अभी राष्ट्र-राज्य नहीं थे।"], highlights: ["शार्लमेन ने विजय, धार्मिक सुधार और प्रशासन को जोड़ा।", "मठों ने ग्रंथों, शिक्षा और क्षेत्रीय संगठन को सुरक्षित रखा।", "पूर्वी फ्रैंसिया ने भविष्य के जर्मन राज्य की राजनीतिक रूपरेखा बनाई।"] },
      'holy-roman-empire': { body: ["पवित्र रोमन साम्राज्य आधुनिक केंद्रीकृत राज्य नहीं था। सम्राट, राजकुमार, बिशप, स्वतंत्र नगर और योद्धा वर्ग सत्ता को साझा भी करते थे और उसके लिए संघर्ष भी।", "क्षेत्रीय विविधता ने केंद्र को सीमित किया, लेकिन इसी से प्रदेशों, साम्राज्यिक कानूनों, चर्च, नगरों और वंशों की जटिल राजनीतिक दुनिया बनी।"], highlights: ["सम्राट का राज्याभिषेक जर्मन राजनीति को रोम की परंपरा से जोड़ता था।", "क्षेत्रीय राजकुमारों को लगातार अधिक स्वायत्तता मिली।", "साम्राज्य लगभग हजार साल तक रहा और बहुत बदलता रहा।"] },
      'medieval-cities': { body: ["मध्यकालीन जर्मन नगर व्यापार, शिल्प, नगर कानून और संस्कृति के केंद्र बने। बाजार, दीवारें, गिल्ड और नगर परिषदों ने नगरों की अलग पहचान बनाई।", "हांसा संघ ने उत्तरी सागर और बाल्टिक बंदरगाहों को अंतरराष्ट्रीय व्यापार से जोड़ा, जबकि राजनीतिक नक्शा राजकुमारियों, बिशप क्षेत्रों और स्वतंत्र नगरों में बँटा रहा।"], highlights: ["स्वतंत्र नगरों ने विशेषाधिकार और स्वायत्तता की रक्षा की।", "ल्यूबेक, हैम्बर्ग और ब्रेमेन प्रमुख हांसा नगर थे।", "राजनीतिक विखंडन ने क्षेत्रीय विविधता पैदा की।"] },
      reformation: { body: ["सुधार आंदोलन धार्मिक बहस से शुरू हुआ, लेकिन उसने राजनीति, शिक्षा, मुद्रण और रोजमर्रा के जीवन को बदल दिया। जर्मन क्षेत्र यूरोप के संप्रदायिक विभाजन का केंद्र बने।", "लूथर की रचनाएँ मुद्रण के कारण तेजी से फैलीं। कई राजकुमारों के लिए सुधार आंदोलन सम्राट और रोम से स्वतंत्रता बढ़ाने का साधन भी था।"], highlights: ["मुद्रण ने धार्मिक और राजनीतिक विचारों के प्रसार को तेज किया।", "लूथर के बाइबिल अनुवाद ने लिखित जर्मन भाषा को प्रभावित किया।", "कैथोलिक और प्रोटेस्टेंट विभाजन ने सदियों तक जर्मन इतिहास को आकार दिया।"] },
      'thirty-years-war': { body: ["तीस वर्षीय युद्ध साम्राज्य के भीतर धार्मिक संघर्ष के रूप में शुरू हुआ, लेकिन शक्ति, क्षेत्रों और राजनीतिक संतुलन के लिए यूरोपीय युद्ध बन गया।", "कई जर्मन क्षेत्रों ने विनाश, भूख और जनसंख्या घटने का अनुभव किया। वेस्टफेलिया की शांति ने क्षेत्रों की स्वायत्तता और कूटनीति के महत्व को मजबूत किया।"], highlights: ["धर्म, वंशीय महत्वाकांक्षा और विदेशी शक्तियों के हित मिल गए।", "कई शहर और गाँव तबाह हुए।", "वेस्टफेलिया ने साम्राज्यिक क्षेत्रों की शक्ति को मान्यता दी।"] },
      'prussia-enlightenment': { body: ["प्रशिया सैन्य और प्रशासनिक शक्ति के रूप में बढ़ा। सेना, नौकरशाही, कर और विद्यालय राज्य को मजबूत करने के साधन बने।", "इसी समय जर्मन प्रबोधन ने तर्क, शिक्षा, कानून और स्वतंत्रता पर बहस शुरू की। कांट, लेसिंग और अन्य विचारकों ने इस युग को गहरी बौद्धिक पहचान दी।"], highlights: ["प्रशिया जर्मन संसार में ऑस्ट्रिया का प्रतिद्वंद्वी बना।", "फ्रेडरिक द्वितीय ने निरंकुशता, सुधार और प्रबोधन संस्कृति को जोड़ा।", "प्रबोधन ने दर्शन, शिक्षा और कानून को प्रभावित किया।"] },
      'napoleonic-era': { body: ["नेपोलियन युद्धों ने पुराने साम्राज्यिक क्रम को तोड़ दिया। 1806 में पवित्र रोमन साम्राज्य समाप्त हुआ और कई जर्मन प्रदेश फ्रांसीसी प्रभाव में पुनर्गठित हुए।", "कब्जे और सुधारों ने आधुनिकता और प्रतिरोध दोनों पैदा किए। नागरिकता, प्रशासन, सेना और राष्ट्र के विचारों को नई शक्ति मिली।"], highlights: ["पवित्र रोमन साम्राज्य 1806 में समाप्त हुआ।", "राइन संघ ने कई जर्मन क्षेत्रों को पुनर्गठित किया।", "नेपोलियन के विरुद्ध युद्धों ने जर्मन राष्ट्रीय भावना को मजबूत किया।"] },
      'revolutions-1848': { body: ["1848 की क्रांतियों ने संविधान, नागरिक अधिकार, प्रेस की स्वतंत्रता और राष्ट्रीय एकता की माँग की। फ्रैंकफर्ट में संवैधानिक जर्मनी बनाने वाली सभा जुटी।", "यह परियोजना राजाओं के विरोध, आंतरिक विभाजन और ऑस्ट्रिया-प्रशिया प्रश्न के कारण विफल हुई। फिर भी काला, लाल और सुनहरा रंग लोकतांत्रिक प्रतीक बने रहे।"], highlights: ["फ्रैंकफर्ट राष्ट्रीय सभा ने संसदीय जर्मनी बनाने की कोशिश की।", "क्रांतिकारियों ने नागरिक अधिकार और एकता का समर्थन किया।", "1848 की विफलता ने लोकतांत्रिक प्रतीकों को मिटाया नहीं।"] },
      unification: { body: ["जर्मन एकीकरण उदार क्रांति से नहीं, बल्कि प्रशियाई शक्ति-राजनीति से पैदा हुआ। बिस्मार्क ने कूटनीति, सीमित सुधार और युद्धों का उपयोग किया।", "1871 में जर्मन साम्राज्य वर्साय में घोषित हुआ। एकता संसद के साथ आई, लेकिन मजबूत राजतंत्र और प्रशियाई सैन्यवाद भी बने रहे।"], highlights: ["प्रशिया ने डेनमार्क, ऑस्ट्रिया और फ्रांस को हराया।", "बिस्मार्क ने राष्ट्रीय प्रश्न को रूढ़िवादी परियोजना में बदल दिया।", "जर्मन साम्राज्य 18 जनवरी 1871 को घोषित हुआ।"] },
      'german-empire': { body: ["जर्मन साम्राज्य बहुत तेजी से औद्योगिक बना। रेल, कोयला, इस्पात, रसायन, विश्वविद्यालय और बड़े शहरों ने समाज को बदल दिया।", "लेकिन सम्राट, सेना और रूढ़िवादी अभिजात वर्ग ने बहुत शक्ति बनाए रखी। समाज का आधुनिकीकरण राज्य के लोकतंत्रीकरण से आगे निकल गया।"], highlights: ["जर्मनी बड़ी औद्योगिक शक्ति बना।", "मजदूर आंदोलन और जन-दल राजनीति को बदलने लगे।", "साम्राज्यवादी और सैन्य प्रतिस्पर्धा ने प्रथम विश्व युद्ध की दिशा बनाई।"] },
      weimar: { body: ["वाइमर गणराज्य जर्मनी का पहला संसदीय लोकतंत्र था। यह प्रथम विश्व युद्ध की हार, क्रांति, राजनीतिक हिंसा और आर्थिक संकट के बीच पैदा हुआ।", "सांस्कृतिक और सामाजिक उपलब्धियों के बावजूद उसे मुद्रास्फीति, बेरोजगारी, अतिवाद और लोकतंत्र को पूरी तरह न स्वीकारने वाले अभिजात वर्ग ने कमजोर किया।"], highlights: ["वाइमर ने व्यापक मताधिकार, संसद और सामाजिक अधिकार दिए।", "1920 के दशक की संस्कृति फिल्म, कला, वास्तुकला और प्रेस में नवाचारी थी।", "विश्व आर्थिक संकट ने लोकतंत्र के पतन को तेज किया।"] },
      'nazi-ww2': { body: ["इस युग को बिना रोमांटिक बनाए दिखाना चाहिए। नाजी शासन ने आतंक, प्रचार, कानून के शासन के विनाश और पूरे सामाजिक समूहों को बाहर कर तानाशाही बनाई।", "युद्ध और होलोकॉस्ट नस्लवाद, विस्तार और हिंसा की विचारधारा के परिणाम थे। आधुनिक जर्मनी के लिए इस आपदा की स्मृति राजनीतिक जिम्मेदारी और लोकतांत्रिक शिक्षा का आधार है।"], highlights: ["1933 तानाशाही और उत्पीड़न की शुरुआत था।", "युद्ध ने यूरोप को नष्ट किया और लाखों जीवन लिए।", "होलोकॉस्ट नाजी स्मृति का नैतिक केंद्र बना हुआ है।"] },
      'divided-germany': { body: ["जर्मनी का विभाजन केवल भू-राजनीति नहीं था, बल्कि रोजमर्रा का अनुभव था। लोग अलग पासपोर्ट, मीडिया, स्कूल, सेनाओं और अर्थव्यवस्थाओं में रहते थे।", "पश्चिमी जर्मनी पश्चिम और यूरोप में जुड़ा। पूर्वी जर्मनी ने समाजवादी पहचान बनाई, पर नियंत्रण, सीमाओं और सुरक्षा तंत्र पर निर्भर रहा।"], highlights: ["संघीय जर्मनी ने संसदीय लोकतंत्र और सामाजिक बाजार अर्थव्यवस्था बनाई।", "जीडीआर सोवियत प्रभाव वाला समाजवादी राज्य था।", "बर्लिन दीवार ने परिवारों, शहर और यूरोप को बाँट दिया।"] },
      reunification: { body: ["पुनर्एकीकरण अचानक मिला उपहार नहीं था, बल्कि नागरिक दबाव, जीडीआर संकट, सोवियत पेरेस्त्रोइका और तेज कूटनीति का परिणाम था।", "1990 के बाद निजीकरण, बेरोजगारी, संस्थाओं के स्थानांतरण और स्मृति व असमानता पर बहसों के साथ कठिन एकीकरण शुरू हुआ।"], highlights: ["लाइपज़िग प्रदर्शनों ने नागरिक आंदोलन की शक्ति दिखाई।", "बर्लिन दीवार 9 नवंबर 1989 को गिरी।", "पुनर्एकीकरण ने युद्धोत्तर जर्मन विभाजन समाप्त किया।"] },
      'berlin-republic': { body: ["बर्लिन गणराज्य राजधानी के बर्लिन लौटने और जर्मनी द्वारा यूरोप में नई भूमिका ग्रहण करने के बाद के दौर को बताता है।", "मर्केल युग ने स्थिरता की छवि दी, लेकिन ऊर्जा, प्रवासन, आधारभूत ढाँचे, रक्षा और डिजिटलकरण पर विवाद छोड़े। 2022 के बाद जर्मनी यूरोपीय सुरक्षा में अपनी भूमिका फिर से परख रहा है।"], highlights: ["बर्लिन फिर राजधानी और राजनीतिक केंद्र बना।", "यूरोपीय एकीकरण जर्मन राजनीति का केंद्रीय ढाँचा बना।", "आज का जर्मनी स्मृति, प्रवासन, ऊर्जा, सुरक्षा और वैश्विक भूमिका पर बहस करता है।"] }
    },
    ar: {
      'tribes-rome': { body: ["في التاريخ المبكر لألمانيا لم يكن الجرمان أمة واحدة بعد، بل قبائل وتحالفات مختلفة عاشت بين الراين والإلبه والدانوب وبحر البلطيق.", "تاجرت روما معهم، وجندت محاربين منهم، وبنت التحصينات، وخافت في الوقت نفسه من حدود غير مستقرة. الطرق والعملات والأسلحة والخدمة في الجيش الروماني غيرت النخب المحلية تدريجيا."], highlights: ["كان الراين والدانوب خطين رئيسيين للتواصل مع روما.", "أوقفت معركة غابة تويتوبورغ التوسع الروماني شرقا.", "أصبح أرمينيوس لاحقا جزءا من الأسطورة القومية الألمانية."] },
      'franks-carolingians': { body: ["ربطت مملكة الفرنجة الإرث الروماني بأوروبا في العصور الوسطى. في عهد شارلمان عززت المسيحية والبلاط والجيش والإدارة المكتوبة سلطة الملك.", "بعد تقسيم الإمبراطورية الكارولنجية أصبحت الأراضي الشرقية تدريجيا نواة العالم الألماني اللاحق، لكنها لم تكن دولة قومية بعد."], highlights: ["جمع شارلمان بين الفتح والإصلاح الديني والإدارة.", "حفظت الأديرة النصوص والتعليم والتنظيم المحلي.", "هيأت فرنجة الشرقية الإطار السياسي للمملكة الألمانية اللاحقة."] },
      'holy-roman-empire': { body: ["لم تكن الإمبراطورية الرومانية المقدسة دولة مركزية حديثة. كان الأباطرة والأمراء والأساقفة والمدن الحرة والفرسان يتقاسمون السلطة ويتنافسون عليها.", "حد التنوع الإقليمي من قوة المركز، لكنه خلق عالما سياسيا غنيا من الأقاليم والقوانين الإمبراطورية والكنيسة والمدن والسلالات."], highlights: ["ربط التتويج الإمبراطوري السياسة الألمانية بتقليد روما.", "حصل الأمراء الإقليميون على استقلال أوسع مع الزمن.", "استمرت الإمبراطورية قرابة ألف عام وتغيرت بعمق."] },
      'medieval-cities': { body: ["أصبحت المدن الألمانية في العصور الوسطى مراكز للتجارة والحرف والقانون الحضري والثقافة. الأسواق والأسوار والنقابات والمجالس البلدية صنعت هوية مدنية قوية.", "ربطت الرابطة الهانزية موانئ بحر الشمال والبلطيق بالتجارة الدولية، بينما بقيت الخريطة السياسية مجزأة بين إمارات وأسقفيات ومدن حرة."], highlights: ["دافعت المدن الحرة عن امتيازاتها واستقلالها.", "كانت لوبيك وهامبورغ وبريمن مراكز هانزية مهمة.", "أدى التجزؤ السياسي إلى تنوع إقليمي واسع."] },
      reformation: { body: ["بدأ الإصلاح الديني كنقاش لاهوتي، لكنه غير السياسة والتعليم والطباعة والحياة اليومية. أصبحت الأراضي الألمانية مركزا مهما للانقسام المذهبي في أوروبا.", "انتشرت كتابات لوثر بسرعة بفضل الطباعة. وبالنسبة إلى كثير من الأمراء كان الإصلاح وسيلة لتعزيز الاستقلال عن الإمبراطور وروما."], highlights: ["سرعت الطباعة انتشار الأفكار الدينية والسياسية.", "أثرت ترجمة لوثر للكتاب المقدس في الألمانية المكتوبة.", "شكل الانقسام بين الكاثوليك والبروتستانت تاريخ ألمانيا لقرون."] },
      'thirty-years-war': { body: ["بدأت حرب الثلاثين عاما كصراع ديني داخل الإمبراطورية، لكنها تحولت إلى حرب أوروبية على السلطة والأراضي والتوازن السياسي.", "تعرضت مناطق ألمانية كثيرة للدمار والجوع ونقص السكان. عزز صلح وستفاليا استقلال الأقاليم وأهمية الدبلوماسية."], highlights: ["اختلط الدين بالطموحات الأسرية ومصالح القوى الأجنبية.", "دمرت مدن وقرى كثيرة في مناطق واسعة.", "أكدت وستفاليا قوة الأقاليم الإمبراطورية."] },
      'prussia-enlightenment': { body: ["نمت بروسيا كقوة عسكرية وإدارية. الجيش والبيروقراطية والضرائب والمدارس خدمت تقوية الدولة.", "في الوقت نفسه فتح التنوير الألماني نقاشات حول العقل والتعليم والقانون والحرية. أعطى كانط ولسنغ وغيرهما هذا العصر معنى فكريا عميقا."], highlights: ["أصبحت بروسيا منافسة للنمسا في العالم الألماني.", "جمع فريدريك الثاني بين الحكم المطلق والإصلاح وثقافة التنوير.", "أثر التنوير في الفلسفة والتعليم والقانون."] },
      'napoleonic-era': { body: ["حطمت الحروب النابليونية النظام الإمبراطوري القديم. في عام 1806 انتهت الإمبراطورية الرومانية المقدسة وأعيد تنظيم كثير من الأراضي الألمانية تحت التأثير الفرنسي.", "جلب الاحتلال والإصلاحات الحداثة والمقاومة معا. اكتسبت أفكار المواطنة والإدارة والجيش والأمة قوة جديدة."], highlights: ["انتهت الإمبراطورية الرومانية المقدسة عام 1806.", "أعاد اتحاد الراين تنظيم كثير من الأراضي الألمانية.", "قوت الحروب ضد نابليون الشعور القومي الألماني."] },
      'revolutions-1848': { body: ["طالبت ثورات 1848 بالدساتير وحقوق المواطنين وحرية الصحافة والوحدة الوطنية. اجتمع في فرانكفورت برلمان حاول إنشاء ألمانيا دستورية.", "فشل المشروع بسبب مقاومة الملوك والانقسامات الداخلية ومسألة النمسا وبروسيا. لكن الأسود والأحمر والذهبي بقيت ألوانا مرتبطة بالفكرة الديمقراطية."], highlights: ["حاولت الجمعية الوطنية في فرانكفورت إنشاء ألمانيا برلمانية.", "دافع الثوار عن حقوق المواطنين والوحدة.", "لم يمح فشل 1848 رموزه الديمقراطية."] },
      unification: { body: ["لم يولد توحيد ألمانيا من ثورة ليبرالية، بل من سياسة القوة البروسية. استخدم بسمارك الدبلوماسية والإصلاحات المحدودة والحروب.", "في عام 1871 أعلنت الإمبراطورية الألمانية في فرساي. جاءت الوحدة مع برلمان، لكنها أبقت ملكية قوية وعسكرة بروسية."], highlights: ["هزمت بروسيا الدنمارك والنمسا وفرنسا.", "حول بسمارك المسألة القومية إلى مشروع محافظ.", "أعلنت الإمبراطورية الألمانية في 18 يناير 1871."] },
      'german-empire': { body: ["تصنعت الإمبراطورية الألمانية بسرعة كبيرة. غيرت السكك الحديدية والفحم والصلب والكيمياء والجامعات والمدن الكبرى المجتمع.", "لكن الإمبراطور والجيش والنخب المحافظة احتفظوا بقوة كبيرة. تقدم تحديث المجتمع أسرع من ديمقراطية الدولة."], highlights: ["أصبحت ألمانيا قوة صناعية كبرى.", "غيرت الحركة العمالية والأحزاب الجماهيرية السياسة.", "ساهم التنافس الإمبراطوري والعسكري في الطريق إلى الحرب العالمية الأولى."] },
      weimar: { body: ["كانت جمهورية فايمار أول ديمقراطية برلمانية ألمانية. ولدت بعد هزيمة الحرب العالمية الأولى وسط الثورة والعنف السياسي والأزمة الاقتصادية.", "رغم إنجازاتها الثقافية والاجتماعية أضعفتها التضخم والبطالة والتطرف ونخب لم تقبل الديمقراطية بالكامل."], highlights: ["جلبت فايمار اقتراعا واسعا وبرلمانا وحقوقا اجتماعية.", "كانت ثقافة العشرينيات مبتكرة في السينما والفن والعمارة والصحافة.", "سرعت الأزمة الاقتصادية العالمية انهيار الديمقراطية."] },
      'nazi-ww2': { body: ["ينبغي عرض هذه المرحلة من دون تجميل. بنى النظام النازي ديكتاتوريته بالإرهاب والدعاية وتدمير دولة القانون واستبعاد جماعات كاملة من المجتمع.", "كانت الحرب والهولوكوست نتيجة أيديولوجية عنصرية وتوسعية وعنيفة. وبالنسبة إلى ألمانيا المعاصرة تشكل ذكرى هذه الكارثة أساس المسؤولية السياسية والتعليم الديمقراطي."], highlights: ["كان عام 1933 بداية الديكتاتورية والاضطهاد.", "دمرت الحرب أوروبا وأودت بحياة الملايين.", "يبقى الهولوكوست في المركز الأخلاقي لذاكرة النازية."] },
      'divided-germany': { body: ["لم يكن تقسيم ألمانيا جيوسياسة فقط، بل تجربة يومية. عاش الناس بجوازات وإعلام ومدارس وجيوش واقتصادات مختلفة.", "اندماجت ألمانيا الغربية في الغرب وأوروبا. أما ألمانيا الشرقية فطورت هوية اشتراكية، لكنها اعتمدت على الرقابة والحدود وجهاز الأمن."], highlights: ["بنت ألمانيا الاتحادية ديمقراطية برلمانية واقتصادا اجتماعيا للسوق.", "كانت ألمانيا الشرقية دولة اشتراكية تحت التأثير السوفيتي.", "قسم جدار برلين العائلات والمدينة وأوروبا."] },
      reunification: { body: ["لم تكن إعادة التوحيد هدية مفاجئة، بل نتيجة ضغط المواطنين وأزمة ألمانيا الشرقية والبيريسترويكا السوفيتية والدبلوماسية السريعة.", "بعد عام 1990 بدأ اندماج صعب شمل الخصخصة والبطالة ونقل المؤسسات ونقاشات الذاكرة وعدم المساواة."], highlights: ["أظهرت مظاهرات لايبزيغ قوة الحركة المدنية.", "سقط جدار برلين في 9 نوفمبر 1989.", "أنهت إعادة التوحيد تقسيم ألمانيا بعد الحرب."] },
      'berlin-republic': { body: ["تشير جمهورية برلين إلى ألمانيا بعد عودة العاصمة إلى برلين وتولي دور جديد في أوروبا.", "أعطى عهد ميركل صورة عن الاستقرار، لكنه ترك قضايا خلافية حول الطاقة والهجرة والبنية التحتية والدفاع والرقمنة. ومنذ 2022 تعيد ألمانيا تقييم دورها في أمن أوروبا."], highlights: ["عادت برلين عاصمة ومركزا سياسيا.", "أصبح التكامل الأوروبي إطارا مركزيا للسياسة الألمانية.", "تناقش ألمانيا المعاصرة الذاكرة والهجرة والطاقة والأمن ودورها العالمي."] }
    },
    pt: {
      'tribes-rome': {
        body: [
          "Na história antiga da Alemanha, os povos germânicos ainda não eram uma nação. Eram tribos e alianças diferentes entre o Reno, o Elba, o Danúbio e o Báltico.",
          "Roma comerciava com eles, recrutava guerreiros, construía fortificações e temia uma fronteira instável. Estradas, moedas, armas e serviço militar romano mudaram lentamente as elites locais."
        ],
        highlights: [
          "Reno e Danúbio foram linhas principais de contato com Roma.",
          "A batalha da floresta de Teutoburgo travou a expansão romana para leste.",
          "Arminius tornou-se muito mais tarde parte do mito nacional alemão."
        ]
      },
      'franks-carolingians': {
        body: [
          "O reino franco ligou a herança romana à Europa medieval. Sob Carlos Magno, cristianismo, corte, exército e escrita administrativa reforçaram o poder real.",
          "Após a divisão do império carolíngio, as terras orientais tornaram-se gradualmente o núcleo do futuro mundo alemão, ainda sem formar um Estado nacional."
        ],
        highlights: [
          "Carlos Magno combinou conquista, reforma religiosa e administração.",
          "Mosteiros preservaram textos, ensino e organização territorial.",
          "A Frância Oriental preparou o quadro político do futuro reino alemão."
        ]
      },
      'holy-roman-empire': {
        body: [
          "O Sacro Império Romano não foi um Estado centralizado moderno. Imperadores, príncipes, bispos, cidades livres e cavaleiros partilhavam e disputavam autoridade.",
          "Essa diversidade regional limitava o poder central, mas criou uma paisagem política rica, feita de territórios, leis imperiais, Igreja, cidades e dinastias."
        ],
        highlights: [
          "A coroação imperial ligava a política alemã a Roma.",
          "Os príncipes territoriais ganharam cada vez mais autonomia.",
          "O império durou quase mil anos, mudando profundamente."
        ]
      },
      'medieval-cities': {
        body: [
          "As cidades medievais alemãs tornaram-se centros de comércio, artesanato, direito urbano e cultura. Mercados, muralhas, guildas e conselhos deram identidade própria às cidades.",
          "A Liga Hanseática ligou portos do Norte e do Báltico a rotas internacionais, enquanto o mapa político continuava fragmentado entre principados, bispados e cidades livres."
        ],
        highlights: [
          "Cidades livres defendiam privilégios e autonomia.",
          "Lübeck, Hamburgo e Bremen foram nós importantes da Hansa.",
          "A fragmentação política criou grande diversidade regional."
        ]
      },
      reformation: {
        body: [
          "A Reforma começou como disputa teológica, mas mudou política, educação, imprensa e vida cotidiana. As terras alemãs tornaram-se centro da divisão confessional europeia.",
          "Os textos de Lutero espalharam-se rapidamente pela imprensa. Para muitos príncipes, a Reforma também reforçou a autonomia diante do imperador e de Roma."
        ],
        highlights: [
          "A imprensa acelerou a difusão de ideias religiosas e políticas.",
          "A tradução bíblica de Lutero influenciou o alemão escrito.",
          "A divisão entre católicos e protestantes marcou séculos de história."
        ]
      },
      'thirty-years-war': {
        body: [
          "A Guerra dos Trinta Anos começou como conflito religioso no império e tornou-se uma guerra europeia por poder, territórios e equilíbrio político.",
          "Muitas regiões alemãs sofreram destruição, fome e despovoamento. A Paz de Vestfália reforçou a autonomia dos territórios e a importância da diplomacia."
        ],
        highlights: [
          "Religião, dinastias e potências estrangeiras se misturaram no conflito.",
          "Cidades e campos foram devastados em muitas regiões.",
          "Vestfália confirmou a força dos territórios imperiais."
        ]
      },
      'prussia-enlightenment': {
        body: [
          "A Prússia cresceu como potência militar e administrativa. Exército, burocracia, impostos e escola serviam ao fortalecimento do Estado.",
          "Ao mesmo tempo, o Iluminismo alemão trouxe debates sobre razão, educação, direito e liberdade. Kant, Lessing e outros deram grande peso intelectual à época."
        ],
        highlights: [
          "A Prússia tornou-se rival da Áustria no espaço alemão.",
          "Frederico II uniu absolutismo, reformas e cultura ilustrada.",
          "O Iluminismo influenciou filosofia, educação e direito."
        ]
      },
      'napoleonic-era': {
        body: [
          "As guerras napoleônicas destruíram a antiga ordem imperial. Em 1806 desapareceu o Sacro Império Romano, e muitos territórios alemães foram reorganizados sob influência francesa.",
          "Ocupação e reformas trouxeram modernização e resistência. Ideias sobre cidadania, administração, exército e nação ganharam nova força."
        ],
        highlights: [
          "O Sacro Império Romano terminou em 1806.",
          "A Confederação do Reno reorganizou muitos territórios.",
          "As guerras contra Napoleão fortaleceram o sentimento nacional alemão."
        ]
      },
      'revolutions-1848': {
        body: [
          "As revoluções de 1848 exigiram constituições, direitos civis, liberdade de imprensa e unidade nacional. Em Frankfurt reuniu-se uma assembleia para criar uma Alemanha constitucional.",
          "O projeto fracassou pela resistência dos monarcas, divisões internas e a questão Áustria-Prússia. Mesmo assim, preto, vermelho e dourado ficaram ligados à ideia democrática."
        ],
        highlights: [
          "A Assembleia de Frankfurt tentou criar uma Alemanha parlamentar.",
          "Os revolucionários defenderam direitos civis e unidade.",
          "O fracasso de 1848 não apagou seus símbolos democráticos."
        ]
      },
      unification: {
        body: [
          "A unificação alemã nasceu da política de poder prussiana, não de uma revolução liberal. Bismarck usou diplomacia, reformas limitadas e guerras para liderar o processo.",
          "Em 1871 o Império Alemão foi proclamado em Versalhes. A unidade veio com parlamento, mas também com monarquia forte, militarismo prussiano e tensões políticas."
        ],
        highlights: [
          "A Prússia derrotou Dinamarca, Áustria e França.",
          "Bismarck transformou a questão nacional em projeto conservador.",
          "O Império Alemão foi proclamado em 18 de janeiro de 1871."
        ]
      },
      'german-empire': {
        body: [
          "O Império Alemão industrializou-se rapidamente. Ferrovias, carvão, aço, química, universidades e grandes cidades mudaram a sociedade.",
          "Mas o sistema político continuou marcado pelo imperador, pelo exército e pelas elites conservadoras. A modernização social avançou mais rápido que a democratização."
        ],
        highlights: [
          "A Alemanha tornou-se uma grande potência industrial.",
          "O movimento operário e os partidos de massa mudaram a política.",
          "Rivalidades imperiais e militares contribuíram para a Primeira Guerra Mundial."
        ]
      },
      weimar: {
        body: [
          "A República de Weimar foi a primeira democracia parlamentar alemã. Nasceu após a derrota na Primeira Guerra Mundial, em meio a revolução, violência política e crise econômica.",
          "Apesar de conquistas culturais e sociais, foi enfraquecida por inflação, desemprego, extremismos e elites que nunca aceitaram plenamente a democracia."
        ],
        highlights: [
          "Weimar trouxe sufrágio amplo, parlamento e direitos sociais.",
          "A cultura dos anos 1920 inovou em cinema, arte, arquitetura e imprensa.",
          "A crise econômica mundial acelerou o colapso democrático."
        ]
      },
      'nazi-ww2': {
        body: [
          "Esta época deve ser mostrada sem romantização. O regime nazista construiu a ditadura com terror, propaganda, destruição do Estado de direito e exclusão de grupos inteiros.",
          "A guerra e o Holocausto nasceram de uma ideologia de racismo, expansão e violência. Para a Alemanha atual, essa memória fundamenta responsabilidade política e educação democrática."
        ],
        highlights: [
          "1933 marcou o início da ditadura e da perseguição.",
          "A guerra destruiu a Europa e matou milhões.",
          "O Holocausto permanece no centro moral da memória do nazismo."
        ]
      },
      'divided-germany': {
        body: [
          "A divisão da Alemanha não foi apenas geopolítica: tornou-se experiência cotidiana. Pessoas viviam com passaportes, mídias, escolas, exércitos e economias diferentes.",
          "A Alemanha Ocidental integrou-se ao Ocidente e à Europa. A RDA criou identidade socialista, mas dependia de controle, fronteiras e aparato de segurança."
        ],
        highlights: [
          "A RFA construiu democracia parlamentar e economia social de mercado.",
          "A RDA foi um Estado socialista sob influência soviética.",
          "O Muro de Berlim dividiu famílias, uma cidade e a Europa."
        ]
      },
      reunification: {
        body: [
          "A reunificação não foi um presente repentino, mas resultado de pressão popular, crise da RDA, perestroika soviética e diplomacia rápida.",
          "Depois de 1990 começou uma integração difícil: privatizações, desemprego, transferência de instituições e debates sobre memória e desigualdade."
        ],
        highlights: [
          "As manifestações de Leipzig mostraram a força do movimento cívico.",
          "O Muro de Berlim caiu em 9 de novembro de 1989.",
          "A reunificação encerrou a divisão alemã do pós-guerra."
        ]
      },
      'berlin-republic': {
        body: [
          "A República de Berlim designa a Alemanha após o retorno da capital a Berlim e a adoção de um novo papel na Europa.",
          "A era Merkel transmitiu estabilidade, mas deixou debates sobre energia, migração, infraestrutura, defesa e digitalização. Desde 2022, a Alemanha revê seu papel na segurança europeia."
        ],
        highlights: [
          "Berlim voltou a ser capital e centro político.",
          "A integração europeia tornou-se quadro central da política alemã.",
          "A Alemanha atual debate memória, migração, energia, segurança e papel global."
        ]
      }
    },
    nl: {
      'tribes-rome': {
        body: [
          "In de vroegste Duitse geschiedenis waren de Germanen nog geen natie. Het waren verschillende stammen en bondgenootschappen tussen Rijn, Elbe, Donau en Oostzee.",
          "Rome dreef handel met hen, wierf krijgers, bouwde grensversterkingen en vreesde tegelijk een onstabiele grens. Wegen, munten, wapens en Romeinse dienst veranderden lokale elites."
        ],
        highlights: [
          "Rijn en Donau waren belangrijke contactlijnen met Rome.",
          "De slag in het Teutoburgerwoud stopte de Romeinse opmars naar het oosten.",
          "Arminius werd later deel van de Duitse nationale mythe."
        ]
      },
      'franks-carolingians': {
        body: [
          "Het Frankische rijk verbond de Romeinse erfenis met middeleeuws Europa. Onder Karel de Grote versterkten christendom, hof, leger en administratie de koninklijke macht.",
          "Na de deling van het Karolingische rijk werden de oostelijke gebieden geleidelijk de kern van de latere Duitse wereld."
        ],
        highlights: [
          "Karel de Grote combineerde verovering, kerkhervorming en bestuur.",
          "Kloosters bewaarden teksten, onderwijs en territoriale organisatie.",
          "Oost-Francië bereidde het politieke kader van het Duitse koninkrijk voor."
        ]
      },
      'holy-roman-empire': {
        body: [
          "Het Heilige Roomse Rijk was geen moderne gecentraliseerde staat. Keizers, vorsten, bisschoppen, vrije steden en ridders deelden en betwistten gezag.",
          "Die regionale verscheidenheid beperkte de centrale macht, maar schiep een rijk politiek landschap van gebieden, wetten, kerkelijke macht en steden."
        ],
        highlights: [
          "De keizerskroning verbond Duitse politiek met Rome.",
          "Territoriale vorsten kregen steeds meer autonomie.",
          "Het rijk bestond bijna duizend jaar en veranderde sterk."
        ]
      },
      'medieval-cities': {
        body: [
          "Middeleeuwse Duitse steden werden centra van handel, ambacht, stadsrecht en cultuur. Markten, muren, gilden en raden gaven veel steden een eigen identiteit.",
          "De Hanze verbond Noordzee- en Oostzeehavens met internationale handelsroutes, terwijl het politieke landschap gefragmenteerd bleef."
        ],
        highlights: [
          "Vrije steden verdedigden privileges en autonomie.",
          "Lübeck, Hamburg en Bremen waren belangrijke Hanzesteden.",
          "Politieke versnippering maakte regionale verscheidenheid mogelijk."
        ]
      },
      reformation: {
        body: [
          "De Reformatie begon als theologisch conflict, maar veranderde politiek, onderwijs, drukwerk en dagelijks leven. Duitse gebieden werden kerngebied van de Europese geloofssplitsing.",
          "Luthers teksten verspreidden zich snel door de drukpers. Voor veel vorsten was de Reformatie ook een middel tot grotere zelfstandigheid."
        ],
        highlights: [
          "De drukpers versnelde religieuze en politieke ideeën.",
          "Luthers Bijbelvertaling beïnvloedde de Duitse schrijftaal.",
          "De scheiding tussen katholieken en protestanten bepaalde eeuwenlang de geschiedenis."
        ]
      },
      'thirty-years-war': {
        body: [
          "De Dertigjarige Oorlog begon als religieus conflict in het rijk en werd een Europese strijd om macht, gebieden en politiek evenwicht.",
          "Veel Duitse regio's leden onder verwoesting, honger en ontvolking. De Vrede van Westfalen versterkte de autonomie van de gebieden en de rol van diplomatie."
        ],
        highlights: [
          "Religie, dynastieke ambities en buitenlandse belangen raakten vermengd.",
          "Steden en dorpen werden in veel gebieden verwoest.",
          "Westfalen bevestigde de macht van de rijksgebieden."
        ]
      },
      'prussia-enlightenment': {
        body: [
          "Pruisen groeide als militaire en bestuurlijke macht. Leger, ambtenaren, belastingen en scholen versterkten de staat.",
          "Tegelijk bracht de Duitse Verlichting debatten over rede, onderwijs, recht en vrijheid. Kant, Lessing en anderen gaven de tijd een sterke intellectuele betekenis."
        ],
        highlights: [
          "Pruisen werd de rivaal van Oostenrijk in de Duitse wereld.",
          "Frederik II combineerde absolutisme, hervormingen en verlichte cultuur.",
          "De Verlichting beïnvloedde filosofie, onderwijs en recht."
        ]
      },
      'napoleonic-era': {
        body: [
          "De Napoleontische oorlogen vernietigden de oude rijksorde. In 1806 verdween het Heilige Roomse Rijk en veel Duitse gebieden werden hervormd onder Franse invloed.",
          "Bezetting en hervormingen brachten modernisering én verzet. Ideeën over burgerschap, bestuur, leger en natie kregen nieuwe kracht."
        ],
        highlights: [
          "Het Heilige Roomse Rijk eindigde in 1806.",
          "De Rijnbond reorganiseerde veel Duitse gebieden.",
          "De oorlogen tegen Napoleon versterkten Duits nationaal gevoel."
        ]
      },
      'revolutions-1848': {
        body: [
          "De revoluties van 1848 eisten grondwetten, burgerrechten, persvrijheid en nationale eenheid. In Frankfurt probeerde een parlement een constitutioneel Duitsland te vormen.",
          "Het project mislukte door monarchaal verzet, interne verdeeldheid en de Oostenrijks-Pruisische kwestie. De kleuren zwart, rood en goud bleven democratisch symbool."
        ],
        highlights: [
          "De Nationale Vergadering in Frankfurt wilde een parlementair Duitsland.",
          "Revolutionairen verdedigden burgerrechten en eenheid.",
          "De mislukking van 1848 wist de democratische symbolen niet uit."
        ]
      },
      unification: {
        body: [
          "De Duitse eenwording kwam voort uit Pruisische machtspolitiek, niet uit een liberale revolutie. Bismarck gebruikte diplomatie, beperkte hervormingen en oorlogen.",
          "In 1871 werd het Duitse Keizerrijk in Versailles uitgeroepen. Eenheid kwam met een parlement, maar ook met sterke monarchie en Pruisisch militarisme."
        ],
        highlights: [
          "Pruisen versloeg Denemarken, Oostenrijk en Frankrijk.",
          "Bismarck maakte de nationale kwestie tot conservatief project.",
          "Het Duitse Keizerrijk werd uitgeroepen op 18 januari 1871."
        ]
      },
      'german-empire': {
        body: [
          "Het Duitse Keizerrijk industrialiseerde zeer snel. Spoorwegen, kolen, staal, chemie, universiteiten en grote steden veranderden de samenleving.",
          "Maar keizer, leger en conservatieve elites behielden veel macht. De modernisering van de samenleving liep sneller dan de democratisering van de staat."
        ],
        highlights: [
          "Duitsland werd een grote industriële macht.",
          "Arbeidersbeweging en massapartijen veranderden de politiek.",
          "Imperiale en militaire rivaliteit droeg bij aan de Eerste Wereldoorlog."
        ]
      },
      weimar: {
        body: [
          "De Weimarrepubliek was de eerste parlementaire democratie van Duitsland. Zij ontstond na nederlaag, revolutie, politiek geweld en economische crisis.",
          "Ondanks culturele en sociale verworvenheden werd Weimar verzwakt door inflatie, werkloosheid, extremisme en elites die democratie niet volledig accepteerden."
        ],
        highlights: [
          "Weimar bracht breed kiesrecht, parlement en sociale rechten.",
          "De jaren twintig vernieuwden film, kunst, architectuur en pers.",
          "De wereldcrisis versnelde de ondergang van de democratie."
        ]
      },
      'nazi-ww2': {
        body: [
          "Deze periode moet zonder romantisering worden getoond. Het naziregime bouwde dictatuur met terreur, propaganda, vernietiging van de rechtsstaat en uitsluiting van hele groepen.",
          "Oorlog en Holocaust kwamen voort uit racisme, expansie en geweld. Voor het huidige Duitsland vormt deze herinnering de basis van politieke verantwoordelijkheid."
        ],
        highlights: [
          "1933 markeerde het begin van dictatuur en vervolging.",
          "De oorlog verwoestte Europa en kostte miljoenen levens.",
          "De Holocaust blijft het morele centrum van de herinnering aan het nazisme."
        ]
      },
      'divided-germany': {
        body: [
          "De deling van Duitsland was niet alleen geopolitiek, maar ook dagelijks leven. Mensen leefden met verschillende paspoorten, media, scholen, legers en economieën.",
          "West-Duitsland integreerde in het Westen en Europa. De DDR ontwikkelde een socialistische identiteit, maar steunde op controle, grenzen en veiligheidsapparaat."
        ],
        highlights: [
          "De Bondsrepubliek bouwde parlementaire democratie en sociale markteconomie.",
          "De DDR was een socialistische staat onder Sovjetinvloed.",
          "De Berlijnse Muur verdeelde families, een stad en Europa."
        ]
      },
      reunification: {
        body: [
          "De hereniging was geen plots geschenk, maar resultaat van burgerdruk, DDR-crisis, Sovjet-perestrojka en snelle diplomatie.",
          "Na 1990 begon een moeilijke integratie met privatisering, werkloosheid, overdracht van instellingen en debatten over herinnering en ongelijkheid."
        ],
        highlights: [
          "De demonstraties in Leipzig toonden de kracht van de burgerbeweging.",
          "De Berlijnse Muur viel op 9 november 1989.",
          "De hereniging beëindigde de naoorlogse Duitse deling."
        ]
      },
      'berlin-republic': {
        body: [
          "De Berlijnse Republiek beschrijft Duitsland na de terugkeer van de hoofdstad naar Berlijn en een nieuwe rol in Europa.",
          "Het Merkel-tijdperk gaf stabiliteit, maar liet discussies over energie, migratie, infrastructuur, defensie en digitalisering achter. Sinds 2022 heroverweegt Duitsland zijn rol in Europese veiligheid."
        ],
        highlights: [
          "Berlijn werd opnieuw hoofdstad en politiek centrum.",
          "Europese integratie werd centraal kader van Duitse politiek.",
          "Het huidige Duitsland debatteert over herinnering, migratie, energie, veiligheid en wereldrol."
        ]
      }
    }
  };

  periods.forEach(function(period) {
    Object.keys(additionalFullTextTranslations).forEach(function(lang) {
      const pack = additionalFullTextTranslations[lang];
      const patch = pack && pack[period.id];
      if (!patch) return;
      period.body = period.body || {};
      period.highlights = period.highlights || {};
      period.summary = period.summary || {};
      period.body[lang] = patch.body;
      period.highlights[lang] = patch.highlights;
      if (!period.summary[lang]) {
        period.summary[lang] = patch.body[0];
      }
    });
  });

  const localMedia = {
    'tribes-rome': ['Limes2.png', 'Hermannsdenkmal_statue.jpg'],
    'franks-carolingians': ['Frankish_Empire_481_to_814-en.svg', 'Albrecht_Du_rer_-_Emperor_Charlemagne.jpg', 'Einhard.jpg'],
    'holy-roman-empire': ['Deutscher_Bund.svg'],
    'medieval-cities': ['Extent_of_the_Hansa.png', 'Germania_70.svg'],
    'reformation': ['Martin_Luther_by_Cranach-restoration.jpg', '95Thesen.jpg'],
    'thirty-years-war': ['Albrecht_von_Wallenstein.jpeg', 'Deutscher_Bund.svg'],
    'prussia-enlightenment': ['Kant_gemaelde_3.jpg', 'Immanuel_Kant_(painted_portrait).jpg'],
    'napoleonic-era': ['Confederation_of_the_Rhine_(1812).svg'],
    'revolutions-1848': ['Heinrich_von_Gagern.jpg', 'Robert_Blum.jpg', 'Deutscher_Bund.svg'],
    'unification': ['Otto_von_Bismarck.JPG'],
    'german-empire': ['German_colonial.PNG'],
    'weimar': ['Weimar_Republic_states_map.svg'],
    'nazi-ww2': ['Europe_under_Nazi_domination.png', 'Second_world_war_europe_1941-1942_map_en.png'],
    'divided-germany': ['Map-Germany-1945.svg', 'Berlinermauer.jpg', 'Checkpoint_Charlie_1961-10-27.jpg'],
    'reunification': ['West_and_East_Germans_at_the_Brandenburg_Gate_in_1989.jpg'],
    'berlin-republic': ['Germany_administrative_divisions_de_colored.png']
  };

  const localMediaTitles = {
    'Limes2.png': { ru: 'Римская пограничная линия укреплений', de: 'Römische Grenzbefestigungen', en: 'Roman frontier fortifications' },
    'Hermannsdenkmal_statue.jpg': { ru: 'Памятник Арминию', de: 'Hermannsdenkmal', en: 'Arminius monument' },
    'Frankish_Empire_481_to_814-en.svg': { ru: 'Рост Франкской империи', de: 'Aufstieg des Frankenreiches', en: 'Rise of the Frankish Empire' },
    'Albrecht_Du_rer_-_Emperor_Charlemagne.jpg': { ru: 'Карл Великий', de: 'Karl der Große', en: 'Charlemagne' },
    'Einhard.jpg': null,
    'Extent_of_the_Hansa.png': { ru: 'Ганзейский союз около 1400 года', de: 'Hansebund um 1400', en: 'Hanseatic League around 1400' },
    'Confederation_of_the_Rhine_(1812).svg': { ru: 'Рейнский союз в 1812 году', de: 'Rheinbund 1812', en: 'Confederation of the Rhine in 1812' },
    'Deutscher_Bund.svg': { ru: 'Германский союз', de: 'Deutscher Bund', en: 'German Confederation' },
    'Europe_under_Nazi_domination.png': { ru: 'Европа под властью нацистов', de: 'Europa unter NS-Herrschaft', en: 'Europe under Nazi rule' },
    'Second_world_war_europe_1941-1942_map_en.png': { ru: 'Европа во Второй мировой войне', de: 'Europa im Zweiten Weltkrieg', en: 'Europe in World War II' },
    'Germany_location_map.svg': { ru: 'Германия на современной карте', de: 'Deutschland auf der modernen Karte', en: 'Germany on the modern map' },
    'Germany_administrative_divisions_de_colored.png': { ru: 'Политическая карта современной Германии', de: 'Politische Karte des heutigen Deutschlands', en: 'Political map of modern Germany' },
    'Weimar_Republic_states_map.svg': { ru: 'Земли Веймарской республики', de: 'Länder der Weimarer Republik', en: 'States of the Weimar Republic' },
    'Map-Germany-1945.svg': { ru: 'Оккупационные зоны Германии', de: 'Besatzungszonen Deutschlands', en: 'Occupation zones of Germany' },
    'German_colonial.PNG': { ru: 'Колониальная империя Германии', de: 'Deutsche Kolonien', en: 'German colonial empire' },
    'Martin_Luther_by_Cranach-restoration.jpg': { ru: 'Мартин Лютер', de: 'Martin Luther', en: 'Martin Luther' },
    '95Thesen.jpg': null,
    'Heinrich_von_Gagern.jpg': { ru: 'Генрих фон Гагерн', de: 'Heinrich von Gagern', en: 'Heinrich von Gagern' },
    'Robert_Blum.jpg': { ru: 'Роберт Блюм', de: 'Robert Blum', en: 'Robert Blum' },
    'Otto_von_Bismarck.JPG': { ru: 'Отто фон Бисмарк', de: 'Otto von Bismarck', en: 'Otto von Bismarck' },
    'Kant_gemaelde_3.jpg': { ru: 'Иммануил Кант', de: 'Immanuel Kant', en: 'Immanuel Kant' },
    'Immanuel_Kant_(painted_portrait).jpg': { ru: 'Портрет Иммануила Канта', de: 'Porträt Immanuel Kants', en: 'Portrait of Immanuel Kant' },
    'Albrecht_von_Wallenstein.jpeg': { ru: 'Альбрехт фон Валленштейн', de: 'Albrecht von Wallenstein', en: 'Albrecht von Wallenstein' }
  };

  const localSymbols = {
    'holy-roman-empire': [
      { file: 'Banner_of_the_Holy_Roman_Emperor_with_haloes_(1430-1806).svg', title: { ru: 'Знамя Священной Римской империи', de: 'Banner des Heiligen Römischen Reiches', en: 'Banner of the Holy Roman Empire' } }
    ],
    'thirty-years-war': [
      { file: 'Banner_of_the_Holy_Roman_Emperor_with_haloes_(1430-1806).svg', title: { ru: 'Имперское знамя', de: 'Reichsbanner', en: 'Imperial banner' } }
    ],
    'prussia-enlightenment': [
      { file: 'Flag_of_Prussia_(1892-1918).svg', title: { ru: 'Флаг Пруссии', de: 'Flagge Preußens', en: 'Flag of Prussia' } }
    ],
    'revolutions-1848': [
      { file: 'Flag_of_Germany_(3-2).svg', title: { ru: 'Чёрно-красно-золотой флаг', de: 'Schwarz-Rot-Gold', en: 'Black-red-gold flag' } }
    ],
    'unification': [
      { file: 'Flag_of_Germany_(1867_1918).svg', title: { ru: 'Чёрно-бело-красный флаг', de: 'Schwarz-Weiß-Rot', en: 'Black-white-red flag' } }
    ],
    'german-empire': [
      { file: 'Flag_of_Germany_(1867_1918).svg', title: { ru: 'Флаг Германской империи', de: 'Flagge des Deutschen Kaiserreichs', en: 'Flag of the German Empire' } }
    ],
    'weimar': [
      { file: 'Flag_of_Germany_(3-2).svg', title: { ru: 'Флаг Веймарской республики', de: 'Flagge der Weimarer Republik', en: 'Flag of the Weimar Republic' } },
      { file: 'Coat_of_arms_of_Germany.svg', title: { ru: 'Герб Веймарской республики', de: 'Reichswappen der Weimarer Republik', en: 'Coat of arms of the Weimar Republic' } }
    ],
    'divided-germany': [
      { file: 'Flag_of_Germany_(3-2).svg', title: { ru: 'Флаг ФРГ', de: 'Flagge der BRD', en: 'Flag of West Germany' } },
      { file: 'Flag_of_East_Germany.svg', title: { ru: 'Флаг ГДР', de: 'Flagge der DDR', en: 'Flag of East Germany' } }
    ],
    'reunification': [
      { file: 'Flag_of_Germany_(3-2).svg', title: { ru: 'Флаг объединённой Германии', de: 'Flagge des vereinten Deutschlands', en: 'Flag of reunified Germany' } }
    ],
    'berlin-republic': [
      { file: 'Flag_of_Germany_(3-2).svg', title: { ru: 'Флаг Германии', de: 'Flagge Deutschlands', en: 'Flag of Germany' } },
      { file: 'Coat_of_arms_of_Germany.svg', title: { ru: 'Федеральный герб Германии', de: 'Bundeswappen Deutschlands', en: 'Federal coat of arms of Germany' } }
    ]
  };

  const localFiles = new Set(Object.keys(localMedia).reduce(function(files, periodId) {
    return files.concat(localMedia[periodId]);
  }, [
    '95Thesen.jpg',
    'Albrecht_Du_rer_-_Emperor_Charlemagne.jpg',
    'Albrecht_von_Wallenstein.jpeg',
    'Berlinermauer.jpg',
    'Checkpoint_Charlie_1961-10-27.jpg',
    'Confederation_of_the_Rhine_(1812).svg',
    'Deutscher_Bund.svg',
    'Einhard.jpg',
    'Europe_under_Nazi_domination.png',
    'Extent_of_the_Hansa.png',
    'Frankish_Empire_481_to_814-en.svg',
    'German_colonial.PNG',
    'Germania_70.svg',
    'Germany_administrative_divisions_de_colored.png',
    'Germany_location_map.svg',
    'Heinrich_von_Gagern.jpg',
    'Hermannsdenkmal_statue.jpg',
    'Immanuel_Kant_(painted_portrait).jpg',
    'Kant_gemaelde_3.jpg',
    'Limes2.png',
    'Map-Germany-1945.svg',
    'Martin_Luther_by_Cranach-restoration.jpg',
    'Otto_von_Bismarck.JPG',
    'Robert_Blum.jpg',
    'Second_world_war_europe_1941-1942_map_en.png',
    'Weimar_Republic_states_map.svg',
    'West_and_East_Germans_at_the_Brandenburg_Gate_in_1989.jpg'
  ]));

  periods.forEach(function(period) {
    const files = localMedia[period.id];
    if (!files) return;
    const existingTitles = period.media || [];
    period.media = files.map(function(file, index) {
      const old = existingTitles[index] || existingTitles[0] || {};
      return {
        title: Object.prototype.hasOwnProperty.call(localMediaTitles, file) ? localMediaTitles[file] : (old.title || period.title),
        image: 'assets/history/' + file,
        kind: /\.svg$|map|Map|Germany|Germania|Bund|Europe|Empire|Hansa|Limes|Rhine/i.test(file) ? 'map' : 'image'
      };
    });

    period.symbols = (localSymbols[period.id] || []).map(function(symbol) {
      return {
        title: symbol.title,
        image: 'assets/history/' + symbol.file
      };
    });

    (period.people || []).forEach(function(person) {
      if (person.name === 'Arminius') {
        person.image = 'assets/history/Hermannsdenkmal_statue.jpg';
      }
      if (!person.image) return;
      const file = person.image.split('/').pop();
      if (!localFiles.has(file)) {
        delete person.image;
      }
    });
  });

  const extraUi = {
    fr: { button: 'Histoire de l’Allemagne', title: 'Histoire de l’Allemagne', close: 'Fermer', timeline: 'Époques', people: 'Personnalités', years: 'Période', prev: 'Retour', next: 'Suivant', source: 'Images : Wikimedia Commons et matériaux historiques libres.' },
    es: { button: 'Historia de Alemania', title: 'Historia de Alemania', close: 'Cerrar', timeline: 'Épocas', people: 'Personajes destacados', years: 'Período', prev: 'Atrás', next: 'Siguiente', source: 'Imágenes: Wikimedia Commons y materiales históricos abiertos.' },
    it: { button: 'Storia della Germania', title: 'Storia della Germania', close: 'Chiudi', timeline: 'Epoche', people: 'Personalità importanti', years: 'Periodo', prev: 'Indietro', next: 'Avanti', source: 'Immagini: Wikimedia Commons e materiali storici aperti.' },
    pt: { button: 'História da Alemanha', title: 'História da Alemanha', close: 'Fechar', timeline: 'Épocas', people: 'Personalidades importantes', years: 'Período', prev: 'Voltar', next: 'Avançar', source: 'Imagens: Wikimedia Commons e materiais históricos abertos.' },
    nl: { button: 'Geschiedenis van Duitsland', title: 'Geschiedenis van Duitsland', close: 'Sluiten', timeline: 'Tijdperken', people: 'Belangrijke personen', years: 'Periode', prev: 'Terug', next: 'Verder', source: 'Afbeeldingen: Wikimedia Commons en open historisch materiaal.' },
    pl: { button: 'Historia Niemiec', title: 'Historia Niemiec', close: 'Zamknij', timeline: 'Epoki', people: 'Wybitne postacie', years: 'Okres', prev: 'Wstecz', next: 'Dalej', source: 'Ilustracje: Wikimedia Commons i otwarte materiały historyczne.' },
    tr: { button: 'Almanya Tarihi', title: 'Almanya Tarihi', close: 'Kapat', timeline: 'Dönemler', people: 'Önemli kişiler', years: 'Dönem', prev: 'Geri', next: 'İleri', source: 'Görseller: Wikimedia Commons ve açık tarih materyalleri.' },
    zh: { button: '德国历史', title: '德国历史', close: '关闭', timeline: '时代', people: '重要人物', years: '时期', prev: '返回', next: '继续', source: '图片：Wikimedia Commons 和开放历史资料。' },
    ja: { button: 'ドイツの歴史', title: 'ドイツの歴史', close: '閉じる', timeline: '時代', people: '重要人物', years: '時期', prev: '戻る', next: '次へ', source: '画像: Wikimedia Commons と公開歴史資料。' },
    ko: { button: '독일의 역사', title: '독일의 역사', close: '닫기', timeline: '시대', people: '주요 인물', years: '시기', prev: '이전', next: '다음', source: '이미지: Wikimedia Commons 및 공개 역사 자료.' },
    hi: { button: 'जर्मनी का इतिहास', title: 'जर्मनी का इतिहास', close: 'बंद करें', timeline: 'युग', people: 'प्रमुख व्यक्ति', years: 'काल', prev: 'पीछे', next: 'आगे', source: 'चित्र: Wikimedia Commons और खुले ऐतिहासिक स्रोत।' },
    ar: { button: 'تاريخ ألمانيا', title: 'تاريخ ألمانيا', close: 'إغلاق', timeline: 'العصور', people: 'شخصيات بارزة', years: 'الفترة', prev: 'رجوع', next: 'التالي', source: 'الصور: Wikimedia Commons ومواد تاريخية مفتوحة.' }
  };

  const periodTitleTranslations = {
    'tribes-rome': {
      fr: 'Tribus germaniques et Rome', es: 'Tribus germánicas y Roma', it: 'Tribù germaniche e Roma', pt: 'Tribos germânicas e Roma', nl: 'Germaanse stammen en Rome', pl: 'Plemiona germańskie i Rzym', tr: 'Cermen kabileleri ve Roma', zh: '日耳曼部落与罗马', ja: 'ゲルマン諸部族とローマ', ko: '게르만 부족과 로마', hi: 'जर्मनिक जनजातियाँ और रोम', ar: 'القبائل الجرمانية وروما'
    },
    'franks-carolingians': {
      fr: 'Francs et Carolingiens', es: 'Francos y carolingios', it: 'Franchi e Carolingi', pt: 'Francos e carolíngios', nl: 'Franken en Karolingers', pl: 'Frankowie i Karolingowie', tr: 'Franklar ve Karolenjler', zh: '法兰克人与加洛林王朝', ja: 'フランク人とカロリング朝', ko: '프랑크족과 카롤루스 왕조', hi: 'फ्रैंक और कैरोलिंजियन', ar: 'الفرنجة والكارولنجيون'
    },
    'holy-roman-empire': {
      fr: 'Saint-Empire romain germanique', es: 'Sacro Imperio Romano', it: 'Sacro Romano Impero', pt: 'Sacro Império Romano-Germânico', nl: 'Heilige Roomse Rijk', pl: 'Święte Cesarstwo Rzymskie', tr: 'Kutsal Roma İmparatorluğu', zh: '神圣罗马帝国', ja: '神聖ローマ帝国', ko: '신성 로마 제국', hi: 'पवित्र रोमन साम्राज्य', ar: 'الإمبراطورية الرومانية المقدسة'
    },
    'medieval-cities': {
      fr: 'Villes médiévales, Hanse et principautés', es: 'Ciudades medievales, Hansa y principados', it: 'Città medievali, Lega anseatica e principati', pt: 'Cidades medievais, Hansa e principados', nl: 'Middeleeuwse steden, Hanze en vorstendommen', pl: 'Średniowieczne miasta, Hanza i księstwa', tr: 'Ortaçağ şehirleri, Hansa ve prenslikler', zh: '中世纪城市、汉萨同盟与诸侯国', ja: '中世都市・ハンザ同盟・諸侯領', ko: '중세 도시, 한자 동맹과 제후국', hi: 'मध्यकालीन शहर, हैंसा और रियासतें', ar: 'مدن العصور الوسطى والهَنزا والإمارات'
    },
    reformation: {
      fr: 'Réforme', es: 'Reforma', it: 'Riforma', pt: 'Reforma', nl: 'Reformatie', pl: 'Reformacja', tr: 'Reformasyon', zh: '宗教改革', ja: '宗教改革', ko: '종교개혁', hi: 'धर्मसुधार', ar: 'الإصلاح الديني'
    },
    'thirty-years-war': {
      fr: 'Guerre de Trente Ans', es: 'Guerra de los Treinta Años', it: 'Guerra dei Trent’anni', pt: 'Guerra dos Trinta Anos', nl: 'Dertigjarige Oorlog', pl: 'Wojna trzydziestoletnia', tr: 'Otuz Yıl Savaşı', zh: '三十年战争', ja: '三十年戦争', ko: '30년 전쟁', hi: 'तीस वर्षीय युद्ध', ar: 'حرب الثلاثين عامًا'
    },
    'prussia-enlightenment': {
      fr: 'Prusse et Lumières', es: 'Prusia y la Ilustración', it: 'Prussia e Illuminismo', pt: 'Prússia e Iluminismo', nl: 'Pruisen en Verlichting', pl: 'Prusy i Oświecenie', tr: 'Prusya ve Aydınlanma', zh: '普鲁士与启蒙运动', ja: 'プロイセンと啓蒙主義', ko: '프로이센과 계몽주의', hi: 'प्रशा और प्रबोधन', ar: 'بروسيا والتنوير'
    },
    'napoleonic-era': {
      fr: 'Époque napoléonienne', es: 'Época napoleónica', it: 'Età napoleonica', pt: 'Era napoleônica', nl: 'Napoleontische tijd', pl: 'Epoka napoleońska', tr: 'Napolyon dönemi', zh: '拿破仑时代', ja: 'ナポレオン時代', ko: '나폴레옹 시대', hi: 'नेपोलियन युग', ar: 'العصر النابليوني'
    },
    'revolutions-1848': {
      fr: 'Révolutions de 1848', es: 'Revoluciones de 1848', it: 'Rivoluzioni del 1848', pt: 'Revoluções de 1848', nl: 'Revoluties van 1848', pl: 'Rewolucje 1848 roku', tr: '1848 Devrimleri', zh: '1848年革命', ja: '1848年革命', ko: '1848년 혁명', hi: '1848 की क्रांतियाँ', ar: 'ثورات 1848'
    },
    unification: {
      fr: 'Unification de l’Allemagne', es: 'Unificación de Alemania', it: 'Unificazione della Germania', pt: 'Unificação da Alemanha', nl: 'Duitse eenwording', pl: 'Zjednoczenie Niemiec', tr: 'Almanya’nın birleşmesi', zh: '德国统一', ja: 'ドイツ統一', ko: '독일 통일', hi: 'जर्मनी का एकीकरण', ar: 'توحيد ألمانيا'
    },
    'german-empire': {
      fr: 'Empire allemand', es: 'Imperio alemán', it: 'Impero tedesco', pt: 'Império Alemão', nl: 'Duitse Keizerrijk', pl: 'Cesarstwo Niemieckie', tr: 'Alman İmparatorluğu', zh: '德意志帝国', ja: 'ドイツ帝国', ko: '독일 제국', hi: 'जर्मन साम्राज्य', ar: 'الإمبراطورية الألمانية'
    },
    weimar: {
      fr: 'République de Weimar', es: 'República de Weimar', it: 'Repubblica di Weimar', pt: 'República de Weimar', nl: 'Weimarrepubliek', pl: 'Republika Weimarska', tr: 'Weimar Cumhuriyeti', zh: '魏玛共和国', ja: 'ヴァイマル共和国', ko: '바이마르 공화국', hi: 'वाइमर गणराज्य', ar: 'جمهورية فايمار'
    },
    'nazi-ww2': {
      fr: 'Dictature nazie et Seconde Guerre mondiale', es: 'Dictadura nazi y Segunda Guerra Mundial', it: 'Dittatura nazista e Seconda guerra mondiale', pt: 'Ditadura nazista e Segunda Guerra Mundial', nl: 'Nazidictatuur en Tweede Wereldoorlog', pl: 'Dyktatura nazistowska i II wojna światowa', tr: 'Nazi diktatörlüğü ve İkinci Dünya Savaşı', zh: '纳粹独裁与第二次世界大战', ja: 'ナチ独裁と第二次世界大戦', ko: '나치 독재와 제2차 세계대전', hi: 'नाज़ी तानाशाही और द्वितीय विश्व युद्ध', ar: 'الديكتاتورية النازية والحرب العالمية الثانية'
    },
    'divided-germany': {
      fr: 'Allemagne divisée', es: 'Alemania dividida', it: 'Germania divisa', pt: 'Alemanha dividida', nl: 'Verdeeld Duitsland', pl: 'Podzielone Niemcy', tr: 'Bölünmüş Almanya', zh: '分裂的德国', ja: '分断されたドイツ', ko: '분단된 독일', hi: 'विभाजित जर्मनी', ar: 'ألمانيا المقسمة'
    },
    reunification: {
      fr: 'Réunification', es: 'Reunificación', it: 'Riunificazione', pt: 'Reunificação', nl: 'Hereniging', pl: 'Zjednoczenie', tr: 'Yeniden birleşme', zh: '重新统一', ja: '再統一', ko: '재통일', hi: 'पुनर्एकीकरण', ar: 'إعادة التوحيد'
    },
    'berlin-republic': {
      fr: 'Allemagne contemporaine / République de Berlin', es: 'Alemania contemporánea / República de Berlín', it: 'Germania contemporanea / Repubblica di Berlino', pt: 'Alemanha contemporânea / República de Berlim', nl: 'Modern Duitsland / Berlijnse Republiek', pl: 'Współczesne Niemcy / Republika Berlińska', tr: 'Modern Almanya / Berlin Cumhuriyeti', zh: '现代德国 / 柏林共和国', ja: '現代ドイツ / ベルリン共和国', ko: '현대 독일 / 베를린 공화국', hi: 'आधुनिक जर्मनी / बर्लिन गणराज्य', ar: 'ألمانيا الحديثة / جمهورية برلين'
    }
  };

  Object.keys(extraUi).forEach(function(lang) {
    window.HISTORY_ATLAS_UI[lang] = Object.assign({}, window.HISTORY_ATLAS_UI.en, extraUi[lang]);
  });

  periods.forEach(function(period) {
    const titlePack = periodTitleTranslations[period.id];
    if (!titlePack) return;
    Object.keys(titlePack).forEach(function(lang) {
      period.title[lang] = titlePack[lang];
    });
  });

  const summaryTranslations = {
    fr: {
      'tribes-rome': 'Rome voyait les terres au-delà du Rhin comme une frontière dangereuse mais importante. Les peuples germaniques formaient un monde d’alliances, de guerres, de commerce et d’échanges culturels.',
      'franks-carolingians': 'Après la chute de l’Empire romain d’Occident, les Francs devinrent la force principale de l’Europe occidentale. L’empire de Charlemagne prépara l’héritage dont sortirent plus tard la France et l’Allemagne.',
      'holy-roman-empire': 'L’Allemagne médiévale se développa dans un empire complexe de princes, d’évêques, de villes et d’empereurs, avec de puissants centres régionaux.',
      'medieval-cities': 'Les villes devinrent des laboratoires du commerce, du droit et des métiers. La Hanse relia la Baltique et la mer du Nord, tandis que les principautés renforçaient la mosaïque régionale.',
      reformation: 'La Réforme commença comme un débat théologique, mais transforma la politique, l’éducation, l’imprimerie et la vie quotidienne.',
      'thirty-years-war': 'La guerre commença en Bohême et devint une catastrophe européenne. Les terres allemandes connurent destruction, recul démographique et traumatisme durable.',
      'prussia-enlightenment': 'Après la paix de Westphalie, les États territoriaux se renforcèrent. Le Brandebourg-Prusse devint une puissance militaire et administrative, tandis que les Lumières changèrent les idées du droit et de l’État.',
      'napoleonic-era': 'L’époque napoléonienne bouleversa l’ordre impérial, supprima de nombreux petits territoires et apporta réformes, droit français et nouveaux États.',
      'revolutions-1848': 'Les révolutions de 1848 furent le moment où le rêve libéral et national faillit devenir réalité politique.',
      unification: 'L’unification se fit par les guerres, la diplomatie et la puissance prussienne. En 1871, l’Empire allemand fut proclamé à Versailles.',
      'german-empire': 'L’Empire devint une puissance industrielle, scientifique et militaire, mais sa croissance s’accompagna de conflits sociaux, de colonialisme et de tensions diplomatiques.',
      weimar: 'La première démocratie allemande naquit après la défaite de guerre. Elle apporta droits nouveaux et culture moderne, mais resta fragilisée par les crises et la violence.',
      'nazi-ww2': 'La dictature nazie détruisit la démocratie, déclencha la guerre et commit la Shoah, catastrophe centrale de l’histoire allemande et européenne du XXe siècle.',
      'divided-germany': 'Après 1945, l’Allemagne devint une frontière de la guerre froide. La RFA et la RDA évoluèrent dans des systèmes opposés, et le mur de Berlin symbolisa la division.',
      reunification: 'La révolution pacifique en RDA, la chute du mur de Berlin et la diplomatie Deux plus Quatre ouvrirent la voie à l’unité allemande.',
      'berlin-republic': 'Après la réunification, l’Allemagne devint la première économie de l’UE et un centre de la politique européenne, avec de nouveaux débats sur l’énergie, la migration et la sécurité.'
    },
    es: {
      'tribes-rome': 'Roma veía las tierras más allá del Rin como una frontera peligrosa pero importante. Los pueblos germánicos formaban un mundo de alianzas, guerras, comercio e intercambio cultural.',
      'franks-carolingians': 'Tras la caída del Imperio romano de Occidente, los francos se convirtieron en la principal fuerza de Europa occidental. El imperio de Carlomagno preparó la herencia de Francia y Alemania.',
      'holy-roman-empire': 'La Alemania medieval se desarrolló dentro de un imperio complejo de príncipes, obispos, ciudades y emperadores, con fuertes centros regionales.',
      'medieval-cities': 'Las ciudades fueron laboratorios de comercio, derecho y oficios. La Hansa unió el Báltico y el mar del Norte, mientras los principados reforzaban el mosaico regional.',
      reformation: 'La Reforma comenzó como una disputa teológica, pero cambió la política, la educación, la imprenta y la vida cotidiana.',
      'thirty-years-war': 'La guerra empezó en Bohemia y se convirtió en una catástrofe europea. Las tierras alemanas sufrieron destrucción, pérdida de población y trauma profundo.',
      'prussia-enlightenment': 'Tras Westfalia crecieron los Estados territoriales. Brandeburgo-Prusia se convirtió en una potencia militar y administrativa, mientras la Ilustración transformaba ideas de derecho y Estado.',
      'napoleonic-era': 'La época napoleónica rompió el viejo orden imperial, eliminó muchos pequeños territorios y trajo reformas, derecho francés y nuevos Estados.',
      'revolutions-1848': 'Las revoluciones de 1848 fueron el momento en que el sueño liberal y nacional casi se convirtió en realidad política.',
      unification: 'La unificación llegó mediante guerras, diplomacia y poder prusiano. En 1871 se proclamó el Imperio alemán en Versalles.',
      'german-empire': 'El Imperio se convirtió en una potencia industrial, científica y militar, pero su crecimiento convivió con conflictos sociales, colonialismo y tensión diplomática.',
      weimar: 'La primera democracia alemana nació tras la derrota en la guerra. Trajo nuevos derechos y cultura moderna, pero quedó debilitada por crisis y violencia.',
      'nazi-ww2': 'La dictadura nazi destruyó la democracia, desató la guerra y cometió el Holocausto, catástrofe central de la historia alemana y europea del siglo XX.',
      'divided-germany': 'Después de 1945, Alemania fue una frontera de la Guerra Fría. La RFA y la RDA evolucionaron en sistemas opuestos, y el Muro de Berlín simbolizó la división.',
      reunification: 'La revolución pacífica en la RDA, la caída del Muro de Berlín y la diplomacia Dos más Cuatro abrieron el camino a la unidad alemana.',
      'berlin-republic': 'Tras la reunificación, Alemania se convirtió en la mayor economía de la UE y en un centro de la política europea, con nuevos debates sobre energía, migración y seguridad.'
    },
    it: {
      'tribes-rome': 'Roma vedeva le terre oltre il Reno come una frontiera pericolosa ma importante. I popoli germanici erano un mondo di alleanze, guerre, commercio e scambi culturali.',
      'franks-carolingians': 'Dopo la caduta dell’Impero romano d’Occidente, i Franchi divennero la forza principale dell’Europa occidentale. L’impero di Carlo Magno preparò l’eredità da cui nacquero Francia e Germania.',
      'holy-roman-empire': 'La Germania medievale si sviluppò in un impero complesso di principi, vescovi, città e imperatori, con forti centri regionali.',
      'medieval-cities': 'Le città divennero laboratori di commercio, diritto e mestieri. La Lega anseatica collegò Baltico e Mare del Nord, mentre i principati rafforzarono il mosaico regionale.',
      reformation: 'La Riforma iniziò come disputa teologica, ma cambiò politica, istruzione, stampa e vita quotidiana.',
      'thirty-years-war': 'La guerra iniziò in Boemia e divenne una catastrofe europea. Le terre tedesche subirono distruzione, calo demografico e trauma profondo.',
      'prussia-enlightenment': 'Dopo Westfalia gli Stati territoriali si rafforzarono. Brandeburgo-Prussia divenne una potenza militare e amministrativa, mentre l’Illuminismo cambiò le idee di diritto e Stato.',
      'napoleonic-era': 'L’età napoleonica spezzò il vecchio ordine imperiale, eliminò molti piccoli territori e portò riforme, diritto francese e nuovi Stati.',
      'revolutions-1848': 'Le rivoluzioni del 1848 furono il momento in cui il sogno liberale e nazionale quasi divenne realtà politica.',
      unification: 'L’unificazione avvenne attraverso guerre, diplomazia e potere prussiano. Nel 1871 l’Impero tedesco fu proclamato a Versailles.',
      'german-empire': 'L’Impero divenne una potenza industriale, scientifica e militare, ma la crescita fu accompagnata da conflitti sociali, colonialismo e tensioni diplomatiche.',
      weimar: 'La prima democrazia tedesca nacque dopo la sconfitta in guerra. Portò nuovi diritti e cultura moderna, ma fu indebolita da crisi e violenza.',
      'nazi-ww2': 'La dittatura nazista distrusse la democrazia, scatenò la guerra e commise l’Olocausto, catastrofe centrale della storia tedesca ed europea del Novecento.',
      'divided-germany': 'Dopo il 1945 la Germania divenne una frontiera della Guerra fredda. RFT e RDT si svilupparono in sistemi opposti, e il Muro di Berlino divenne il simbolo della divisione.',
      reunification: 'La rivoluzione pacifica nella RDT, la caduta del Muro di Berlino e la diplomazia Due più Quattro aprirono la strada all’unità tedesca.',
      'berlin-republic': 'Dopo la riunificazione la Germania divenne la maggiore economia dell’UE e un centro della politica europea, con nuovi dibattiti su energia, migrazione e sicurezza.'
    }
  };

  periods.forEach(function(period) {
    Object.keys(summaryTranslations).forEach(function(lang) {
      if (summaryTranslations[lang][period.id]) {
        period.summary[lang] = summaryTranslations[lang][period.id];
      }
    });
  });

  const fullTextTranslations = {
    fr: {
      'tribes-rome': {
        body: [
          'Pour comprendre les débuts de l’histoire allemande, il ne faut pas imaginer les Germains comme une nation déjà formée. C’étaient des tribus et des confédérations différentes, vivant entre le Rhin, l’Elbe, le Danube et la Baltique. Les Romains commerçaient avec eux, recrutaient des guerriers, construisaient des fortifications et craignaient en même temps cette frontière instable.',
          'L’influence romaine se voyait dans les routes, les monnaies, les armes, les objets de luxe et le service militaire. La victoire d’Arminius devint plus tard un symbole de résistance, mais la réalité était plus complexe : certains chefs germaniques coopéraient avec Rome, d’autres la combattaient, et les frontières changeaient sans cesse.'
        ],
        highlights: [
          'Le Rhin et le Danube devinrent des lignes majeures de contact avec Rome.',
          'La bataille de la forêt de Teutobourg arrêta l’expansion romaine vers l’est.',
          'La mémoire d’Arminius devint plus tard une partie de la mythologie nationale allemande.'
        ]
      },
      'franks-carolingians': {
        body: [
          'Le royaume franc devint un pont entre la Rome antique et l’Europe médiévale. Il hérita de l’Église latine, d’une partie de la culture administrative romaine et de l’énergie militaire des élites germaniques.',
          'L’empire carolingien était vaste, mais il reposait sur le pouvoir personnel, les donations de terres et l’alliance avec l’Église. Après les partages successoraux, les parties occidentale et orientale suivirent des chemins différents, préparant progressivement la France et l’Allemagne futures.'
        ],
        highlights: [
          'Le baptême de Clovis lia les Francs au christianisme latin.',
          'Charlemagne agrandit l’empire et réforma l’administration et l’éducation.',
          'Le partage de 843 fut une étape importante vers la tradition est-franque, puis allemande.'
        ]
      },
      'holy-roman-empire': {
        body: [
          'Le Saint-Empire romain germanique n’était pas un État au sens moderne. L’empereur avait du prestige, mais le pouvoir était partagé avec les princes, les évêques, les villes et les princes-électeurs. L’histoire allemande se développa donc longtemps comme l’histoire de nombreux centres.',
          'Cette fragmentation rendait difficile une politique unique, mais créait une carte culturelle riche : villes impériales, territoires ecclésiastiques, principautés, universités et routes commerciales. L’Allemagne n’était pas une capitale unique, mais un ensemble de mondes régionaux.'
        ],
        highlights: [
          'Otton Ier lia la royauté à l’idée impériale.',
          'Les princes et les villes gagnèrent une grande autonomie.',
          'L’Empire resta le cadre de l’histoire allemande pendant près de neuf siècles.'
        ]
      },
      'medieval-cities': {
        body: [
          'Les villes médiévales changèrent la vie plus profondément qu’il n’y paraît. On y vit naître des corporations, des marchés, des conseils urbains et des droits municipaux. Les citadins apprirent à négocier, défendre leurs murs et commercer bien au-delà de leur région.',
          'La Hanse devint un réseau commercial du Nord, où des villes allemandes reliaient la Baltique, la mer du Nord, la Scandinavie, la Rus’ et l’Angleterre. Ce n’était pas un empire, mais une alliance d’intérêts, d’argent, de navires et de privilèges.'
        ],
        highlights: [
          'Lübeck, Hambourg et Brême devinrent d’importants centres hanséatiques.',
          'Le droit urbain renforça l’autonomie municipale.',
          'La fragmentation allemande fut à la fois une faiblesse et une source de diversité culturelle.'
        ]
      },
      reformation: {
        body: [
          'La Réforme ne transforma pas seulement l’Église. Elle accéléra l’alphabétisation, renforça le rôle de l’imprimé et donna aux princes un nouvel outil d’autonomie politique. Les terres allemandes devinrent un champ de conflit autour de la foi, du pouvoir et de la conscience.',
          'La traduction de la Bible par Luther influença la langue littéraire allemande. Mais la Réforme provoqua aussi des conflits : guerre des paysans, affrontements entre princes et empereur, puis longue division confessionnelle.'
        ],
        highlights: [
          'Luther s’opposa aux indulgences et à l’autorité de Rome.',
          'L’imprimerie accéléra la diffusion des idées nouvelles.',
          'La Réforme transforma les écoles, le culte et les alliances politiques.'
        ]
      },
      'thirty-years-war': {
        body: [
          'La guerre de Trente Ans fut l’une des pages les plus destructrices de l’histoire allemande. Les armées traversaient plusieurs fois les mêmes territoires, levaient des contributions, brûlaient des villages et laissaient derrière elles famine et épidémies.',
          'La paix de Westphalie ne créa pas l’unité allemande, mais confirma l’autonomie de nombreux territoires. Pour l’Europe, elle devint le symbole d’une nouvelle diplomatie, où l’équilibre des puissances comptait davantage que le rêve d’un empire universel.'
        ],
        highlights: [
          'Le conflit confessionnel se mêla à la politique des grandes puissances.',
          'La paix de Westphalie fonda un nouvel ordre européen.',
          'La mémoire de la guerre marqua longtemps la culture politique allemande.'
        ]
      },
      'prussia-enlightenment': {
        body: [
          'La Prusse se construisit comme un État de discipline : armée, fonctionnaires, impôts et école servaient le renforcement de la monarchie. Mais à côté de ce système strict se développaient science, musique, philosophie et idées de gouvernement éclairé.',
          'Frédéric II devint un symbole ambivalent de l’époque : chef militaire et protecteur de la culture, praticien froid du pouvoir et admirateur de la philosophie. C’est alors que la rivalité entre l’Autriche et la Prusse devint la question centrale de la politique allemande.'
        ],
        highlights: [
          'La Prusse passa d’une puissance régionale à une force européenne.',
          'Frédéric II combina politique militaire et image de souverain éclairé.',
          'Kant formula l’un des grands mots d’ordre des Lumières : penser par soi-même.'
        ]
      },
      'napoleonic-era': {
        body: [
          'L’époque napoléonienne détruisit l’ancienne enveloppe impériale. De nombreux petits territoires disparurent, de nouveaux États et des réformes apparurent, et le droit français influença fortement les terres allemandes occidentales.',
          'La défaite prussienne fut un choc, mais elle poussa aussi à réformer l’armée, l’éducation et l’autonomie locale. Les guerres de libération créèrent un nouveau langage du patriotisme, qui alimenta plus tard l’idée d’unité.'
        ],
        highlights: [
          'Le Saint-Empire romain germanique prit fin en 1806.',
          'Les réformes modifièrent l’administration, l’armée et le droit.',
          'Les guerres contre Napoléon renforcèrent le sentiment national.'
        ]
      },
      'revolutions-1848': {
        body: [
          'Les révolutions de 1848 furent le moment où le rêve libéral et national faillit devenir réalité politique. Les députés réunis à Francfort discutèrent des droits civiques, de l’ordre constitutionnel et des frontières d’une future Allemagne.',
          'La faiblesse principale de la révolution était sa dépendance envers les monarchies et les armées. Lorsque le roi de Prusse refusa une couronne “venue des mains du peuple”, le projet d’unité parlementaire s’effondra, mais son souvenir demeura.'
        ],
        highlights: [
          'Le Parlement de Francfort voulut créer une Allemagne constitutionnelle.',
          'Le noir-rouge-or devint un symbole de liberté et d’unité.',
          'L’échec de 1848 laissa malgré tout un héritage politique durable.'
        ]
      },
      unification: {
        body: [
          'L’unification ne vint pas du parlement de 1848, mais des guerres, de la diplomatie et de la puissance prussienne. Les conflits contre le Danemark, l’Autriche et la France changèrent l’équilibre politique en Europe centrale.',
          'Bismarck utilisa la politique de puissance pour créer un État national sous direction prussienne. En 1871, l’Empire allemand fut proclamé à Versailles, mais l’Autriche resta en dehors du nouvel État.'
        ],
        highlights: [
          'Les guerres contre le Danemark, l’Autriche et la France changèrent l’équilibre des forces.',
          'Bismarck créa l’unité sous direction prussienne.',
          'L’unification exclut l’Autriche du nouvel État allemand.'
        ]
      },
      'german-empire': {
        body: [
          'L’Empire allemand devint rapidement une puissance industrielle et scientifique. Les chemins de fer, l’acier, la chimie, les universités et les grandes villes changèrent le rythme de la société.',
          'Mais cette modernisation s’accompagna de fortes tensions : question ouvrière, politiques antisocialistes, colonialisme, nationalisme et politique mondiale risquée. L’essor allemand inquiéta aussi les autres puissances européennes.'
        ],
        highlights: [
          'L’Allemagne devint l’une des principales économies industrielles du monde.',
          'La social-démocratie et le mouvement ouvrier grandirent rapidement.',
          'La Weltpolitik de Guillaume II accentua les tensions internationales.'
        ]
      },
      weimar: {
        body: [
          'La République de Weimar ne fut pas seulement une crise. Elle apporta le droit de vote des femmes, de nouveaux droits sociaux, l’avant-garde, la radio, le cinéma, le design et une vie urbaine intense.',
          'Mais la démocratie naquit dans la défaite, l’inflation et la violence politique. Ses ennemis se trouvaient à droite comme à gauche, et l’effondrement économique après 1929 rendit les compromis de plus en plus difficiles.'
        ],
        highlights: [
          'La Constitution garantit des droits démocratiques.',
          'Berlin devint un centre de modernisme, de cinéma et de cabaret.',
          'La Grande Dépression détruisit une stabilité fragile.'
        ]
      },
      'nazi-ww2': {
        body: [
          'Cette époque doit être montrée sans romantisation. Le régime nazi construisit sa dictature par la terreur, la propagande, la destruction de l’État de droit et l’exclusion de groupes entiers de la société.',
          'La guerre et la Shoah furent le résultat d’une idéologie de racisme, d’expansion et de violence. Pour l’Allemagne contemporaine, la mémoire de cette catastrophe fonde la responsabilité politique, l’éducation et le rapport à la démocratie.'
        ],
        highlights: [
          '1933 marqua le début de la dictature et des persécutions.',
          'La guerre détruisit l’Europe et coûta la vie à des millions de personnes.',
          'La Shoah reste le centre moral de la mémoire du nazisme.'
        ]
      },
      'divided-germany': {
        body: [
          'La division de l’Allemagne ne fut pas seulement géopolitique : elle devint une expérience quotidienne. Les gens vivaient avec des passeports, des médias, des écoles, des armées, des économies et des visions de l’avenir différentes.',
          'La RFA s’intégra progressivement aux alliances occidentales et à l’Europe. La RDA développa une identité socialiste propre, mais dépendait du contrôle, des frontières et de l’appareil de sécurité. Le mur de Berlin devint l’image la plus forte de cet ordre.'
        ],
        highlights: [
          'La RFA construisit une démocratie parlementaire et une économie sociale de marché.',
          'La RDA était un État socialiste sous influence soviétique.',
          'Le mur de Berlin divisa des familles, une ville et l’Europe.'
        ]
      },
      reunification: {
        body: [
          'La réunification ne fut pas un cadeau soudain, mais le résultat de la pression d’en bas, de la crise de la RDA, de la perestroïka soviétique et d’une diplomatie rapide. Les habitants de Leipzig, Berlin et d’autres villes rendirent l’ancien ordre impossible.',
          'Après 1990 commença une intégration difficile : privatisations, chômage, transfert d’institutions, débats sur la mémoire et les inégalités. L’unité est donc à la fois une fête et un long processus social.'
        ],
        highlights: [
          'Les manifestations de Leipzig montrèrent la force du mouvement civique.',
          'Le mur de Berlin tomba le 9 novembre 1989.',
          'La réunification mit fin à la division allemande d’après-guerre.'
        ]
      },
      'berlin-republic': {
        body: [
          'La République de Berlin désigne l’Allemagne après le retour de la capitale à Berlin et l’adoption d’un nouveau rôle en Europe. Elle ne vit plus seulement de la question de l’unité, mais les différences entre l’Est et l’Ouest y ramènent régulièrement.',
          'L’ère Merkel donna une image de stabilité, mais laissa des sujets controversés : dépendance énergétique, migration, infrastructures, défense et numérisation. Depuis 2022, l’Allemagne réévalue de nouveau son rôle dans la sécurité européenne.'
        ],
        highlights: [
          'Berlin redevint capitale et centre politique.',
          'L’intégration européenne devint un cadre central de la politique allemande.',
          'L’Allemagne contemporaine débat de mémoire, migration, énergie, sécurité et rôle mondial.'
        ]
      }
    }
  };

  periods.forEach(function(period) {
    Object.keys(fullTextTranslations).forEach(function(lang) {
      const patch = fullTextTranslations[lang][period.id];
      if (!patch) return;
      if (patch.body) {
        period.body = period.body || {};
        period.body[lang] = patch.body;
      }
      if (patch.highlights) {
        period.highlights = period.highlights || {};
        period.highlights[lang] = patch.highlights;
      }
    });
  });
})();
