// Generated by JavaScript APG, Version 2.0 [`apg-js2`](https://github.com/ldthomas/apg-js2)
module.exports = function(){
"use strict";
  //```
  // SUMMARY
  //      rules = 60
  //       udts = 0
  //    opcodes = 281
  //        ABNF original opcodes
  //        ALT = 30
  //        CAT = 30
  //        REP = 29
  //        RNM = 113
  //        TLS = 7
  //        TBS = 40
  //        TRG = 27
  //        SABNF superset opcodes
  //        UDT = 0
  //        AND = 0
  //        NOT = 5
  //        BKA = 0
  //        BKN = 0
  //        BKR = 0
  //        ABG = 0
  //        AEN = 0
  // characters = [9 - 1114111]
  //```
  /* CALLBACK LIST PROTOTYPE (true, false or function reference) */
  this.callbacks = [];
  this.callbacks['anychar'] = false;
  this.callbacks['array'] = false;
  this.callbacks['begin-array'] = false;
  this.callbacks['begin-object'] = false;
  this.callbacks['block-comment'] = false;
  this.callbacks['char'] = false;
  this.callbacks['comma-separator'] = false;
  this.callbacks['comment'] = false;
  this.callbacks['cr'] = false;
  this.callbacks['decimal-point'] = false;
  this.callbacks['digit'] = false;
  this.callbacks['digit1-9'] = false;
  this.callbacks['e'] = false;
  this.callbacks['end-array'] = false;
  this.callbacks['end-block-comment'] = false;
  this.callbacks['end-object'] = false;
  this.callbacks['escape'] = false;
  this.callbacks['exp'] = false;
  this.callbacks['false'] = false;
  this.callbacks['frac'] = false;
  this.callbacks['hexdig'] = false;
  this.callbacks['hjson-text'] = false;
  this.callbacks['int'] = false;
  this.callbacks['json-string'] = false;
  this.callbacks['keyname'] = false;
  this.callbacks['lf'] = false;
  this.callbacks['lf-separator'] = false;
  this.callbacks['line-comment'] = false;
  this.callbacks['literal'] = false;
  this.callbacks['literal-end'] = false;
  this.callbacks['member'] = false;
  this.callbacks['minus'] = false;
  this.callbacks['ml-char'] = false;
  this.callbacks['ml-ignore'] = false;
  this.callbacks['ml-seq'] = false;
  this.callbacks['ml-string'] = false;
  this.callbacks['name'] = false;
  this.callbacks['name-separator'] = false;
  this.callbacks['non-punctuator-char'] = false;
  this.callbacks['null'] = false;
  this.callbacks['num-end'] = false;
  this.callbacks['number'] = false;
  this.callbacks['object'] = false;
  this.callbacks['plus'] = false;
  this.callbacks['ql-char'] = false;
  this.callbacks['ql-end'] = false;
  this.callbacks['ql-string'] = false;
  this.callbacks['quotation-mark'] = false;
  this.callbacks['root-object'] = false;
  this.callbacks['space'] = false;
  this.callbacks['start-block-comment'] = false;
  this.callbacks['string'] = false;
  this.callbacks['tab'] = false;
  this.callbacks['true'] = false;
  this.callbacks['unescaped'] = false;
  this.callbacks['value'] = false;
  this.callbacks['value-separator'] = false;
  this.callbacks['ws'] = false;
  this.callbacks['ws-c'] = false;
  this.callbacks['zero'] = false;

  /* OBJECT IDENTIFIER (for internal parser use) */
  this.grammarObject = 'grammarObject';

  /* RULES */
  this.rules = [];
  this.rules[0] = {name: 'Hjson-text', lower: 'hjson-text', index: 0, isBkr: false};
  this.rules[1] = {name: 'begin-array', lower: 'begin-array', index: 1, isBkr: false};
  this.rules[2] = {name: 'begin-object', lower: 'begin-object', index: 2, isBkr: false};
  this.rules[3] = {name: 'end-array', lower: 'end-array', index: 3, isBkr: false};
  this.rules[4] = {name: 'end-object', lower: 'end-object', index: 4, isBkr: false};
  this.rules[5] = {name: 'name-separator', lower: 'name-separator', index: 5, isBkr: false};
  this.rules[6] = {name: 'comma-separator', lower: 'comma-separator', index: 6, isBkr: false};
  this.rules[7] = {name: 'lf-separator', lower: 'lf-separator', index: 7, isBkr: false};
  this.rules[8] = {name: 'ws-c', lower: 'ws-c', index: 8, isBkr: false};
  this.rules[9] = {name: 'ws', lower: 'ws', index: 9, isBkr: false};
  this.rules[10] = {name: 'space', lower: 'space', index: 10, isBkr: false};
  this.rules[11] = {name: 'tab', lower: 'tab', index: 11, isBkr: false};
  this.rules[12] = {name: 'lf', lower: 'lf', index: 12, isBkr: false};
  this.rules[13] = {name: 'cr', lower: 'cr', index: 13, isBkr: false};
  this.rules[14] = {name: 'comment', lower: 'comment', index: 14, isBkr: false};
  this.rules[15] = {name: 'line-comment', lower: 'line-comment', index: 15, isBkr: false};
  this.rules[16] = {name: 'block-comment', lower: 'block-comment', index: 16, isBkr: false};
  this.rules[17] = {name: 'start-block-comment', lower: 'start-block-comment', index: 17, isBkr: false};
  this.rules[18] = {name: 'end-block-comment', lower: 'end-block-comment', index: 18, isBkr: false};
  this.rules[19] = {name: 'anychar', lower: 'anychar', index: 19, isBkr: false};
  this.rules[20] = {name: 'false', lower: 'false', index: 20, isBkr: false};
  this.rules[21] = {name: 'null', lower: 'null', index: 21, isBkr: false};
  this.rules[22] = {name: 'true', lower: 'true', index: 22, isBkr: false};
  this.rules[23] = {name: 'value', lower: 'value', index: 23, isBkr: false};
  this.rules[24] = {name: 'literal', lower: 'literal', index: 24, isBkr: false};
  this.rules[25] = {name: 'literal-end', lower: 'literal-end', index: 25, isBkr: false};
  this.rules[26] = {name: 'value-separator', lower: 'value-separator', index: 26, isBkr: false};
  this.rules[27] = {name: 'object', lower: 'object', index: 27, isBkr: false};
  this.rules[28] = {name: 'member', lower: 'member', index: 28, isBkr: false};
  this.rules[29] = {name: 'root-object', lower: 'root-object', index: 29, isBkr: false};
  this.rules[30] = {name: 'name', lower: 'name', index: 30, isBkr: false};
  this.rules[31] = {name: 'keyname', lower: 'keyname', index: 31, isBkr: false};
  this.rules[32] = {name: 'non-punctuator-char', lower: 'non-punctuator-char', index: 32, isBkr: false};
  this.rules[33] = {name: 'array', lower: 'array', index: 33, isBkr: false};
  this.rules[34] = {name: 'number', lower: 'number', index: 34, isBkr: false};
  this.rules[35] = {name: 'decimal-point', lower: 'decimal-point', index: 35, isBkr: false};
  this.rules[36] = {name: 'digit', lower: 'digit', index: 36, isBkr: false};
  this.rules[37] = {name: 'digit1-9', lower: 'digit1-9', index: 37, isBkr: false};
  this.rules[38] = {name: 'e', lower: 'e', index: 38, isBkr: false};
  this.rules[39] = {name: 'exp', lower: 'exp', index: 39, isBkr: false};
  this.rules[40] = {name: 'frac', lower: 'frac', index: 40, isBkr: false};
  this.rules[41] = {name: 'int', lower: 'int', index: 41, isBkr: false};
  this.rules[42] = {name: 'minus', lower: 'minus', index: 42, isBkr: false};
  this.rules[43] = {name: 'plus', lower: 'plus', index: 43, isBkr: false};
  this.rules[44] = {name: 'zero', lower: 'zero', index: 44, isBkr: false};
  this.rules[45] = {name: 'num-end', lower: 'num-end', index: 45, isBkr: false};
  this.rules[46] = {name: 'string', lower: 'string', index: 46, isBkr: false};
  this.rules[47] = {name: 'json-string', lower: 'json-string', index: 47, isBkr: false};
  this.rules[48] = {name: 'char', lower: 'char', index: 48, isBkr: false};
  this.rules[49] = {name: 'hexdig', lower: 'hexdig', index: 49, isBkr: false};
  this.rules[50] = {name: 'escape', lower: 'escape', index: 50, isBkr: false};
  this.rules[51] = {name: 'quotation-mark', lower: 'quotation-mark', index: 51, isBkr: false};
  this.rules[52] = {name: 'unescaped', lower: 'unescaped', index: 52, isBkr: false};
  this.rules[53] = {name: 'ql-string', lower: 'ql-string', index: 53, isBkr: false};
  this.rules[54] = {name: 'ql-end', lower: 'ql-end', index: 54, isBkr: false};
  this.rules[55] = {name: 'ql-char', lower: 'ql-char', index: 55, isBkr: false};
  this.rules[56] = {name: 'ml-string', lower: 'ml-string', index: 56, isBkr: false};
  this.rules[57] = {name: 'ml-seq', lower: 'ml-seq', index: 57, isBkr: false};
  this.rules[58] = {name: 'ml-char', lower: 'ml-char', index: 58, isBkr: false};
  this.rules[59] = {name: 'ml-ignore', lower: 'ml-ignore', index: 59, isBkr: false};

  /* UDTS */
  this.udts = [];

  /* OPCODES */
  /* Hjson-text */
  this.rules[0].opcodes = [];
  this.rules[0].opcodes[0] = {type: 2, children: [1,2,5]};// CAT
  this.rules[0].opcodes[1] = {type: 4, index: 8};// RNM(ws-c)
  this.rules[0].opcodes[2] = {type: 1, children: [3,4]};// ALT
  this.rules[0].opcodes[3] = {type: 4, index: 29};// RNM(root-object)
  this.rules[0].opcodes[4] = {type: 4, index: 23};// RNM(value)
  this.rules[0].opcodes[5] = {type: 4, index: 8};// RNM(ws-c)

  /* begin-array */
  this.rules[1].opcodes = [];
  this.rules[1].opcodes[0] = {type: 6, string: [91]};// TBS

  /* begin-object */
  this.rules[2].opcodes = [];
  this.rules[2].opcodes[0] = {type: 6, string: [123]};// TBS

  /* end-array */
  this.rules[3].opcodes = [];
  this.rules[3].opcodes[0] = {type: 6, string: [93]};// TBS

  /* end-object */
  this.rules[4].opcodes = [];
  this.rules[4].opcodes[0] = {type: 6, string: [125]};// TBS

  /* name-separator */
  this.rules[5].opcodes = [];
  this.rules[5].opcodes[0] = {type: 6, string: [58]};// TBS

  /* comma-separator */
  this.rules[6].opcodes = [];
  this.rules[6].opcodes[0] = {type: 6, string: [44]};// TBS

  /* lf-separator */
  this.rules[7].opcodes = [];
  this.rules[7].opcodes[0] = {type: 4, index: 12};// RNM(lf)

  /* ws-c */
  this.rules[8].opcodes = [];
  this.rules[8].opcodes[0] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[8].opcodes[1] = {type: 1, children: [2,3]};// ALT
  this.rules[8].opcodes[2] = {type: 4, index: 14};// RNM(comment)
  this.rules[8].opcodes[3] = {type: 4, index: 9};// RNM(ws)

  /* ws */
  this.rules[9].opcodes = [];
  this.rules[9].opcodes[0] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[9].opcodes[1] = {type: 1, children: [2,3,4,5]};// ALT
  this.rules[9].opcodes[2] = {type: 4, index: 10};// RNM(space)
  this.rules[9].opcodes[3] = {type: 4, index: 11};// RNM(tab)
  this.rules[9].opcodes[4] = {type: 4, index: 12};// RNM(lf)
  this.rules[9].opcodes[5] = {type: 4, index: 13};// RNM(cr)

  /* space */
  this.rules[10].opcodes = [];
  this.rules[10].opcodes[0] = {type: 6, string: [32]};// TBS

  /* tab */
  this.rules[11].opcodes = [];
  this.rules[11].opcodes[0] = {type: 6, string: [9]};// TBS

  /* lf */
  this.rules[12].opcodes = [];
  this.rules[12].opcodes[0] = {type: 6, string: [10]};// TBS

  /* cr */
  this.rules[13].opcodes = [];
  this.rules[13].opcodes[0] = {type: 6, string: [13]};// TBS

  /* comment */
  this.rules[14].opcodes = [];
  this.rules[14].opcodes[0] = {type: 1, children: [1,2]};// ALT
  this.rules[14].opcodes[1] = {type: 4, index: 15};// RNM(line-comment)
  this.rules[14].opcodes[2] = {type: 4, index: 16};// RNM(block-comment)

  /* line-comment */
  this.rules[15].opcodes = [];
  this.rules[15].opcodes[0] = {type: 2, children: [1,4]};// CAT
  this.rules[15].opcodes[1] = {type: 1, children: [2,3]};// ALT
  this.rules[15].opcodes[2] = {type: 6, string: [35]};// TBS
  this.rules[15].opcodes[3] = {type: 6, string: [47,47]};// TBS
  this.rules[15].opcodes[4] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[15].opcodes[5] = {type: 1, children: [6,7,8]};// ALT
  this.rules[15].opcodes[6] = {type: 4, index: 11};// RNM(tab)
  this.rules[15].opcodes[7] = {type: 4, index: 13};// RNM(cr)
  this.rules[15].opcodes[8] = {type: 5, min: 32, max: 1114111};// TRG

  /* block-comment */
  this.rules[16].opcodes = [];
  this.rules[16].opcodes[0] = {type: 2, children: [1,2,7]};// CAT
  this.rules[16].opcodes[1] = {type: 4, index: 17};// RNM(start-block-comment)
  this.rules[16].opcodes[2] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[16].opcodes[3] = {type: 2, children: [4,6]};// CAT
  this.rules[16].opcodes[4] = {type: 13};// NOT
  this.rules[16].opcodes[5] = {type: 4, index: 18};// RNM(end-block-comment)
  this.rules[16].opcodes[6] = {type: 4, index: 19};// RNM(anychar)
  this.rules[16].opcodes[7] = {type: 4, index: 18};// RNM(end-block-comment)

  /* start-block-comment */
  this.rules[17].opcodes = [];
  this.rules[17].opcodes[0] = {type: 6, string: [47,42]};// TBS

  /* end-block-comment */
  this.rules[18].opcodes = [];
  this.rules[18].opcodes[0] = {type: 6, string: [42,47]};// TBS

  /* anychar */
  this.rules[19].opcodes = [];
  this.rules[19].opcodes[0] = {type: 1, children: [1,2,3,4]};// ALT
  this.rules[19].opcodes[1] = {type: 4, index: 11};// RNM(tab)
  this.rules[19].opcodes[2] = {type: 4, index: 13};// RNM(cr)
  this.rules[19].opcodes[3] = {type: 4, index: 12};// RNM(lf)
  this.rules[19].opcodes[4] = {type: 5, min: 32, max: 1114111};// TRG

  /* false */
  this.rules[20].opcodes = [];
  this.rules[20].opcodes[0] = {type: 6, string: [102,97,108,115,101]};// TBS

  /* null */
  this.rules[21].opcodes = [];
  this.rules[21].opcodes[0] = {type: 6, string: [110,117,108,108]};// TBS

  /* true */
  this.rules[22].opcodes = [];
  this.rules[22].opcodes[0] = {type: 6, string: [116,114,117,101]};// TBS

  /* value */
  this.rules[23].opcodes = [];
  this.rules[23].opcodes[0] = {type: 1, children: [1,2,3,4,5]};// ALT
  this.rules[23].opcodes[1] = {type: 4, index: 24};// RNM(literal)
  this.rules[23].opcodes[2] = {type: 4, index: 27};// RNM(object)
  this.rules[23].opcodes[3] = {type: 4, index: 33};// RNM(array)
  this.rules[23].opcodes[4] = {type: 4, index: 34};// RNM(number)
  this.rules[23].opcodes[5] = {type: 4, index: 46};// RNM(string)

  /* literal */
  this.rules[24].opcodes = [];
  this.rules[24].opcodes[0] = {type: 2, children: [1,5]};// CAT
  this.rules[24].opcodes[1] = {type: 1, children: [2,3,4]};// ALT
  this.rules[24].opcodes[2] = {type: 4, index: 20};// RNM(false)
  this.rules[24].opcodes[3] = {type: 4, index: 21};// RNM(null)
  this.rules[24].opcodes[4] = {type: 4, index: 22};// RNM(true)
  this.rules[24].opcodes[5] = {type: 13};// NOT
  this.rules[24].opcodes[6] = {type: 4, index: 25};// RNM(literal-end)

  /* literal-end */
  this.rules[25].opcodes = [];
  this.rules[25].opcodes[0] = {type: 2, children: [1,5]};// CAT
  this.rules[25].opcodes[1] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[25].opcodes[2] = {type: 1, children: [3,4]};// ALT
  this.rules[25].opcodes[3] = {type: 4, index: 10};// RNM(space)
  this.rules[25].opcodes[4] = {type: 4, index: 11};// RNM(tab)
  this.rules[25].opcodes[5] = {type: 1, children: [6,7,8,9,10,11,12,13]};// ALT
  this.rules[25].opcodes[6] = {type: 5, min: 33, max: 34};// TRG
  this.rules[25].opcodes[7] = {type: 5, min: 36, max: 43};// TRG
  this.rules[25].opcodes[8] = {type: 5, min: 45, max: 46};// TRG
  this.rules[25].opcodes[9] = {type: 5, min: 48, max: 90};// TRG
  this.rules[25].opcodes[10] = {type: 6, string: [92]};// TBS
  this.rules[25].opcodes[11] = {type: 5, min: 94, max: 122};// TRG
  this.rules[25].opcodes[12] = {type: 6, string: [124]};// TBS
  this.rules[25].opcodes[13] = {type: 5, min: 126, max: 1114111};// TRG

  /* value-separator */
  this.rules[26].opcodes = [];
  this.rules[26].opcodes[0] = {type: 1, children: [1,5]};// ALT
  this.rules[26].opcodes[1] = {type: 2, children: [2,3,4]};// CAT
  this.rules[26].opcodes[2] = {type: 4, index: 8};// RNM(ws-c)
  this.rules[26].opcodes[3] = {type: 4, index: 6};// RNM(comma-separator)
  this.rules[26].opcodes[4] = {type: 4, index: 8};// RNM(ws-c)
  this.rules[26].opcodes[5] = {type: 2, children: [6,14,15]};// CAT
  this.rules[26].opcodes[6] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[26].opcodes[7] = {type: 1, children: [8,9]};// ALT
  this.rules[26].opcodes[8] = {type: 4, index: 14};// RNM(comment)
  this.rules[26].opcodes[9] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[26].opcodes[10] = {type: 1, children: [11,12,13]};// ALT
  this.rules[26].opcodes[11] = {type: 4, index: 10};// RNM(space)
  this.rules[26].opcodes[12] = {type: 4, index: 11};// RNM(tab)
  this.rules[26].opcodes[13] = {type: 4, index: 13};// RNM(cr)
  this.rules[26].opcodes[14] = {type: 4, index: 7};// RNM(lf-separator)
  this.rules[26].opcodes[15] = {type: 4, index: 8};// RNM(ws-c)

  /* object */
  this.rules[27].opcodes = [];
  this.rules[27].opcodes[0] = {type: 2, children: [1,2,3,12,13]};// CAT
  this.rules[27].opcodes[1] = {type: 4, index: 2};// RNM(begin-object)
  this.rules[27].opcodes[2] = {type: 4, index: 8};// RNM(ws-c)
  this.rules[27].opcodes[3] = {type: 3, min: 0, max: 1};// REP
  this.rules[27].opcodes[4] = {type: 2, children: [5,6,10]};// CAT
  this.rules[27].opcodes[5] = {type: 4, index: 28};// RNM(member)
  this.rules[27].opcodes[6] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[27].opcodes[7] = {type: 2, children: [8,9]};// CAT
  this.rules[27].opcodes[8] = {type: 4, index: 26};// RNM(value-separator)
  this.rules[27].opcodes[9] = {type: 4, index: 28};// RNM(member)
  this.rules[27].opcodes[10] = {type: 3, min: 0, max: 1};// REP
  this.rules[27].opcodes[11] = {type: 4, index: 26};// RNM(value-separator)
  this.rules[27].opcodes[12] = {type: 4, index: 8};// RNM(ws-c)
  this.rules[27].opcodes[13] = {type: 4, index: 4};// RNM(end-object)

  /* member */
  this.rules[28].opcodes = [];
  this.rules[28].opcodes[0] = {type: 2, children: [1,2,3,4,5]};// CAT
  this.rules[28].opcodes[1] = {type: 4, index: 30};// RNM(name)
  this.rules[28].opcodes[2] = {type: 4, index: 8};// RNM(ws-c)
  this.rules[28].opcodes[3] = {type: 4, index: 5};// RNM(name-separator)
  this.rules[28].opcodes[4] = {type: 4, index: 8};// RNM(ws-c)
  this.rules[28].opcodes[5] = {type: 4, index: 23};// RNM(value)

  /* root-object */
  this.rules[29].opcodes = [];
  this.rules[29].opcodes[0] = {type: 2, children: [1,2,6]};// CAT
  this.rules[29].opcodes[1] = {type: 4, index: 28};// RNM(member)
  this.rules[29].opcodes[2] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[29].opcodes[3] = {type: 2, children: [4,5]};// CAT
  this.rules[29].opcodes[4] = {type: 4, index: 26};// RNM(value-separator)
  this.rules[29].opcodes[5] = {type: 4, index: 28};// RNM(member)
  this.rules[29].opcodes[6] = {type: 3, min: 0, max: 1};// REP
  this.rules[29].opcodes[7] = {type: 4, index: 26};// RNM(value-separator)

  /* name */
  this.rules[30].opcodes = [];
  this.rules[30].opcodes[0] = {type: 1, children: [1,2]};// ALT
  this.rules[30].opcodes[1] = {type: 4, index: 47};// RNM(json-string)
  this.rules[30].opcodes[2] = {type: 4, index: 31};// RNM(keyname)

  /* keyname */
  this.rules[31].opcodes = [];
  this.rules[31].opcodes[0] = {type: 3, min: 1, max: Infinity};// REP
  this.rules[31].opcodes[1] = {type: 4, index: 32};// RNM(non-punctuator-char)

  /* non-punctuator-char */
  this.rules[32].opcodes = [];
  this.rules[32].opcodes[0] = {type: 1, children: [1,2,3,4,5,6,7]};// ALT
  this.rules[32].opcodes[1] = {type: 5, min: 33, max: 43};// TRG
  this.rules[32].opcodes[2] = {type: 5, min: 45, max: 57};// TRG
  this.rules[32].opcodes[3] = {type: 5, min: 59, max: 90};// TRG
  this.rules[32].opcodes[4] = {type: 6, string: [92]};// TBS
  this.rules[32].opcodes[5] = {type: 5, min: 94, max: 122};// TRG
  this.rules[32].opcodes[6] = {type: 6, string: [124]};// TBS
  this.rules[32].opcodes[7] = {type: 5, min: 126, max: 1114111};// TRG

  /* array */
  this.rules[33].opcodes = [];
  this.rules[33].opcodes[0] = {type: 2, children: [1,2,3,12,13]};// CAT
  this.rules[33].opcodes[1] = {type: 4, index: 1};// RNM(begin-array)
  this.rules[33].opcodes[2] = {type: 4, index: 8};// RNM(ws-c)
  this.rules[33].opcodes[3] = {type: 3, min: 0, max: 1};// REP
  this.rules[33].opcodes[4] = {type: 2, children: [5,6,10]};// CAT
  this.rules[33].opcodes[5] = {type: 4, index: 23};// RNM(value)
  this.rules[33].opcodes[6] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[33].opcodes[7] = {type: 2, children: [8,9]};// CAT
  this.rules[33].opcodes[8] = {type: 4, index: 26};// RNM(value-separator)
  this.rules[33].opcodes[9] = {type: 4, index: 23};// RNM(value)
  this.rules[33].opcodes[10] = {type: 3, min: 0, max: 1};// REP
  this.rules[33].opcodes[11] = {type: 4, index: 26};// RNM(value-separator)
  this.rules[33].opcodes[12] = {type: 4, index: 8};// RNM(ws-c)
  this.rules[33].opcodes[13] = {type: 4, index: 3};// RNM(end-array)

  /* number */
  this.rules[34].opcodes = [];
  this.rules[34].opcodes[0] = {type: 2, children: [1,3,4,6,8]};// CAT
  this.rules[34].opcodes[1] = {type: 3, min: 0, max: 1};// REP
  this.rules[34].opcodes[2] = {type: 4, index: 42};// RNM(minus)
  this.rules[34].opcodes[3] = {type: 4, index: 41};// RNM(int)
  this.rules[34].opcodes[4] = {type: 3, min: 0, max: 1};// REP
  this.rules[34].opcodes[5] = {type: 4, index: 40};// RNM(frac)
  this.rules[34].opcodes[6] = {type: 3, min: 0, max: 1};// REP
  this.rules[34].opcodes[7] = {type: 4, index: 39};// RNM(exp)
  this.rules[34].opcodes[8] = {type: 13};// NOT
  this.rules[34].opcodes[9] = {type: 4, index: 45};// RNM(num-end)

  /* decimal-point */
  this.rules[35].opcodes = [];
  this.rules[35].opcodes[0] = {type: 6, string: [46]};// TBS

  /* digit */
  this.rules[36].opcodes = [];
  this.rules[36].opcodes[0] = {type: 5, min: 48, max: 57};// TRG

  /* digit1-9 */
  this.rules[37].opcodes = [];
  this.rules[37].opcodes[0] = {type: 5, min: 49, max: 57};// TRG

  /* e */
  this.rules[38].opcodes = [];
  this.rules[38].opcodes[0] = {type: 1, children: [1,2]};// ALT
  this.rules[38].opcodes[1] = {type: 6, string: [101]};// TBS
  this.rules[38].opcodes[2] = {type: 6, string: [69]};// TBS

  /* exp */
  this.rules[39].opcodes = [];
  this.rules[39].opcodes[0] = {type: 2, children: [1,2,6]};// CAT
  this.rules[39].opcodes[1] = {type: 4, index: 38};// RNM(e)
  this.rules[39].opcodes[2] = {type: 3, min: 0, max: 1};// REP
  this.rules[39].opcodes[3] = {type: 1, children: [4,5]};// ALT
  this.rules[39].opcodes[4] = {type: 4, index: 42};// RNM(minus)
  this.rules[39].opcodes[5] = {type: 4, index: 43};// RNM(plus)
  this.rules[39].opcodes[6] = {type: 3, min: 1, max: Infinity};// REP
  this.rules[39].opcodes[7] = {type: 4, index: 36};// RNM(digit)

  /* frac */
  this.rules[40].opcodes = [];
  this.rules[40].opcodes[0] = {type: 2, children: [1,2]};// CAT
  this.rules[40].opcodes[1] = {type: 4, index: 35};// RNM(decimal-point)
  this.rules[40].opcodes[2] = {type: 3, min: 1, max: Infinity};// REP
  this.rules[40].opcodes[3] = {type: 4, index: 36};// RNM(digit)

  /* int */
  this.rules[41].opcodes = [];
  this.rules[41].opcodes[0] = {type: 1, children: [1,2]};// ALT
  this.rules[41].opcodes[1] = {type: 4, index: 44};// RNM(zero)
  this.rules[41].opcodes[2] = {type: 2, children: [3,4]};// CAT
  this.rules[41].opcodes[3] = {type: 4, index: 37};// RNM(digit1-9)
  this.rules[41].opcodes[4] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[41].opcodes[5] = {type: 4, index: 36};// RNM(digit)

  /* minus */
  this.rules[42].opcodes = [];
  this.rules[42].opcodes[0] = {type: 6, string: [45]};// TBS

  /* plus */
  this.rules[43].opcodes = [];
  this.rules[43].opcodes[0] = {type: 6, string: [43]};// TBS

  /* zero */
  this.rules[44].opcodes = [];
  this.rules[44].opcodes[0] = {type: 6, string: [48]};// TBS

  /* num-end */
  this.rules[45].opcodes = [];
  this.rules[45].opcodes[0] = {type: 2, children: [1,5]};// CAT
  this.rules[45].opcodes[1] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[45].opcodes[2] = {type: 1, children: [3,4]};// ALT
  this.rules[45].opcodes[3] = {type: 4, index: 10};// RNM(space)
  this.rules[45].opcodes[4] = {type: 4, index: 11};// RNM(tab)
  this.rules[45].opcodes[5] = {type: 1, children: [6,7,8,9,10,11,12,13]};// ALT
  this.rules[45].opcodes[6] = {type: 5, min: 33, max: 34};// TRG
  this.rules[45].opcodes[7] = {type: 5, min: 36, max: 43};// TRG
  this.rules[45].opcodes[8] = {type: 5, min: 45, max: 46};// TRG
  this.rules[45].opcodes[9] = {type: 5, min: 48, max: 90};// TRG
  this.rules[45].opcodes[10] = {type: 6, string: [92]};// TBS
  this.rules[45].opcodes[11] = {type: 5, min: 94, max: 122};// TRG
  this.rules[45].opcodes[12] = {type: 6, string: [124]};// TBS
  this.rules[45].opcodes[13] = {type: 5, min: 126, max: 1114111};// TRG

  /* string */
  this.rules[46].opcodes = [];
  this.rules[46].opcodes[0] = {type: 1, children: [1,2,3]};// ALT
  this.rules[46].opcodes[1] = {type: 4, index: 47};// RNM(json-string)
  this.rules[46].opcodes[2] = {type: 4, index: 56};// RNM(ml-string)
  this.rules[46].opcodes[3] = {type: 4, index: 53};// RNM(ql-string)

  /* json-string */
  this.rules[47].opcodes = [];
  this.rules[47].opcodes[0] = {type: 2, children: [1,2,4]};// CAT
  this.rules[47].opcodes[1] = {type: 4, index: 51};// RNM(quotation-mark)
  this.rules[47].opcodes[2] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[47].opcodes[3] = {type: 4, index: 48};// RNM(char)
  this.rules[47].opcodes[4] = {type: 4, index: 51};// RNM(quotation-mark)

  /* char */
  this.rules[48].opcodes = [];
  this.rules[48].opcodes[0] = {type: 1, children: [1,2]};// ALT
  this.rules[48].opcodes[1] = {type: 4, index: 52};// RNM(unescaped)
  this.rules[48].opcodes[2] = {type: 2, children: [3,4]};// CAT
  this.rules[48].opcodes[3] = {type: 4, index: 50};// RNM(escape)
  this.rules[48].opcodes[4] = {type: 1, children: [5,6,7,8,9,10,11,12,13]};// ALT
  this.rules[48].opcodes[5] = {type: 6, string: [34]};// TBS
  this.rules[48].opcodes[6] = {type: 6, string: [92]};// TBS
  this.rules[48].opcodes[7] = {type: 6, string: [47]};// TBS
  this.rules[48].opcodes[8] = {type: 6, string: [98]};// TBS
  this.rules[48].opcodes[9] = {type: 6, string: [102]};// TBS
  this.rules[48].opcodes[10] = {type: 6, string: [110]};// TBS
  this.rules[48].opcodes[11] = {type: 6, string: [114]};// TBS
  this.rules[48].opcodes[12] = {type: 6, string: [116]};// TBS
  this.rules[48].opcodes[13] = {type: 2, children: [14,15]};// CAT
  this.rules[48].opcodes[14] = {type: 6, string: [117]};// TBS
  this.rules[48].opcodes[15] = {type: 3, min: 4, max: 4};// REP
  this.rules[48].opcodes[16] = {type: 4, index: 49};// RNM(hexdig)

  /* hexdig */
  this.rules[49].opcodes = [];
  this.rules[49].opcodes[0] = {type: 1, children: [1,2,3,4,5,6,7]};// ALT
  this.rules[49].opcodes[1] = {type: 5, min: 48, max: 57};// TRG
  this.rules[49].opcodes[2] = {type: 7, string: [97]};// TLS
  this.rules[49].opcodes[3] = {type: 7, string: [98]};// TLS
  this.rules[49].opcodes[4] = {type: 7, string: [99]};// TLS
  this.rules[49].opcodes[5] = {type: 7, string: [100]};// TLS
  this.rules[49].opcodes[6] = {type: 7, string: [101]};// TLS
  this.rules[49].opcodes[7] = {type: 7, string: [102]};// TLS

  /* escape */
  this.rules[50].opcodes = [];
  this.rules[50].opcodes[0] = {type: 6, string: [92]};// TBS

  /* quotation-mark */
  this.rules[51].opcodes = [];
  this.rules[51].opcodes[0] = {type: 6, string: [34]};// TBS

  /* unescaped */
  this.rules[52].opcodes = [];
  this.rules[52].opcodes[0] = {type: 1, children: [1,2,3]};// ALT
  this.rules[52].opcodes[1] = {type: 5, min: 32, max: 33};// TRG
  this.rules[52].opcodes[2] = {type: 5, min: 35, max: 91};// TRG
  this.rules[52].opcodes[3] = {type: 5, min: 93, max: 1114111};// TRG

  /* ql-string */
  this.rules[53].opcodes = [];
  this.rules[53].opcodes[0] = {type: 2, children: [1,2]};// CAT
  this.rules[53].opcodes[1] = {type: 4, index: 32};// RNM(non-punctuator-char)
  this.rules[53].opcodes[2] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[53].opcodes[3] = {type: 2, children: [4,6]};// CAT
  this.rules[53].opcodes[4] = {type: 13};// NOT
  this.rules[53].opcodes[5] = {type: 4, index: 54};// RNM(ql-end)
  this.rules[53].opcodes[6] = {type: 4, index: 55};// RNM(ql-char)

  /* ql-end */
  this.rules[54].opcodes = [];
  this.rules[54].opcodes[0] = {type: 2, children: [1,6]};// CAT
  this.rules[54].opcodes[1] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[54].opcodes[2] = {type: 1, children: [3,4,5]};// ALT
  this.rules[54].opcodes[3] = {type: 4, index: 10};// RNM(space)
  this.rules[54].opcodes[4] = {type: 4, index: 11};// RNM(tab)
  this.rules[54].opcodes[5] = {type: 4, index: 13};// RNM(cr)
  this.rules[54].opcodes[6] = {type: 4, index: 12};// RNM(lf)

  /* ql-char */
  this.rules[55].opcodes = [];
  this.rules[55].opcodes[0] = {type: 1, children: [1,2,3]};// ALT
  this.rules[55].opcodes[1] = {type: 4, index: 10};// RNM(space)
  this.rules[55].opcodes[2] = {type: 4, index: 11};// RNM(tab)
  this.rules[55].opcodes[3] = {type: 5, min: 33, max: 1114111};// TRG

  /* ml-string */
  this.rules[56].opcodes = [];
  this.rules[56].opcodes[0] = {type: 2, children: [1,2,9]};// CAT
  this.rules[56].opcodes[1] = {type: 4, index: 57};// RNM(ml-seq)
  this.rules[56].opcodes[2] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[56].opcodes[3] = {type: 2, children: [4,6]};// CAT
  this.rules[56].opcodes[4] = {type: 13};// NOT
  this.rules[56].opcodes[5] = {type: 4, index: 57};// RNM(ml-seq)
  this.rules[56].opcodes[6] = {type: 1, children: [7,8]};// ALT
  this.rules[56].opcodes[7] = {type: 4, index: 58};// RNM(ml-char)
  this.rules[56].opcodes[8] = {type: 4, index: 59};// RNM(ml-ignore)
  this.rules[56].opcodes[9] = {type: 4, index: 57};// RNM(ml-seq)

  /* ml-seq */
  this.rules[57].opcodes = [];
  this.rules[57].opcodes[0] = {type: 7, string: [39,39,39]};// TLS

  /* ml-char */
  this.rules[58].opcodes = [];
  this.rules[58].opcodes[0] = {type: 1, children: [1,2,3,4]};// ALT
  this.rules[58].opcodes[1] = {type: 4, index: 10};// RNM(space)
  this.rules[58].opcodes[2] = {type: 4, index: 11};// RNM(tab)
  this.rules[58].opcodes[3] = {type: 4, index: 12};// RNM(lf)
  this.rules[58].opcodes[4] = {type: 5, min: 33, max: 1114111};// TRG

  /* ml-ignore */
  this.rules[59].opcodes = [];
  this.rules[59].opcodes[0] = {type: 4, index: 13};// RNM(cr)

  // The `toString()` function will display the original grammar file(s) that produced these opcodes.
  this.toString = function(){
    var str = "";
    str += "Hjson-text = ws-c ( root-object / value ) ws-c\n";
    str += "begin-array      = %x5B     ; [ left square bracket\n";
    str += "begin-object     = %x7B     ; { left curly bracket\n";
    str += "end-array        = %x5D     ; ] right square bracket\n";
    str += "end-object       = %x7D     ; } right curly bracket\n";
    str += "name-separator   = %x3A     ; : colon\n";
    str += "comma-separator  = %x2C     ; , comma\n";
    str += "lf-separator     = lf       ; Line feed or New line\n";
    str += "ws-c  = *( comment / ws )\n";
    str += "ws    = *( space / tab / lf / cr )\n";
    str += "space = %x20    ; Space\n";
    str += "tab   = %x09    ; Horizontal tab\n";
    str += "lf    = %x0A    ; Line feed or New line\n";
    str += "cr    = %x0D    ; Carriage return\n";
    str += "comment = line-comment / block-comment\n";
    str += "line-comment  = ( %x23 /        ; # hash\n";
    str += "                  %x2F.2F )     ; // slash + slash\n";
    str += "                *( tab / cr / %x20-10FFFF ) ; until lf\n";
    str += "block-comment = start-block-comment\n";
    str += "                *( !end-block-comment anychar )\n";
    str += "                end-block-comment\n";
    str += "start-block-comment = %x2F.2A   ; /* slash + star\n";
    str += "end-block-comment = %x2A.2F     ; */ star + slash\n";
    str += "anychar = tab / cr / lf / %x20-10FFFF\n";
    str += "; SABNF: block-comment requies the use of the\n";
    str += ";        ! operator to allow * and / in the text\n";
    str += ";        while stopping at */\n";
    str += "false = %x66.61.6C.73.65   ; false\n";
    str += "null  = %x6E.75.6C.6C      ; null\n";
    str += "true  = %x74.72.75.65      ; true\n";
    str += "value = literal / object / array / number / string\n";
    str += "literal = ( false / null / true ) !literal-end\n";
    str += "literal-end =\n";
    str += "         *( space / tab )\n";
    str += "         ( %x21-22 / %x24-2B / %x2D-2E / %x30-5A /\n";
    str += "           %x5C / %x5E-7A / %x7C / %x7E-10FFFF )\n";
    str += "         ; exclude #/,[]{}\n";
    str += "; SABNF: define literal-end to prevent matches\n";
    str += ";        that are actually a ql-string\n";
    str += ";        (like \"true blue\")\n";
    str += "value-separator =  ( ws-c comma-separator ws-c ) /\n";
    str += "                   ( *( comment /\n";
    str += "                        *(space / tab / cr) )\n";
    str += "                     lf-separator ws-c )\n";
    str += "object = begin-object\n";
    str += "         ws-c\n";
    str += "         [ member *( value-separator member ) [value-separator] ]\n";
    str += "         ws-c\n";
    str += "         end-object\n";
    str += "member = name ws-c name-separator ws-c value\n";
    str += "root-object =\n";
    str += "         member\n";
    str += "         *( value-separator member ) [value-separator]\n";
    str += "name = json-string / keyname\n";
    str += "keyname =  1*non-punctuator-char\n";
    str += "non-punctuator-char = %x21-2B / %x2D-39 / %x3B-5A /\n";
    str += "                      %x5C / %x5E-7A / %x7C / %x7E-10FFFF\n";
    str += "; any non-punctuator character (excludes ,:[]{} and ws)\n";
    str += "array =  begin-array\n";
    str += "         ws-c\n";
    str += "         [ value *( value-separator value ) [value-separator ] ]\n";
    str += "         ws-c\n";
    str += "         end-array\n";
    str += "number = [ minus ] int [ frac ] [ exp ] !num-end\n";
    str += "decimal-point = %x2E       ; .\n";
    str += "digit = %x30-39            ; 0-9\n";
    str += "digit1-9 = %x31-39         ; 1-9\n";
    str += "e = %x65 / %x45            ; e E\n";
    str += "exp = e [ minus / plus ] 1*digit\n";
    str += "frac = decimal-point 1*digit\n";
    str += "int = zero / ( digit1-9 *digit )\n";
    str += "minus = %x2D               ; -\n";
    str += "plus = %x2B                ; +\n";
    str += "zero = %x30                ; 0\n";
    str += "num-end =  *( space / tab )\n";
    str += "           ( %x21-22 / %x24-2B / %x2D-2E / %x30-5A /\n";
    str += "           %x5C / %x5E-7A / %x7C / %x7E-10FFFF )\n";
    str += "           ; exclude #/,[]{}\n";
    str += "; SABNF: define num-end to prevent matches\n";
    str += ";        that are actually a ql-string\n";
    str += ";        (like \"1 minute\")\n";
    str += "string = json-string / ml-string / ql-string\n";
    str += "json-string = quotation-mark *char quotation-mark\n";
    str += "char = unescaped /\n";
    str += "    escape (\n";
    str += "        %x22 /          ; \"    quotation mark  U+0022\n";
    str += "        %x5C /          ; \\    reverse solidus U+005C\n";
    str += "        %x2F /          ; /    solidus         U+002F\n";
    str += "        %x62 /          ; b    backspace       U+0008\n";
    str += "        %x66 /          ; f    form feed       U+000C\n";
    str += "        %x6E /          ; n    line feed       U+000A\n";
    str += "        %x72 /          ; r    carriage return U+000D\n";
    str += "        %x74 /          ; t    tab             U+0009\n";
    str += "        %x75 4hexdig )  ; uXXXX                U+XXXX\n";
    str += "hexdig = %x30-39 / \"A\" / \"B\" / \"C\" / \"D\" / \"E\" / \"F\"\n";
    str += "escape = %x5C              ; \\\n";
    str += "quotation-mark = %x22      ; \"\n";
    str += "unescaped = %x20-21 / %x23-5B / %x5D-10FFFF\n";
    str += "ql-string = non-punctuator-char\n";
    str += "            *( !ql-end ql-char )\n";
    str += "ql-end    = *( space / tab / cr ) lf\n";
    str += "ql-char   = space / tab / %x21-10FFFF\n";
    str += "; SABNF: define ql-end to exclude trailing\n";
    str += ";        whitespace from the ql-string\n";
    str += "ml-string =\n";
    str += "   ml-seq\n";
    str += "   *( !ml-seq ( ml-char / ml-ignore ) )\n";
    str += "   ml-seq\n";
    str += "ml-seq = \"'''\"\n";
    str += "ml-char = space / tab / lf / %x21-10FFFF\n";
    str += "ml-ignore = cr\n";
    str += "; SABNF: ml-string requies the use of the\n";
    str += ";        ! operator to allow ' in the text\n";
    str += ";        while stopping at '''\n";
    return str;
  }
}
