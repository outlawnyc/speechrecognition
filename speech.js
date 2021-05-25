[Exposed=Window]
interface SpeechRecognition
 : EventTarget {
    constructor();

    // recognition parameters
    attribute SpeechGrammarList grammars;
    attribute DOMString lang;
    attribute boolean continuous;
    attribute boolean interimResults;
    attribute unsigned long maxAlternatives;

    // methods to drive the speech interaction
    undefined start();
    undefined stop();
    undefined abort();

    // event methods
    attribute EventHandler onaudiostart
;
    attribute EventHandler onsoundstart
;
    attribute EventHandler onspeechstart
;
    attribute EventHandler onspeechend
;
    attribute EventHandler onsoundend
;
    attribute EventHandler onaudioend
;
    attribute EventHandler onresult
;
    attribute EventHandler onnomatch
;
    attribute EventHandler onerror
;
    attribute EventHandler onstart
;
    attribute EventHandler onend
;
};

enum SpeechRecognitionErrorCode {
    "no-speech",
    "aborted",
    "audio-capture",
    "network",
    "not-allowed",
    "service-not-allowed",
    "bad-grammar",
    "language-not-supported"
};

[Exposed=Window]
interface SpeechRecognitionErrorEvent : Event {
    constructor
(DOMString type
, SpeechRecognitionErrorEventInit eventInitDict
);
    readonly attribute SpeechRecognitionErrorCode error;
    readonly attribute DOMString message;
};

dictionary SpeechRecognitionErrorEventInit : EventInit {
    required SpeechRecognitionErrorCode error
;
    DOMString message
 = "";
};

// Item in N-best list
[Exposed=Window]
interface SpeechRecognitionAlternative {
    readonly attribute DOMString transcript;
    readonly attribute float confidence;
};

// A complete one-shot simple response
[Exposed=Window]
interface SpeechRecognitionResult {
    readonly attribute unsigned long length;
    getter SpeechRecognitionAlternative item(unsigned long index
);
    readonly attribute boolean isFinal;
};

// A collection of responses (used in continuous mode)
[Exposed=Window]
interface SpeechRecognitionResultList {
    readonly attribute unsigned long length;
    getter SpeechRecognitionResult item(unsigned long index
);
};

// A full response, which could be interim or final, part of a continuous response or not
[Exposed=Window]
interface SpeechRecognitionEvent : Event {
    constructor(DOMString type
, SpeechRecognitionEventInit eventInitDict);
    readonly attribute unsigned long resultIndex;
    readonly attribute SpeechRecognitionResultList results;
};

dictionary SpeechRecognitionEventInit : EventInit {
    unsigned long resultIndex
 = 0;
    required SpeechRecognitionResultList results
;
};

// The object representing a speech grammar
[Exposed=Window]
interface SpeechGrammar {
    attribute DOMString src;
    attribute float weight;
};

// The object representing a speech grammar collection
[Exposed=Window]
interface SpeechGrammarList {
    constructor();
    readonly attribute unsigned long length;
    getter SpeechGrammar item(unsigned long index
);
    undefined addFromURI(DOMString src
,
                    optional float weight
 = 1.0);
    undefined addFromString(DOMString string
,
                    optional float weight
 = 1.0);
};

//
//
//
//
//
//
//
//
//
//

var myRecognition = new SpeechRecognition();

var grammar = '#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;

var diagnostic = document.querySelector('.output');
var bg = document.querySelector('html');

document.body.onclick = function() {
  recognition.start();
  console.log('Ready to receive a color command.');
}

abortBtn.onclick = function() {
  recognition.abort();
  console.log('Speech recognition aborted.');
}

recognition.onspeechend = function() {
  recognition.stop();
  console.log('Speech recognition has stopped.');
}

var recognition = new webkitSpeechRecognition();
recognition.onresult = function(event) { 
  console.log(event) 
}
recognition.start();

[Exposed=Window]
interface SpeechRecognition
 : EventTarget {
    constructor();

    // recognition parameters
    attribute SpeechGrammarList grammars;
    attribute DOMString lang;
    attribute boolean continuous;
    attribute boolean interimResults;
    attribute unsigned long maxAlternatives;

    // methods to drive the speech interaction
    undefined start();
    undefined stop();
    undefined abort();

    // event methods
    attribute EventHandler onaudiostart
;
    attribute EventHandler onsoundstart
;
    attribute EventHandler onspeechstart
;
    attribute EventHandler onspeechend
;
    attribute EventHandler onsoundend
;
    attribute EventHandler onaudioend
;
    attribute EventHandler onresult
;
    attribute EventHandler onnomatch
;
    attribute EventHandler onerror
;
    attribute EventHandler onstart
;
    attribute EventHandler onend
;
};

enum SpeechRecognitionErrorCode {
    "no-speech",
    "aborted",
    "audio-capture",
    "network",
    "not-allowed",
    "service-not-allowed",
    "bad-grammar",
    "language-not-supported"
};

[Exposed=Window]
interface SpeechRecognitionErrorEvent : Event {
    constructor(DOMString type
, SpeechRecognitionErrorEventInit eventInitDict
);
    readonly attribute SpeechRecognitionErrorCode error;
    readonly attribute DOMString message;
};

dictionary SpeechRecognitionErrorEventInit : EventInit {
    required SpeechRecognitionErrorCode error
;
    DOMString message
 = "";
};

// Item in N-best list
[Exposed=Window]
interface SpeechRecognitionAlternative {
    readonly attribute DOMString transcript;
    readonly attribute float confidence;
};

// A complete one-shot simple response
[Exposed=Window]
interface SpeechRecognitionResult {
    readonly attribute unsigned long length;
    getter SpeechRecognitionAlternative item(unsigned long index
);
    readonly attribute boolean isFinal;
};

// A collection of responses (used in continuous mode)
[Exposed=Window]
interface SpeechRecognitionResultList {
    readonly attribute unsigned long length;
    getter SpeechRecognitionResult item(unsigned long index
);
};

// A full response, which could be interim or final, part of a continuous response or not
[Exposed=Window]
interface SpeechRecognitionEvent : Event {
    constructor(DOMString type
, SpeechRecognitionEventInit eventInitDict);
    readonly attribute unsigned long resultIndex;
    readonly attribute SpeechRecognitionResultList results;
};

dictionary SpeechRecognitionEventInit : EventInit {
    unsigned long resultIndex
 = 0;
    required SpeechRecognitionResultList results
;
};

// The object representing a speech grammar
[Exposed=Window]
interface SpeechGrammar {
    attribute DOMString src;
    attribute float weight;
};

// The object representing a speech grammar collection
[Exposed=Window]
interface SpeechGrammarList {
    constructor
();
    readonly attribute unsigned long length;
    getter SpeechGrammar item(unsigned long index
);
    undefined addFromURI(DOMString src
,
                    optional float weight
 = 1.0);
    undefined addFromString(DOMString string
,
                    optional float weight
 = 1.0);
};