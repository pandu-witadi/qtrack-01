"use strict";(self.webpackChunkplanka_client=self.webpackChunkplanka_client||[]).push([[467],{9467:(e,t,r)=>{r.d(t,{default:()=>g});var a={lessThanXSeconds:{one:"mindre end \xe9t sekund",other:"mindre end {{count}} sekunder"},xSeconds:{one:"1 sekund",other:"{{count}} sekunder"},halfAMinute:"\xe9t halvt minut",lessThanXMinutes:{one:"mindre end \xe9t minut",other:"mindre end {{count}} minutter"},xMinutes:{one:"1 minut",other:"{{count}} minutter"},aboutXHours:{one:"cirka 1 time",other:"cirka {{count}} timer"},xHours:{one:"1 time",other:"{{count}} timer"},xDays:{one:"1 dag",other:"{{count}} dage"},aboutXWeeks:{one:"cirka 1 uge",other:"cirka {{count}} uger"},xWeeks:{one:"1 uge",other:"{{count}} uger"},aboutXMonths:{one:"cirka 1 m\xe5ned",other:"cirka {{count}} m\xe5neder"},xMonths:{one:"1 m\xe5ned",other:"{{count}} m\xe5neder"},aboutXYears:{one:"cirka 1 \xe5r",other:"cirka {{count}} \xe5r"},xYears:{one:"1 \xe5r",other:"{{count}} \xe5r"},overXYears:{one:"over 1 \xe5r",other:"over {{count}} \xe5r"},almostXYears:{one:"n\xe6sten 1 \xe5r",other:"n\xe6sten {{count}} \xe5r"}};const n=function(e,t,r){var n,i=a[e];return n="string"===typeof i?i:1===t?i.one:i.other.replace("{{count}}",String(t)),null!==r&&void 0!==r&&r.addSuffix?r.comparison&&r.comparison>0?"om "+n:n+" siden":n};var i=r(6840);const o={date:(0,i.Z)({formats:{full:"EEEE 'den' d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd/MM/y"},defaultWidth:"full"}),time:(0,i.Z)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,i.Z)({formats:{full:"{{date}} 'kl'. {{time}}",long:"{{date}} 'kl'. {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};var d={lastWeek:"'sidste' eeee 'kl.' p",yesterday:"'i g\xe5r kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"'p\xe5' eeee 'kl.' p",other:"P"};const l=function(e,t,r,a){return d[e]};var s=r(7325);const m={ordinalNumber:function(e,t){return Number(e)+"."},era:(0,s.Z)({values:{narrow:["fvt","vt"],abbreviated:["f.v.t.","v.t."],wide:["f\xf8r vesterlandsk tidsregning","vesterlandsk tidsregning"]},defaultWidth:"wide"}),quarter:(0,s.Z)({values:{narrow:["1","2","3","4"],abbreviated:["1. kvt.","2. kvt.","3. kvt.","4. kvt."],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,s.Z)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mar.","apr.","maj","jun.","jul.","aug.","sep.","okt.","nov.","dec."],wide:["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"]},defaultWidth:"wide"}),day:(0,s.Z)({values:{narrow:["S","M","T","O","T","F","L"],short:["s\xf8","ma","ti","on","to","fr","l\xf8"],abbreviated:["s\xf8n.","man.","tir.","ons.","tor.","fre.","l\xf8r."],wide:["s\xf8ndag","mandag","tirsdag","onsdag","torsdag","fredag","l\xf8rdag"]},defaultWidth:"wide"}),dayPeriod:(0,s.Z)({values:{narrow:{am:"a",pm:"p",midnight:"midnat",noon:"middag",morning:"morgen",afternoon:"eftermiddag",evening:"aften",night:"nat"},abbreviated:{am:"AM",pm:"PM",midnight:"midnat",noon:"middag",morning:"morgen",afternoon:"eftermiddag",evening:"aften",night:"nat"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnat",noon:"middag",morning:"morgen",afternoon:"eftermiddag",evening:"aften",night:"nat"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"midnat",noon:"middag",morning:"om morgenen",afternoon:"om eftermiddagen",evening:"om aftenen",night:"om natten"},abbreviated:{am:"AM",pm:"PM",midnight:"midnat",noon:"middag",morning:"om morgenen",afternoon:"om eftermiddagen",evening:"om aftenen",night:"om natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnat",noon:"middag",morning:"om morgenen",afternoon:"om eftermiddagen",evening:"om aftenen",night:"om natten"}},defaultFormattingWidth:"wide"})};var u=r(6884);const g={dateFns:{code:"da",formatDistance:n,formatLong:o,formatRelative:l,localize:m,match:{ordinalNumber:(0,r(586).Z)({matchPattern:/^(\d+)(\.)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,u.Z)({matchPatterns:{narrow:/^(fKr|fvt|eKr|vt)/i,abbreviated:/^(f\.Kr\.?|f\.v\.t\.?|e\.Kr\.?|v\.t\.)/i,wide:/^(f.Kr.|f\xf8r vesterlandsk tidsregning|e.Kr.|vesterlandsk tidsregning)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^f/i,/^(v|e)/i]},defaultParseWidth:"any"}),quarter:(0,u.Z)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234]. kvt\./i,wide:/^[1234]\.? kvartal/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,u.Z)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan.|feb.|mar.|apr.|maj|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,wide:/^(januar|februar|marts|april|maj|juni|juli|august|september|oktober|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,u.Z)({matchPatterns:{narrow:/^[smtofl]/i,short:/^(s\xf8n.|man.|tir.|ons.|tor.|fre.|l\xf8r.)/i,abbreviated:/^(s\xf8n|man|tir|ons|tor|fre|l\xf8r)/i,wide:/^(s\xf8ndag|mandag|tirsdag|onsdag|torsdag|fredag|l\xf8rdag)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^o/i,/^t/i,/^f/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},defaultParseWidth:"any"}),dayPeriod:(0,u.Z)({matchPatterns:{narrow:/^(a|p|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i,any:/^([ap]\.?\s?m\.?|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/midnat/i,noon:/middag/i,morning:/morgen/i,afternoon:/eftermiddag/i,evening:/aften/i,night:/nat/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:4}},format:{date:"d/M/yyyy",time:"p",dateTime:"$t(format:date) $t(format:time)",longDate:"MMM d",longDateTime:"MMMM d 'at' p",fullDate:"MMM d, y",fullDateTime:"MMMM d, y 'a' p"},translation:{common:{account:"Konto",actions:"Handlinger",addAttachment_title:"Vedh\xe6ft fil",addComment:"Skriv kommentar",addManager_title:"Tilf\xf8j projektleder",addMember_title:"Tilf\xf8j medlem",addUser_title:"Tilf\xf8j bruger",administrator:"Administrator",all:"Alle",allChangesWillBeAutomaticallySavedAfterConnectionRestored:"Alle \xe6ndringer vil automatisk blive gemt<br />ved genforbindelse.",areYouSureYouWantToDeleteThisAttachment:"Vil du slette den vedh\xe6ftede fil?",areYouSureYouWantToDeleteThisBoard:"Vil du slette dette br\xe6t?",areYouSureYouWantToDeleteThisCard:"Vil du slette dette kort?",areYouSureYouWantToDeleteThisComment:"Vil du slette denne kommentar?",areYouSureYouWantToDeleteThisLabel:"Vil du slette dette m\xe6rkat?",areYouSureYouWantToDeleteThisList:"Vil du slette denne liste?",areYouSureYouWantToDeleteThisProject:"Vil du slette dette projekt?",areYouSureYouWantToDeleteThisTask:"Vil du slette denne opgave?",areYouSureYouWantToDeleteThisUser:"Vil du slette denne bruger?",areYouSureYouWantToLeaveBoard:"Vil du forlade dette br\xe6t?",areYouSureYouWantToLeaveProject:"Vil du forlade dette projekt?",areYouSureYouWantToRemoveThisManagerFromProject:"Vil du slette denne projektleder fra projektet?",areYouSureYouWantToRemoveThisMemberFromBoard:"Vil du slette dette medlem fra projektet?",attachment:"Vedh\xe6ftede fil",attachments:"Vedh\xe6ftede filer",authentication:"Brugervalidering",background:"Baggrundsbillede",board:"Br\xe6t",boardNotFound_title:"Br\xe6t ikke fundet",cardActions_title:"Korthandlinger",cardNotFound_title:"Kort ikke fundet",cardOrActionAreDeleted:"Kort eller handling er slettet.",color:"Farve",createBoard_title:"Opret br\xe6t",createLabel_title:"Opret m\xe6rkat",createNewOneOrSelectExistingOne:"Lav en ny eller marker<br />en eksisterende.",createProject_title:"Opret projekt",createTextFile_title:"Opret tekstfil",currentPassword:"Nuv\xe6rende l\xf8sen",dangerZone_title:"Farligt afsnit",date:"Dato",dueDate_title:"Afleveringsfrist",deleteAttachment_title:"Slet vedh\xe6ftning",deleteBoard_title:"Slet br\xe6t",deleteCard_title:"Slet kort",deleteComment_title:"Slet kommentar",deleteLabel_title:"Slet m\xe6rkat",deleteList_title:"Slet liste",deleteProject_title:"Slet projekt",deleteTask_title:"Slet opgave",deleteUser_title:"Slet bruger",description:"Beskrivelsen",dropFileToUpload:"Slip fil for at dele",editAttachment_title:"\xc6ndre vedh\xe6ftning",editAvatar_title:"\xc6ndre profilbillede",editBoard_title:"\xc6ndre br\xe6t",editDueDate_title:"\xc6ndre afleveringsfrist",editEmail_title:"\xc6ndre E-mail",editLabel_title:"\xe6ndre m\xe6rkat",editPassword_title:"\xc6ndre l\xf8sen",editStopwatch_title:"\xc6ndre timer",editUsername_title:"\xc6ndre brugernavn",email:"E-mail",emailAlreadyInUse:"E-mail allerede i brug",enterCardTitle:"Angiv kortets overskrift...",enterDescription:"Angiv beskrivelsen...",enterFilename:"Angiv filnavn",enterListTitle:"Angiv listens overskrift...",enterProjectTitle:"Angiv projektets titel",enterTaskDescription:"Angiv opgavens beskrivelse...",filterByLabels_title:"Filtrer p\xe5 m\xe6rkater",filterByMembers_title:"Filtrer p\xe5 medlemmer",fromComputer_title:"Fra computer",general:"Generelt",hours:"Timer",invalidCurrentPassword:"Nuv\xe6rende adgangskode are ugyldig",labels:"M\xe6rkater",leaveBoard_title:"Forlad br\xe6t",leaveProject_title:"Forlad projekt",list:"Liste",listActions_title:"Listens handlinger",managers:"Projektledere",members:"Medlemmer",minutes:"Minutter",moveCard_title:"Flyt kort",name:"Navn",newEmail:"Ny e-mail",newPassword:"Nyt l\xf8sen",newUsername:"Nyt brugernavn",noConnectionToServer:"Ingen forbindelse til serveren",noBoards:"Ingen br\xe6dder",noLists:"Ingen lister",noProjects:"Ingen projekter",notifications:"Notifikationer",noUnreadNotifications:"Ingen ul\xe6ste notifikationer.",openBoard_title:"\xc5ben br\xe6t",optional_inline:"valgfri",organization:"Organisation",phone:"Telefon",preferences:"Pr\xe6ferencer",pressPasteShortcutToAddAttachmentFromClipboard:"Tip: Tryk Ctrl-V (Cmd-V p\xe5 Mac) for at vedh\xe6fte direkte fra udklipsholder.",project:"Projekt",projectNotFound_title:"Projekt ej fundet",removeManager_title:"Fjern projektleder",removeMember_title:"Fjern medlem",seconds:"Sekunder",selectBoard:"V\xe6lg br\xe6t",selectList:"V\xe6lg liste",selectProject:"V\xe6lg projekt",settings:"Indstillinger",stopwatch:"Tidsm\xe5ler",subscribeToMyOwnCardsByDefault:"Abonn\xe9r p\xe5 egne kort som standard",taskActions_title:"Opgave handlinger",tasks:"Opgaver",time:"Tid",title:"Overskrift",userActions_title:"Brugerhandlinger",userAddedThisCardToList:"<0>{{user}}</0><1> tilf\xf8jede kortet til {{list}}</1>",userLeftNewCommentToCard:"{{user}} skrevet en ny kommentar \xab{{comment}}\xbb p\xe5 <2>{{card}}</2>",userMovedCardFromListToList:"{{user}} flyttede <2>{{card}}</2> fra {{fromList}} til {{toList}}",userMovedThisCardFromListToList:"<0>{{user}}</0><1> flyttede kortet fra {{fromList}} til {{toList}}</1>",username:"Brugernavn",usernameAlreadyInUse:"Brugernavn allerede i brug",users:"Brugere",writeComment:"Skriv en kommentar..."},action:{addAnotherCard:"Tilf\xf8j endnu et kort",addAnotherList:"Tilf\xf8j endnu en liste",addAnotherTask:"Tilf\xf8j endnu en opgave",addCard:"Tilf\xf8j kort",addCard_title:"Tilf\xf8j kort",addComment:"Tilf\xf8j kommentar",addList:"Tilf\xf8j liste",addMoreDetailedDescription:"Tilf\xf8j en uddybende beskrivelse",addTask:"Tilf\xf8j opgave",addToCard:"Tilf\xf8j til kort",addUser:"Tilf\xf8j bruger",createBoard:"Opret br\xe6t",createFile:"Opret fil",createLabel:"Opret m\xe6rkat",createNewLabel:"Opret nyt m\xe6rkat",createProject:"Opret projekt",delete:"Slet",deleteAttachment:"Slet vedh\xe6ftning",deleteAvatar:"Slet profilbillede",deleteBoard:"Slet br\xe6t",deleteCard:"Slet kort",deleteCard_title:"Slet kort",deleteComment:"Slet kommentar",deleteImage:"Slet profilbillede",deleteLabel:"Slet m\xe6rkat",deleteList:"Slet liste",deleteList_title:"Slet liste",deleteProject:"Slet projekt",deleteProject_title:"Slet projekt",deleteTask:"Slet opgave",deleteTask_title:"Slet opgave",deleteUser:"Slet bruger",edit:"\xc6ndre",editDueDate_title:"\xc6ndre afleveringsfrist",editDescription_title:"\xc6ndre beskrivelse",editEmail_title:"\xc6ndre e-mail",editPassword_title:"\xc6ndre L\xf8sen",editStopwatch_title:"\xc6ndre tidstager",editTitle_title:"\xc6ndre overskrift",editUsername_title:"\xc6ndre brugernavn",leaveBoard:"Forlad br\xe6t",leaveProject:"Forlad projekt",logOut_title:"Log p\xe5",makeCover_title:"G\xf8r til fremh\xe6vet billede",move:"Flyt",moveCard_title:"Flyt kort",remove:"Fjern",removeBackground:"Fjern baggrundsbillede",removeCover_title:"Fjern fremh\xe6vet billede",removeFromBoard:"Fjern fra br\xe6t",removeFromProject:"Fjern fra projekt",removeManager:"Fjern projektleder",removeMember:"Fjern medlem",save:"Gem \xe6ndringer",showAllAttachments:"Vis alle vedh\xe6ftninger ({{hidden}} skjulte)",showFewerAttachments:"Vis f\xe6rre vedh\xe6ftninger",start:"Start",stop:"Stop",subscribe:"Abonn\xe9r",unsubscribe:"Opsig abonnement",uploadNewAvatar:"Tilf\xf8j nyt profilbillede",uploadNewImage:"Tilf\xf8j nyt billede"}}}}}]);
//# sourceMappingURL=467.dbaf1ebf.chunk.js.map