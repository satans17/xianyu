//	HYPE.documents["duanwu"]

(function () {
  (function k() {
    var f = "http://gtms03.alicdn.com/", d = "duanwu", c = "duanwu_hype_container";
    if (false == !1)try {
      for (var g = document.getElementsByTagName("script"), a = 0; a < g.length; a++) {
        var b = g[a].src;
        if (null != b && -1 != b.indexOf("duanwu_hype_generated_script.js")) {
          f = b.substr(0, b.lastIndexOf("/"));
          break
        }
      }
    } catch (m) {
    }
    if (false == !1 && null == window.HYPE_456)null == window.HYPE_dtl_456 ? (window.HYPE_dtl_456 = [], window.HYPE_dtl_456.push(k), d = document.getElementsByTagName("head")[0], c = document.createElement("script"),
      a = navigator.userAgent.match(/MSIE (\d+\.\d+)/), a = parseFloat(a && a[1]) || null, c.type = "text/javascript", c.src = f + "/" + (!0 == (null != a && 10 > a || false == !0) ? "HYPE-456.full.min.js" : "HYPE-456.thin.min.js"), d.appendChild(c)) : window.HYPE_dtl_456.push(k); else {
      window.HYPE_dtl_456 = [];
      g = window.HYPE.documents;
      if (null != g[d]) {
        b = 1;
        a = d;
        do d = "" + a + "-" + b++; while (null != g[d]);
        for (var e = document.getElementsByTagName("div"), b = !1, a = 0; a < e.length; a++)if (e[a].id == c && null == e[a].getAttribute("HYP_dn")) {
          var b =
            1, h = c;
          do c = "" + h + "-" + b++; while (null != document.getElementById(c));
          e[a].id = c;
          b = !0;
          break
        }
        if (!1 == b)return
      }
      b = [];
      b = [];
      e = {};
      h = {};
      for (a = 0; a < b.length; a++)try {
        h[b[a].identifier] = b[a].name, e[b[a].name] = eval("(function(){return " + b[a].source + "})();")
      } catch (l) {
        window.console && window.console.log(l), e[b[a].name] = function () {
        }
      }
      f = new HYPE_456(d, c, {
          "10": {p: 1, n: "tps/i1/TB1_3X9IpXXXXXmXFXXrP178FXX-750-1334.jpg", g: "168", t: "@1x"},
          "2": {p: 1, n: "tps/i1/TB1kS0WIpXXXXbJXVXXo_0BIFXX-355-159.png", g: "71", t: "@1x"},
          "3": {p: 1, n: "tps/i3/TB1.EJVIpXXXXbYXVXXo_0BIFXX-355-159.png", g: "73", t: "@1x"},
          "11": {p: 1, n: "tps/i2/TB12DafIpXXXXb9XXXXrP178FXX-750-1334.jpg", g: "169", t: "@1x"},
          "4": {p: 2, n: "On%20the%20Floor.mp3", g: "82", t: "audio/mpeg"},
          "5": {p: 1, n: "tps/i4/TB1RwJ.IpXXXXb9XpXXWA_BHXXX-51-51.png", g: "86", o: true, t: "@1x"},
          "12": {p: 1, n: "tps/i3/TB1XIX_IpXXXXcrXpXXrP178FXX-750-1334.jpg", g: "170", t: "@1x"},
          "6": {p: 1, n: "tps/i1/TB1si8SIpXXXXX_aXXXqxFJVFXX-100-100.png", g: "86", o: true, t: "@2x"},
          "13": {p: 1, n: "tps/i4/TB1O7edIpXXXXc.XXXXrP178FXX-750-1334.jpg", g: "171", t: "@1x"},
          "7": {p: 1, n: "tps/i1/TB13oedIpXXXXXpXpXXkpw8JVXX-96-96.png", g: "157", t: "@1x"},
          "0": {p: 1, n: "tps/i3/TB1epx6IpXXXXa_XFXXqxFJVFXX-100-100.png", g: "24", t: "@1x"},
          "8": {p: 1, n: "tps/i3/TB1OTJ0IpXXXXXDXVXXrP178FXX-750-1334.jpg", g: "166", t: "@1x"},
          "14": {p: 1, n: "tps/i2/TB1rId6IpXXXXbtXFXXrP178FXX-750-1334.jpg", g: "172", t: "@1x"},
          "1": {p: 1, n: "tps/i4/TB1N.uXIpXXXXbwXpXXGPYdJXXX-356-159.png", g: "68", t: "@1x"},
          "9": {p: 1, n: "tps/i4/TB1nzybIpXXXXX4XpXXrP178FXX-750-1334.jpg", g: "167", t: "@1x"}
        }, "http://gtms03.alicdn.com", [], e, [{n: "\u672a\u547d\u540d\u573a\u666f", o: "1", X: [0]}, {
          n: "\u672a\u547d\u540d\u573a\u666f 2",
          o: "6",
          X: [1]
        }, {n: "\u672a\u547d\u540d\u573a\u666f 3", o: "9", X: [2]}, {
          n: "\u672a\u547d\u540d\u573a\u666f 4",
          o: "16",
          X: [3]
        }, {n: "\u672a\u547d\u540d\u573a\u666f 5", o: "21", X: [4]}, {
          n: "\u672a\u547d\u540d\u573a\u666f 6",
          o: "32",
          X: [5]
        }, {n: "\u672a\u547d\u540d\u573a\u666f 7", o: "77", X: [6]}], [{
          o: "3",
          I: {a: [{d: 0.80000000000000004, p: 1, g: 6, f: 1}]},
          p: "600px",
          x: 0,
          cA: false,
          Z: 1206,
          Y: 750,
          c: "#FFFFFF",
          L: [],
          bY: 1,
          d: 750,
          U: {},
          T: {
            "39": {
              i: "39",
              n: "\u672a\u547d\u540d\u65f6\u95f4\u7ebf",
              z: 1,
              b: [],
              a: [{f: "c", y: 0, z: 0.2, i: "b", e: 1064, s: 1142, o: "174"}, {
                f: "c",
                y: 0,
                z: 0.2,
                i: "e",
                e: 1.0000000000000002,
                s: 0,
                o: "174"
              }, {f: "c", y: 0.2, z: 0.1, i: "e", e: 0, s: 1, o: "174"}, {
                f: "c",
                y: 0.2,
                z: 0.1,
                i: "b",
                e: 1009,
                s: 1064,
                o: "174"
              }, {
                f: "c",
                p: 2,
                y: 1,
                z: 0,
                i: "ActionHandler",
                s: {a: [{i: 0, b: "39", p: 9, symbolOid: "2"}]},
                o: "39"
              }, {y: 1, i: "e", s: 0, z: 0, o: "174", f: "c"}, {y: 1, i: "b", s: 1009, z: 0, o: "174", f: "c"}],
              f: 30
            },
            kTimelineDefaultIdentifier: {
              i: "kTimelineDefaultIdentifier",
              n: "\u4e3b\u65f6\u95f4\u7ebf",
              z: 0.02,
              b: [],
              a: [{
                f: "c",
                p: 2,
                y: 0,
                z: 0.01,
                i: "ActionHandler",
                e: {a: [{b: "kTimelineDefaultIdentifier", symbolOid: "2", p: 7}]},
                s: {a: [{b: "39", p: 3, z: false, symbolOid: "2"}]},
                o: "kTimelineDefaultIdentifier"
              }, {
                f: "c",
                p: 2,
                y: 0.01,
                z: 0.01,
                i: "ActionHandler",
                e: {a: [{b: "kTimelineDefaultIdentifier", symbolOid: "2", p: 7}]},
                s: {a: [{b: "kTimelineDefaultIdentifier", symbolOid: "2", p: 7}]},
                o: "kTimelineDefaultIdentifier"
              }, {
                f: "c",
                p: 2,
                y: 0.02,
                z: 0,
                i: "ActionHandler",
                s: {a: [{b: "kTimelineDefaultIdentifier", symbolOid: "2", p: 7}]},
                o: "kTimelineDefaultIdentifier"
              }],
              f: 30
            }
          },
          bZ: 180,
          O: ["173", "174", "175"],
          v: {
            "173": {
              h: "86",
              p: "no-repeat",
              x: "visible",
              a: 663,
              q: "100% 100%",
              b: 32,
              j: "absolute",
              r: "none",
              c: 51,
              k: "div",
              z: 5,
              d: 51
            },
            "174": {
              w: "",
              h: "24",
              p: "no-repeat",
              x: "visible",
              a: 326,
              q: "100% 100%",
              b: 1142,
              j: "absolute",
              r: "inline",
              z: 3,
              k: "div",
              c: 100,
              d: 100,
              e: 0
            },
            "175": {
              w: "",
              h: "166",
              p: "no-repeat",
              x: "visible",
              a: 0,
              q: "100% 100%",
              b: -128,
              j: "absolute",
              r: "inline",
              c: 751,
              k: "div",
              z: 2,
              d: 1334
            }
          }
        }, {
          o: "8",
          I: {a: [{d: 0.80000000000000004, p: 1, g: 6, f: 1}]},
          p: "600px",
          x: 1,
          J: {a: [{d: 0.80000000000000004, p: 1, g: 7, f: 2}]},
          Z: 1206,
          cA: false,
          Y: 750,
          c: "#FFFFFF",
          L: [],
          bY: 1,
          d: 750,
          U: {},
          T: {
            "51": {
              i: "51",
              n: "\u672a\u547d\u540d\u65f6\u95f4\u7ebf",
              z: 1,
              b: [],
              a: [{f: "c", y: 0, z: 0.2, i: "b", e: 1086, s: 1164, o: "176"}, {
                f: "c",
                y: 0,
                z: 0.2,
                i: "e",
                e: 1,
                s: 0,
                o: "176"
              }, {f: "c", y: 0.2, z: 0.1, i: "e", e: 0, s: 1, o: "176"}, {
                f: "c",
                y: 0.2,
                z: 0.1,
                i: "b",
                e: 1031,
                s: 1086,
                o: "176"
              }, {
                f: "c",
                p: 2,
                y: 1,
                z: 0,
                i: "ActionHandler",
                s: {a: [{i: 0, b: "51", p: 9, symbolOid: "7"}]},
                o: "51"
              }, {y: 1, i: "b", s: 1031, z: 0, o: "176", f: "c"}, {y: 1, i: "e", s: 0, z: 0, o: "176", f: "c"}],
              f: 30
            },
            kTimelineDefaultIdentifier: {
              i: "kTimelineDefaultIdentifier",
              n: "\u4e3b\u65f6\u95f4\u7ebf",
              z: 0,
              b: [],
              a: [{
                f: "c",
                p: 2,
                y: 0,
                z: 0,
                i: "ActionHandler",
                s: {a: [{b: "51", p: 3, z: false, symbolOid: "7"}]},
                o: "kTimelineDefaultIdentifier"
              }],
              f: 30
            }
          },
          bZ: 180,
          O: ["176", "177"],
          v: {
            "176": {
              w: "",
              h: "24",
              p: "no-repeat",
              x: "visible",
              a: 325,
              q: "100% 100%",
              b: 1164,
              j: "absolute",
              r: "inline",
              z: 3,
              k: "div",
              c: 100,
              d: 100,
              e: 0
            },
            "177": {
              h: "167",
              p: "no-repeat",
              x: "visible",
              a: 0,
              q: "100% 100%",
              b: -128,
              j: "absolute",
              r: "inline",
              c: 750,
              k: "div",
              z: 2,
              d: 1334
            }
          }
        }, {
          o: "11",
          p: "600px",
          x: 2,
          J: {a: [{d: 0.80000000000000004, p: 1, g: 7, f: 2}]},
          Z: 1206,
          cA: false,
          Y: 750,
          c: "#FFFFFF",
          L: [],
          bY: 1,
          d: 750,
          U: {},
          T: {
            "52": {
              i: "52",
              n: "\u672a\u547d\u540d\u65f6\u95f4\u7ebf",
              z: 3,
              b: [],
              a: [{f: "c", y: 0, z: 0.2, i: "b", e: 1086, s: 1164, o: "181"}, {
                f: "c",
                y: 0,
                z: 0.2,
                i: "e",
                e: 1,
                s: 0,
                o: "181"
              }, {f: "g", y: 0, z: 1.15, i: "a", e: 153, s: -356, o: "178"}, {
                f: "g",
                y: 0,
                z: 1.15,
                i: "b",
                e: 763,
                s: 706,
                o: "178"
              }, {f: "g", y: 0.15, z: 1.15, i: "b", e: 885, s: 945, o: "182"}, {
                f: "g",
                y: 0.15,
                z: 1.15,
                i: "a",
                e: 137,
                s: 750,
                o: "182"
              }, {f: "c", y: 0.2, z: 0.1, i: "e", e: 0, s: 1, o: "181"}, {
                f: "c",
                y: 0.2,
                z: 0.1,
                i: "b",
                e: 1031,
                s: 1086,
                o: "181"
              }, {f: "g", y: 1, z: 1.15, i: "a", e: 122, s: -361, o: "179"}, {
                f: "g",
                y: 1,
                z: 1.15,
                i: "b",
                e: 1008,
                s: 945,
                o: "179"
              }, {f: "c", p: 2, y: 1, z: 0, i: "ActionHandler", s: {a: [{p: 9, i: 0}]}, o: "52"}, {
                y: 1,
                i: "b",
                s: 1031,
                z: 0,
                o: "181",
                f: "c"
              }, {y: 1, i: "e", s: 0, z: 0, o: "181", f: "c"}, {
                y: 1.15,
                i: "b",
                s: 763,
                z: 0,
                o: "178",
                f: "c"
              }, {y: 1.15, i: "a", s: 153, z: 0, o: "178", f: "c"}, {
                f: "c",
                y: 2,
                z: 0.17,
                i: "b",
                e: 1018,
                s: 1008,
                o: "184"
              }, {f: "c", y: 2, z: 0.17, i: "a", e: 25, s: -112, o: "184"}, {
                y: 2,
                i: "b",
                s: 885,
                z: 0,
                o: "182",
                f: "c"
              }, {y: 2, i: "a", s: 137, z: 0, o: "182", f: "c"}, {
                f: "c",
                y: 2.04,
                z: 0.2,
                i: "b",
                e: 885,
                s: 869,
                o: "185"
              }, {f: "c", y: 2.04, z: 0.2, i: "a", e: 36, s: -106, o: "185"}, {
                f: "c",
                y: 2.11,
                z: 0.19,
                i: "a",
                e: 50,
                s: -96,
                o: "183"
              }, {f: "c", y: 2.11, z: 0.19, i: "b", e: 763, s: 741, o: "183"}, {
                y: 2.15,
                i: "a",
                s: 122,
                z: 0,
                o: "179",
                f: "c"
              }, {y: 2.15, i: "b", s: 1008, z: 0, o: "179", f: "c"}, {
                y: 2.17,
                i: "b",
                s: 1018,
                z: 0,
                o: "184",
                f: "c"
              }, {y: 2.17, i: "a", s: 25, z: 0, o: "184", f: "c"}, {
                y: 2.24,
                i: "a",
                s: 36,
                z: 0,
                o: "185",
                f: "c"
              }, {y: 2.24, i: "b", s: 885, z: 0, o: "185", f: "c"}, {
                y: 3,
                i: "a",
                s: 50,
                z: 0,
                o: "183",
                f: "c"
              }, {y: 3, i: "b", s: 763, z: 0, o: "183", f: "c"}],
              f: 30
            },
            kTimelineDefaultIdentifier: {
              i: "kTimelineDefaultIdentifier",
              n: "\u4e3b\u65f6\u95f4\u7ebf",
              z: 0,
              b: [],
              a: [{
                f: "c",
                p: 2,
                y: 0,
                z: 0,
                i: "ActionHandler",
                s: {a: [{b: "52", p: 3, z: false, symbolOid: "10"}]},
                o: "kTimelineDefaultIdentifier"
              }],
              f: 30
            }
          },
          bZ: 180,
          O: ["183", "185", "184", "178", "182", "179", "181", "180"],
          v: {
            "180": {
              w: "",
              h: "168",
              p: "no-repeat",
              x: "visible",
              a: 0,
              q: "100% 100%",
              b: -124,
              j: "absolute",
              r: "inline",
              z: 1,
              k: "div",
              c: 750,
              d: 1334,
              e: 1
            },
            "183": {
              h: "157",
              p: "no-repeat",
              x: "visible",
              a: -96,
              q: "100% 100%",
              b: 741,
              j: "absolute",
              r: "inline",
              c: 96,
              k: "div",
              z: 11,
              d: 96
            },
            "179": {
              h: "73",
              p: "no-repeat",
              x: "visible",
              a: -361,
              q: "100% 100%",
              b: 945,
              j: "absolute",
              r: "inline",
              aA: {a: [{d: 0.80000000000000004, p: 1, g: 2, e: "32"}]},
              k: "div",
              z: 6,
              d: 159,
              c: 355,
              aP: "pointer"
            },
            "182": {
              w: "",
              h: "71",
              p: "no-repeat",
              x: "visible",
              a: 750,
              q: "100% 100%",
              b: 945,
              j: "absolute",
              r: "inline",
              aA: {a: [{d: 0.80000000000000004, p: 1, g: 2, e: "21"}]},
              k: "div",
              z: 7,
              d: 159,
              c: 355,
              aP: "pointer"
            },
            "185": {
              h: "157",
              p: "no-repeat",
              x: "visible",
              a: -106,
              q: "100% 100%",
              b: 869,
              j: "absolute",
              r: "inline",
              c: 96,
              k: "div",
              z: 10,
              d: 96
            },
            "178": {
              h: "68",
              p: "no-repeat",
              x: "visible",
              a: -356,
              q: "100% 100%",
              b: 706,
              j: "absolute",
              r: "inline",
              aA: {a: [{d: 0.80000000000000004, p: 1, g: 2, e: "16"}]},
              k: "div",
              z: 8,
              d: 159,
              c: 356,
              aP: "pointer"
            },
            "181": {
              w: "",
              h: "24",
              p: "no-repeat",
              x: "visible",
              a: 325,
              q: "100% 100%",
              b: 1164,
              j: "absolute",
              r: "none",
              z: 5,
              k: "div",
              c: 100,
              d: 100,
              e: 0
            },
            "184": {
              w: "",
              h: "157",
              p: "no-repeat",
              x: "visible",
              a: -112,
              q: "100% 100%",
              b: 1008,
              j: "absolute",
              r: "inline",
              c: 96,
              k: "div",
              z: 9,
              d: 96
            }
          }
        }, {
          o: "18",
          I: {a: [{d: 0.80000000000000004, p: 1, g: 6, e: "77"}]},
          p: "600px",
          x: 3,
          J: {a: [{d: 0.80000000000000004, p: 1, g: 7, e: "9"}]},
          Z: 1206,
          cA: false,
          Y: 750,
          c: "#FFFFFF",
          L: [],
          bY: 1,
          d: 750,
          U: {},
          T: {
            "53": {
              i: "53",
              n: "\u672a\u547d\u540d\u65f6\u95f4\u7ebf",
              z: 1,
              b: [],
              a: [{f: "c", y: 0, z: 0.2, i: "b", e: 1086, s: 1164, o: "186"}, {
                f: "c",
                y: 0,
                z: 0.2,
                i: "e",
                e: 1,
                s: 0,
                o: "186"
              }, {f: "c", y: 0.2, z: 0.1, i: "e", e: 0, s: 1, o: "186"}, {
                f: "c",
                y: 0.2,
                z: 0.1,
                i: "b",
                e: 1031,
                s: 1086,
                o: "186"
              }, {
                f: "c",
                p: 2,
                y: 1,
                z: 0,
                i: "ActionHandler",
                s: {a: [{i: 0, b: "53", p: 9, symbolOid: "17"}]},
                o: "53"
              }, {y: 1, i: "b", s: 1031, z: 0, o: "186", f: "c"}, {y: 1, i: "e", s: 0, z: 0, o: "186", f: "c"}],
              f: 30
            },
            kTimelineDefaultIdentifier: {
              i: "kTimelineDefaultIdentifier",
              n: "\u4e3b\u65f6\u95f4\u7ebf",
              z: 0,
              b: [],
              a: [{
                f: "c",
                p: 2,
                y: 0,
                z: 0,
                i: "ActionHandler",
                s: {a: [{b: "53", p: 3, z: false, symbolOid: "17"}]},
                o: "kTimelineDefaultIdentifier"
              }],
              f: 30
            }
          },
          bZ: 180,
          O: ["186", "187"],
          v: {
            "186": {
              w: "",
              h: "24",
              p: "no-repeat",
              x: "visible",
              a: 325,
              q: "100% 100%",
              b: 1164,
              j: "absolute",
              r: "inline",
              z: 2,
              k: "div",
              c: 100,
              d: 100,
              e: 0
            },
            "187": {
              h: "169",
              p: "no-repeat",
              x: "visible",
              a: 0,
              q: "100% 100%",
              b: -104,
              j: "absolute",
              r: "inline",
              c: 750,
              k: "div",
              z: 1,
              d: 1334
            }
          }
        }, {
          o: "23",
          I: {a: [{d: 0.80000000000000004, p: 1, g: 6, e: "77"}]},
          p: "600px",
          x: 4,
          J: {a: [{d: 0.80000000000000004, p: 1, g: 7, e: "9"}]},
          Z: 1206,
          cA: false,
          Y: 750,
          c: "#FFFFFF",
          L: [],
          bY: 1,
          d: 750,
          U: {},
          T: {
            "54": {
              i: "54",
              n: "\u672a\u547d\u540d\u65f6\u95f4\u7ebf",
              z: 1,
              b: [],
              a: [{f: "c", y: 0, z: 0.2, i: "b", e: 1086, s: 1164, o: "188"}, {
                f: "c",
                y: 0,
                z: 0.2,
                i: "e",
                e: 1,
                s: 0,
                o: "188"
              }, {f: "c", y: 0.2, z: 0.1, i: "e", e: 0, s: 1, o: "188"}, {
                f: "c",
                y: 0.2,
                z: 0.1,
                i: "b",
                e: 1031,
                s: 1086,
                o: "188"
              }, {
                f: "c",
                p: 2,
                y: 1,
                z: 0,
                i: "ActionHandler",
                s: {a: [{i: 0, b: "54", p: 9, symbolOid: "22"}]},
                o: "54"
              }, {y: 1, i: "b", s: 1031, z: 0, o: "188", f: "c"}, {y: 1, i: "e", s: 0, z: 0, o: "188", f: "c"}],
              f: 30
            },
            kTimelineDefaultIdentifier: {
              i: "kTimelineDefaultIdentifier",
              n: "\u4e3b\u65f6\u95f4\u7ebf",
              z: 0,
              b: [],
              a: [{
                f: "c",
                p: 2,
                y: 0,
                z: 0,
                i: "ActionHandler",
                s: {a: [{b: "54", p: 3, z: false, symbolOid: "22"}]},
                o: "kTimelineDefaultIdentifier"
              }],
              f: 30
            }
          },
          bZ: 180,
          O: ["188", "189"],
          v: {
            "188": {
              w: "",
              h: "24",
              p: "no-repeat",
              x: "visible",
              a: 325,
              q: "100% 100%",
              b: 1164,
              j: "absolute",
              r: "inline",
              z: 2,
              k: "div",
              c: 100,
              d: 100,
              e: 0
            },
            "189": {
              h: "170",
              p: "no-repeat",
              x: "visible",
              a: 0,
              q: "100% 100%",
              b: -128,
              j: "absolute",
              r: "inline",
              c: 751,
              k: "div",
              z: 1,
              d: 1334
            }
          }
        }, {
          o: "34",
          I: {a: [{d: 0.80000000000000004, p: 1, g: 6, e: "77"}]},
          p: "600px",
          x: 5,
          J: {a: [{d: 0.80000000000000004, p: 1, g: 7, e: "9"}]},
          Z: 1206,
          cA: false,
          Y: 750,
          c: "#FFFFFF",
          L: [],
          bY: 1,
          d: 750,
          U: {},
          T: {
            "55": {
              i: "55",
              n: "\u672a\u547d\u540d\u65f6\u95f4\u7ebf",
              z: 1,
              b: [],
              a: [{f: "c", y: 0, z: 0.2, i: "b", e: 1076, s: 1154, o: "190"}, {
                f: "c",
                y: 0,
                z: 0.2,
                i: "e",
                e: 1,
                s: 0,
                o: "190"
              }, {f: "c", y: 0.2, z: 0.1, i: "e", e: 0, s: 1, o: "190"}, {
                f: "c",
                y: 0.2,
                z: 0.1,
                i: "b",
                e: 1021,
                s: 1076,
                o: "190"
              }, {
                f: "c",
                p: 2,
                y: 1,
                z: 0,
                i: "ActionHandler",
                s: {a: [{i: 0, b: "55", p: 9, symbolOid: "33"}]},
                o: "55"
              }, {y: 1, i: "b", s: 1021, z: 0, o: "190", f: "c"}, {y: 1, i: "e", s: 0, z: 0, o: "190", f: "c"}],
              f: 30
            },
            kTimelineDefaultIdentifier: {
              i: "kTimelineDefaultIdentifier",
              n: "\u4e3b\u65f6\u95f4\u7ebf",
              z: 0,
              b: [],
              a: [{
                f: "c",
                p: 2,
                y: 0,
                z: 0,
                i: "ActionHandler",
                s: {a: [{b: "55", p: 3, z: false, symbolOid: "33"}]},
                o: "kTimelineDefaultIdentifier"
              }],
              f: 30
            }
          },
          bZ: 180,
          O: ["190", "191"],
          v: {
            "190": {
              w: "",
              h: "24",
              p: "no-repeat",
              x: "visible",
              a: 325,
              q: "100% 100%",
              b: 1154,
              j: "absolute",
              r: "inline",
              z: 2,
              k: "div",
              c: 100,
              d: 100,
              e: 0
            },
            "191": {
              h: "171",
              p: "no-repeat",
              x: "visible",
              a: 0,
              q: "100% 100%",
              b: -92,
              j: "absolute",
              r: "inline",
              c: 758,
              k: "div",
              z: 1,
              d: 1346
            }
          }
        }, {
          o: "79",
          I: {a: [{d: 0.80000000000000004, p: 1, g: 6, e: "1"}]},
          p: "600px",
          x: 6,
          J: {a: [{d: 0.80000000000000004, p: 1, g: 7, e: "9"}]},
          Z: 1206,
          cA: false,
          Y: 750,
          c: "#FFFFFF",
          L: [],
          bY: 1,
          d: 750,
          U: {},
          T: {
            kTimelineDefaultIdentifier: {
              i: "kTimelineDefaultIdentifier",
              n: "\u4e3b\u65f6\u95f4\u7ebf",
              z: 0,
              b: [],
              a: [],
              f: 30
            }
          },
          bZ: 180,
          O: ["192"],
          v: {
            "192": {
              h: "172",
              p: "no-repeat",
              x: "visible",
              a: 0,
              q: "100% 100%",
              b: -120,
              j: "absolute",
              r: "inline",
              c: 758,
              k: "div",
              z: 1,
              d: 1346
            }
          }
        }], {}, h, {g: [[0, 0, 0.0425, 0.22, 0.089, 1.373, 0.169, 1.373], [0.169, 1.373, 0.223, 1.373, 0.2656, 0.868, 0.356, 0.868], [0.356, 0.868, 0.4085, 0.868, 0.457, 1.047, 0.544, 1.047], [0.544, 1.047, 0.5976, 1.047, 0.637, 0.984, 0.731, 0.984], [0.731, 0.984, 0.794, 0.984, 0.829, 1.006, 0.919, 1.006], [0.919, 1.006, 0.953, 1.006, 1, 1, 1, 1]]},
        0, false, false, true, -1, true, true, true);
      g[d] = f.API;
      document.getElementById(c).setAttribute("HYP_dn", d);
      f.z_o(this.body)
    }
  })();
})();
