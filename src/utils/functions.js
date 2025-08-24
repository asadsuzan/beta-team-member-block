import { produce } from "immer";

export const updateData = (attr, value, ...props) => {
  if (props.length === 0) {
    return value;
  }
  const [currentProp, ...remainingProps] = props;
  if (remainingProps.length === 0) {
    return produce(attr, draft => {
      draft[currentProp] = value;
    });
  }
  return produce(attr, draft => {
    if (!Object.prototype.hasOwnProperty.call(draft, currentProp)) {
      draft[currentProp] = {};
    }
    draft[currentProp] = updateData(draft[currentProp], value, ...remainingProps);
  });
};


export const generateId = (itemArray) => {
  const ids = itemArray.map((item) => item.id);
  const maxId = Math.max(...ids);
  return maxId + 1;
};


export const themeSwitch = (theme = "default", attributes) => produce(attributes, (draft) => {
  draft["theme"] = theme;

  switch (theme) {
    case "default":
      draft["styles"] = {
        "section": {
          "padding": {
            "desktop": {
              "top": "80px",
              "right": "0px",
              "bottom": "80px",
              "left": "0px"
            },
            "tablet": {
              "top": "50px",
              "right": "0px",
              "bottom": "50px",
              "left": "0px"
            },
            "mobile": {
              "top": "30px",
              "right": "0px",
              "bottom": "30px",
              "left": "0px"
            }
          },
          "margin": {
            "desktop": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "tablet": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "mobile": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            }
          },
          "radius": {
            "top": "0px",
            "right": "0px",
            "bottom": "0px",
            "left": "0px"
          },
          "bg": {
            "color": "linear-gradient(to bottom right, #9333ea, #db2777, #f97316)"
          }
        },
        "header": {
          "margin": {
            "desktop": {
              "top": "0px",
              "right": "0px",
              "bottom": "64px",
              "left": "0px"
            },
            "tablet": {
              "top": "0px",
              "right": "0px",
              "bottom": "40px",
              "left": "0px"
            },
            "mobile": {
              "top": "0px",
              "right": "0px",
              "bottom": "20px",
              "left": "0px"
            }
          },
          "padding": {
            "desktop": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "tablet": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "mobile": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            }
          },
          "textAlign": "center",
          "bg": {
            "color": ""
          }
        },
        "title": {
          "typo": {
            "fontWeight": 700,
            "fontSize": {
              "desktop": 48,
              "tablet": 32,
              "mobile": 24
            },
            "lineHeight": 1,
            "fontFamily": "ui-sans-serif, system-ui",
            "textTransform": "capitalize"
          },
          "margin": {
            "desktop": {
              "top": "0px",
              "right": "0px",
              "bottom": "24px",
              "left": "0px"
            },
            "tablet": {
              "top": "0px",
              "right": "0px",
              "bottom": "18px",
              "left": "0px"
            },
            "mobile": {
              "top": "0px",
              "right": "0px",
              "bottom": "15px",
              "left": "0px"
            }
          },
          "color": "#ffffff"
        },
        "subTitle": {
          "typo": {
            "fontSize": {
              "desktop": 20,
              "tablet": 18,
              "mobile": 16
            },
            "fontFamily": "ui-sans-serif, system-ui",
            "lineHeight": "1.75rem"
          },
          "margin": {
            "desktop": {
              "top": "0px",
              "right": "0px",
              "bottom": "0",
              "left": "0px"
            },
            "tablet": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "mobile": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            }
          },
          "color": "#E6E6E6"
        },
        "card": {
          "margin": {
            "desktop": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "tablet": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "mobile": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            }
          },
          "padding": {
            "desktop": {
              "top": "24px",
              "right": "24px",
              "bottom": "24px",
              "left": "24px"
            },
            "tablet": {
              "top": "24px",
              "right": "24px",
              "bottom": "24px",
              "left": "24px"
            },
            "mobile": {
              "top": "24px",
              "right": "24px",
              "bottom": "24px",
              "left": "24px"
            }
          },
          "border": {
            "width": "1px",
            "style": "solid",
            "color": "#ffffff33"
          },
          "radius": {
            "top": "24px",
            "right": "24px",
            "bottom": "24px",
            "left": "24px"
          }
        },
        "img": {
          "wrapper": {
            "margin": {
              "desktop": {
                "top": "0px",
                "right": "0px",
                "bottom": "24px",
                "left": "0px"
              },
              "tablet": {
                "top": "0px",
                "right": "0px",
                "bottom": "18px",
                "left": "0px"
              },
              "mobile": {
                "top": "0px",
                "right": "0px",
                "bottom": "18px",
                "left": "0px"
              }
            },
            "padding": {
              "desktop": {
                "top": "0px",
                "right": "0px",
                "bottom": "0px",
                "left": "0px"
              },
              "tablet": {
                "top": "0px",
                "right": "0px",
                "bottom": "0px",
                "left": "0px"
              },
              "mobile": {
                "top": "0px",
                "right": "0px",
                "bottom": "0px",
                "left": "0px"
              }
            },
            "radius": {
              "top": "16px",
              "right": "16px",
              "bottom": "16px",
              "left": "16px"
            },
            "border": {
              "width": "0px",
              "style": "solid",
              "color": "#fff"
            }
          },
          "avatar": {
            "radius": {
              "top": "16px",
              "right": "16px",
              "bottom": "16px",
              "left": "16px"
            },
            "height": "256px",
            "width": "100%"
          }
        },
        "cardContent": {
          "textAlign": "center",
          "name": {
            "typo": {
              "fontSize": {
                "desktop": 20,
                "tablet": 18,
                "mobile": 16
              },
              "fontWeight": 700,
              "lineHeight": "1.75rem",
              "fontFamily": "ui-sans-serif, system-ui",
              "textTransform": "capitalize"
            },
            "color": "#ffffff",
            "margin": {
              "desktop": {
                "top": "0px",
                "right": "0px",
                "bottom": "8px",
                "left": "0px"
              },
              "tablet": {
                "top": "0px",
                "right": "0px",
                "bottom": "8px",
                "left": "0px"
              },
              "mobile": {
                "top": "0px",
                "right": "0px",
                "bottom": "8px",
                "left": "0px"
              }
            }
          },
          "role": {
            "typo": {
              "fontSize": {
                "desktop": 14,
                "tablet": 14,
                "mobile": 12
              },
              "fontWeight": 600,
              "lineHeight": "1.25rem",
              "letterSpace": "0.05em",
              "textTransform": "uppercase",
              "fontFamily": "ui-sans-serif, system-ui"
            },
            "color": "#facc15",
            "margin": {
              "desktop": {
                "top": "0px",
                "right": "0px",
                "bottom": "12px",
                "left": "0px"
              },
              "tablet": {
                "top": "0px",
                "right": "0px",
                "bottom": "12px",
                "left": "0px"
              },
              "mobile": {
                "top": "0px",
                "right": "0px",
                "bottom": "12px",
                "left": "0px"
              }
            }
          },
          "bio": {
            "typo": {
              "fontSize": {
                "desktop": 14,
                "tablet": 12,
                "mobile": 12
              },
              "lineHeight": "1.25rem",

              "fontFamily": "ui-sans-serif, system-ui"
            },
            "color": "#fffc",
            "margin": {
              "desktop": {
                "top": "0px",
                "right": "0px",
                "bottom": "16px",
                "left": "0px"
              },
              "tablet": {
                "top": "0px",
                "right": "0px",
                "bottom": "16px",
                "left": "0px"
              },
              "mobile": {
                "top": "0px",
                "right": "0px",
                "bottom": "16px",
                "left": "0px"
              }
            }
          },
          "social": {
            "gapX": "0.75rem",
            "justifyContent": "center"
          },
          "button": {
            "height": "40px",
            "width": "40px",
            "padding": {
              "desktop": {
                "top": "0px",
                "right": "0px",
                "bottom": "0px",
                "left": "0px"
              },
              "tablet": {
                "top": "0px",
                "right": "0px",
                "bottom": "0px",
                "left": "0px"
              },
              "mobile": {
                "top": "0px",
                "right": "0px",
                "bottom": "0px",
                "left": "0px"
              }
            },
            "bg": {
              "color": "#fff3"
            },
            "hover": {
              "bg": {
                "color": "#ffffff4d"
              }
            },
            "border": {
              "width": "0px",
              "style": "solid",
              "color": "#ffffff"
            },
            "radius": 50,
            "icon": {
              "size": 18,
              "fill": "#ffffff",
              "hover": {
                "fill": "#ffffff"
              }
            }
          },
          "badge": {
            "height": "50px",
            "width": "50px",

            "bg": {
              "color": ""
            },
            "hover": {
              "bg": {
                "color": ""
              }
            },
            "radius": 50,
            "icon": {
              "size": 24,
              "fill": "#000000",
              "hover": {
                "fill": "#000000"
              }
            }
          },
          "location": {
            "typo": {
              "fontSize": {
                "desktop": 14,
                "tablet": 12,
                "mobile": 12
              },
              "lineHeight": 1.3,
              "fontFamily": "ui-sans-serif, system-ui"
            },
            "color": "#6b7280"
          }
        }
      }
      draft["section"] = {
        "headline": "Creative Minds",
        "slogan": "Bold thinkers, creative doers, and passionate innovators"
      }

      draft['columns'] = {
        "desktop": 4,
        "tablet": 2,
        "mobile": 1,
        "gapX": "1.5rem",
        "gapY": "2rem"

      }


      draft["teamMembers"] = [...draft?.teamMembers]
      break;


    // theme two

    case "theme2":
      draft["styles"] = {
        "section": {
          "padding": {
            "desktop": {
              "top": "80px",
              "right": "0px",
              "bottom": "80px",
              "left": "0px"
            },
            "tablet": {
              "top": "50px",
              "right": "0px",
              "bottom": "50px",
              "left": "0px"
            },
            "mobile": {
              "top": "30px",
              "right": "0px",
              "bottom": "30px",
              "left": "0px"
            }
          },
          "margin": {
            "desktop": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "tablet": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "mobile": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            }
          },
          "radius": {
            "top": "0px",
            "right": "0px",
            "bottom": "0px",
            "left": "0px"
          },
          "bg": {
            "color": "#ffff"
          }
        },
        "header": {
          "margin": {
            "desktop": {
              "top": "0px",
              "right": "0px",
              "bottom": "64px",
              "left": "0px"
            },
            "tablet": {
              "top": "0px",
              "right": "0px",
              "bottom": "40px",
              "left": "0px"
            },
            "mobile": {
              "top": "0px",
              "right": "0px",
              "bottom": "20px",
              "left": "0px"
            }
          },
          "padding": {
            "desktop": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "tablet": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "mobile": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            }
          },
          "textAlign": "center",
          "bg": {
            "color": ""
          }
        },
        "title": {
          "typo": {
            "fontWeight": 700,
            "fontSize": {
              "desktop": 40,
              "tablet": 24,
              "mobile": 18
            },
            "textTransform": "capitalize",
            "fontFamily": "ui-sans-serif, system-ui"
          },
          "margin": {
            "desktop": {
              "top": "0px",
              "right": "0px",
              "bottom": "16px",
              "left": "0px"
            },
            "tablet": {
              "top": "0px",
              "right": "0px",
              "bottom": "14px",
              "left": "0px"
            },
            "mobile": {
              "top": "0px",
              "right": "0px",
              "bottom": "12px",
              "left": "0px"
            }
          },
          "color": "#111827"
        },
        "subTitle": {
          "typo": {
            "fontSize": {
              "desktop": 20,
              "tablet": 18,
              "mobile": 16
            },
            "lineHeight": 1.6,
            "fontFamily": "ui-sans-serif, system-ui",

          },
          "margin": {
            "desktop": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "tablet": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "mobile": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            }
          },
          "color": "#6b7280"
        },
        "card": {
          "margin": {
            "desktop": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "tablet": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "mobile": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            }
          },
          "padding": {
            "desktop": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "tablet": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "mobile": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            }
          },
          "border": {
            "width": "1px",
            "style": "solid",
            "color": "#fff",

          },
          "radius": {
            "top": "8px",
            "right": "8px",
            "bottom": "8px",
            "left": "8px"
          }
        },
        "img": {
          "wrapper": {
            "margin": {
              "desktop": {
                "top": "0px",
                "right": "0px",
                "bottom": "24px",
                "left": "0px"
              },
              "tablet": {
                "top": "0px",
                "right": "0px",
                "bottom": "18px",
                "left": "0px"
              },
              "mobile": {
                "top": "0px",
                "right": "0px",
                "bottom": "18px",
                "left": "0px"
              }
            },
            "padding": {
              "desktop": {
                "top": "0px",
                "right": "0px",
                "bottom": "0px",
                "left": "0px"
              },
              "tablet": {
                "top": "0px",
                "right": "0px",
                "bottom": "0px",
                "left": "0px"
              },
              "mobile": {
                "top": "0px",
                "right": "0px",
                "bottom": "0px",
                "left": "0px"
              }
            },
            "radius": {
              "top": "16px",
              "right": "16px",
              "bottom": "16px",
              "left": "16px"
            },
            "border": {
              "width": "0px",
              "style": "solid",
              "color": "#fff"
            }
          },
          "avatar": {
            "radius": {
              "top": "16px",
              "right": "16px",
              "bottom": "16px",
              "left": "16px"
            },
            "height": "320px",
            "width": "100%"
          }
        },
        "cardContent": {
          "textAlign": "center",
          "name": {
            "typo": {
              "fontSize": {
                "desktop": 20,
                "tablet": 18,
                "mobile": 16
              },
              "fontWeight": 600,
              "lineHeight": 1.3,
              "fontFamily": "ui-sans-serif, system-ui"
            },
            "color": "#111827",
            "margin": {
              "desktop": {
                "top": "0px",
                "right": "0px",
                "bottom": "8px",
                "left": "0px"
              },
              "tablet": {
                "top": "0px",
                "right": "0px",
                "bottom": "8px",
                "left": "0px"
              },
              "mobile": {
                "top": "0px",
                "right": "0px",
                "bottom": "8px",
                "left": "0px"
              }
            }
          },
          "role": {
            "typo": {
              "fontSize": {
                "desktop": 20,
                "tablet": 16,
                "mobile": 14
              },
              "fontWeight": 500,
              "lineHeight": 1.5,
              "letterSpace": "0.05em",
              "fontFamily": "ui-sans-serif, system-ui"
            },
            "color": "#4b5563",
            "margin": {
              "desktop": {
                "top": "0px",
                "right": "0px",
                "bottom": "12px",
                "left": "0px"
              },
              "tablet": {
                "top": "0px",
                "right": "0px",
                "bottom": "12px",
                "left": "0px"
              },
              "mobile": {
                "top": "0px",
                "right": "0px",
                "bottom": "12px",
                "left": "0px"
              }
            }
          },
          "bio": {
            "typo": {
              "fontSize": {
                "desktop": 14,
                "tablet": 12,
                "mobile": 12
              },
              "lineHeight": 1.5,
              "letterSpacing": "0.05em",
              "textTransform": "",
              "fontFamily": "ui-sans-serif, system-ui"
            },
            "color": "#6b7280",
            "margin": {
              "desktop": {
                "top": "0px",
                "right": "0px",
                "bottom": "16px",
                "left": "0px"
              },
              "tablet": {
                "top": "0px",
                "right": "0px",
                "bottom": "16px",
                "left": "0px"
              },
              "mobile": {
                "top": "0px",
                "right": "0px",
                "bottom": "16px",
                "left": "0px"
              }
            }
          },
          "social": {
            "gapX": "0.75rem",
            "justifyContent": "center"
          },
          "button": {
            "height": "20px",
            "width": "20px",
            "padding": {
              "desktop": {
                "top": "0px",
                "right": "0px",
                "bottom": "0px",
                "left": "0px"
              },
              "tablet": {
                "top": "0px",
                "right": "0px",
                "bottom": "0px",
                "left": "0px"
              },
              "mobile": {
                "top": "0px",
                "right": "0px",
                "bottom": "0px",
                "left": "0px"
              }
            },
            "bg": {
              "color": "transparent"
            },
            "hover": {
              "bg": {
                "color": "transparent"
              }
            },
            "border": {
              "width": "0px",
              "style": "solid",
              "color": "#ffffff"
            },
            "radius": 50,
            "icon": {
              "size": 18,
              "fill": "#9da0a7",
              "hover": {
                "fill": "rgb(37 99 235)"
              }
            }
          },
          "badge": {
            "height": "57px",
            "width": "57px",
            "bg": {
              "color": ""
            },
            "hover": {
              "bg": {
                "color": ""
              }
            },
            "radius": 50,
            "icon": {
              "size": 24,
              "fill": "#000000",
              "hover": {
                "fill": "#000000"
              }
            }
          },
          "location": {
            "typo": {
              "fontSize": {
                "desktop": 14,
                "tablet": 12,
                "mobile": 12
              },
              "lineHeight": 1.3,
              "fontFamily": "ui-sans-serif, system-ui"
            },
            "color": "#6b7280"
          }
        }
      }
      draft["section"] = {
        "headline": "Meet Our Team",
        "slogan": "Talented individuals united by passion for exceptional creative work"
      }
      draft['columns'] = {
        "desktop": 4,
        "tablet": 2,
        "mobile": 1,
        "gapX": "1.5rem",
        "gapY": "2rem"

      }
      draft["teamMembers"] = [...draft?.teamMembers]
      break;


    // theme three 
    case "theme3":
      draft["styles"] = {
        "section": {
          "padding": {
            "desktop": {
              "top": "80px",
              "right": "0px",
              "bottom": "80px",
              "left": "0px"
            },
            "tablet": {
              "top": "50px",
              "right": "0px",
              "bottom": "50px",
              "left": "0px"
            },
            "mobile": {
              "top": "30px",
              "right": "0px",
              "bottom": "30px",
              "left": "0px"
            }
          },
          "margin": {
            "desktop": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "tablet": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "mobile": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            }
          },
          "radius": {
            "top": "0px",
            "right": "0px",
            "bottom": "0px",
            "left": "0px"
          },
          "bg": {
            "color": "#000"
          }
        },
        "header": {
          "margin": {
            "desktop": {
              "top": "0px",
              "right": "0px",
              "bottom": "64px",
              "left": "0px"
            },
            "tablet": {
              "top": "0px",
              "right": "0px",
              "bottom": "40px",
              "left": "0px"
            },
            "mobile": {
              "top": "0px",
              "right": "0px",
              "bottom": "20px",
              "left": "0px"
            }
          },
          "padding": {
            "desktop": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "tablet": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "mobile": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            }
          },
          "textAlign": "center",
          "bg": {
            "color": ""
          }
        },
        "title": {
          "typo": {
            "fontWeight": 700,
            "fontSize": {
              "desktop": 60,
              "tablet": 28,
              "mobile": 20
            },
            "textTransform": "capitalize",
            "fontFamily": "ui-sans-serif, system-ui"
          },
          "margin": {
            "desktop": {
              "top": "0px",
              "right": "0px",
              "bottom": "16px",
              "left": "0px"
            },
            "tablet": {
              "top": "0px",
              "right": "0px",
              "bottom": "14px",
              "left": "0px"
            },
            "mobile": {
              "top": "0px",
              "right": "0px",
              "bottom": "12px",
              "left": "0px"
            }
          },
          "color": "#f7a01b"
        },
        "subTitle": {
          "typo": {
            "fontSize": {
              "desktop": 20,
              "tablet": 18,
              "mobile": 16
            },
            "lineHeight": "1.75rem",

            "fontFamily": "ui-sans-serif, system-ui",


          },
          "margin": {
            "desktop": {
              "top": "0px",
              "right": "0px",
              "bottom": "0",
              "left": "0px"
            },
            "tablet": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "mobile": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            }
          },
          "color": "#CCCCCC"
        },
        "card": {
          "margin": {
            "desktop": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "tablet": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "mobile": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            }
          },
          "padding": {
            "desktop": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "tablet": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "mobile": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            }
          },
          "border": {
            "width": "0px",
            "style": "solid",
            "color": "#fff",

          },
          "radius": {
            "top": "8px",
            "right": "8px",
            "bottom": "8px",
            "left": "8px"
          }
        },
        "img": {
          "wrapper": {
            "margin": {
              "desktop": {
                "top": "0px",
                "right": "0px",
                "bottom": "24px",
                "left": "0px"
              },
              "tablet": {
                "top": "0px",
                "right": "0px",
                "bottom": "18px",
                "left": "0px"
              },
              "mobile": {
                "top": "0px",
                "right": "0px",
                "bottom": "18px",
                "left": "0px"
              }
            },
            "padding": {
              "desktop": {
                "top": "0px",
                "right": "0px",
                "bottom": "0px",
                "left": "0px"
              },
              "tablet": {
                "top": "0px",
                "right": "0px",
                "bottom": "0px",
                "left": "0px"
              },
              "mobile": {
                "top": "0px",
                "right": "0px",
                "bottom": "0px",
                "left": "0px"
              }
            },
            "radius": {
              "top": "16px",
              "right": "16px",
              "bottom": "16px",
              "left": "16px"
            },
            "border": {
              "width": "0px",
              "style": "solid",
              "color": "#fff"
            }
          },
          "avatar": {
            "radius": {
              "top": "16px",
              "right": "16px",
              "bottom": "16px",
              "left": "16px"
            },
            "height": "320px",
            "width": "100%"
          }
        },
        "cardContent": {
          "textAlign": "left",
          "name": {
            "typo": {
              "fontSize": {
                "desktop": 24,
                "tablet": 18,
                "mobile": 16
              },
              "fontWeight": 700,
              "lineHeight": 1.3,
              "fontFamily": "ui-sans-serif, system-ui"
            },
            "color": "#ffffff",
            "margin": {
              "desktop": {
                "top": "0px",
                "right": "0px",
                "bottom": "8px",
                "left": "0px"
              },
              "tablet": {
                "top": "0px",
                "right": "0px",
                "bottom": "8px",
                "left": "0px"
              },
              "mobile": {
                "top": "0px",
                "right": "0px",
                "bottom": "8px",
                "left": "0px"
              }
            }
          },
          "role": {
            "typo": {
              "fontSize": {
                "desktop": 14,
                "tablet": 14,
                "mobile": 12
              },
              "fontWeight": 600,
              "lineHeight": 1.5,
              "letterSpace": "0.05em",
              "fontFamily": "ui-sans-serif, system-ui",
              "textTransform": "uppercase"
            },
            "color": "#facc15",
            "margin": {
              "desktop": {
                "top": "0px",
                "right": "0px",
                "bottom": "12px",
                "left": "0px"
              },
              "tablet": {
                "top": "0px",
                "right": "0px",
                "bottom": "12px",
                "left": "0px"
              },
              "mobile": {
                "top": "0px",
                "right": "0px",
                "bottom": "12px",
                "left": "0px"
              }
            }
          },
          "bio": {
            "typo": {
              "fontSize": {
                "desktop": 14,
                "tablet": 12,
                "mobile": 12
              },
              "lineHeight": 1.5,
              "letterSpacing": "0.05em",
              "textTransform": "",
              "fontFamily": "ui-sans-serif, system-ui"
            },
            "color": "#9ca3af",
            "margin": {
              "desktop": {
                "top": "0px",
                "right": "0px",
                "bottom": "16px",
                "left": "0px"
              },
              "tablet": {
                "top": "0px",
                "right": "0px",
                "bottom": "16px",
                "left": "0px"
              },
              "mobile": {
                "top": "0px",
                "right": "0px",
                "bottom": "16px",
                "left": "0px"
              }
            }
          },
          "social": {
            "gapX": "0.75rem",
            "justifyContent": "center"
          },
          "button": {
            "height": "30px",
            "width": "30px",
            "padding": {
              "desktop": {
                "top": "0px",
                "right": "0px",
                "bottom": "0px",
                "left": "0px"
              },
              "tablet": {
                "top": "0px",
                "right": "0px",
                "bottom": "0px",
                "left": "0px"
              },
              "mobile": {
                "top": "0px",
                "right": "0px",
                "bottom": "0px",
                "left": "0px"
              }
            },
            "bg": {
              "color": "#fff3"
            },
            "hover": {
              "bg": {
                "color": "#ffffff4d"
              }
            },
            "border": {
              "width": "0px",
              "style": "solid",
              "color": "#ffffff"
            },
            "radius": 50,
            "icon": {
              "size": 18,
              "fill": "#ffffff",
              "hover": {
                "fill": "#ffffff"
              }
            }
          },
          "badge": {
            "height": "50px",
            "width": "50px",
            "bg": {
              "color": "#facc15"
            },
            "hover": {
              "bg": {
                "color": "#ddd"
              }
            },
            "radius": 50,
            "icon": {
              "size": 24,
              "fill": "#000000",
              "hover": {
                "fill": "#000000"
              }
            }
          },
          "location": {
            "typo": {
              "fontSize": {
                "desktop": 14,
                "tablet": 12,
                "mobile": 12
              },
              "lineHeight": 1.3,
              "fontFamily": "ui-sans-serif, system-ui"
            },
            "color": "#6b7280"
          }
        }
      }
      draft["section"] = {
        "headline": "The Creatives",
        "slogan": "Where art meets innovation"
      }

      draft['columns'] = {
        "desktop": 2,
        "tablet": 2,
        "mobile": 1,
        "gapX": "1.5rem",
        "gapY": "2rem"

      }

      draft["teamMembers"] = [...draft?.teamMembers]
      break;




    // theme four
    case "theme4":
      draft["styles"] = {
        "section": {
          "padding": {
            "desktop": {
              "top": "96px",
              "right": "0px",
              "bottom": "96px",
              "left": "0px"
            },
            "tablet": {
              "top": "60px",
              "right": "0px",
              "bottom": "60px",
              "left": "0px"
            },
            "mobile": {
              "top": "40px",
              "right": "0px",
              "bottom": "40px",
              "left": "0px"
            }
          },
          "margin": {
            "desktop": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "tablet": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "mobile": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            }
          },
          "radius": {
            "top": "0px",
            "right": "0px",
            "bottom": "0px",
            "left": "0px"
          },
          "bg": {
            "color": "#f9fafb"
          }
        },
        "header": {
          "margin": {
            "desktop": {
              "top": "0px",
              "right": "0px",
              "bottom": "64px",
              "left": "0px"
            },
            "tablet": {
              "top": "0px",
              "right": "0px",
              "bottom": "40px",
              "left": "0px"
            },
            "mobile": {
              "top": "0px",
              "right": "0px",
              "bottom": "20px",
              "left": "0px"
            }
          },
          "padding": {
            "desktop": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "tablet": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "mobile": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            }
          },
          "textAlign": "center",
          "bg": {
            "color": ""
          }
        },
        "title": {
          "typo": {
            "fontWeight": 700,
            "fontSize": {
              "desktop": 36,
              "tablet": 24,
              "mobile": 20
            },
            "lineHeight": "2.25rem",
            "fontFamily": "ui-sans-serif, system-ui"
          },
          "margin": {
            "desktop": {
              "top": "0px",
              "right": "0px",
              "bottom": "16px",
              "left": "0px"
            },
            "tablet": {
              "top": "0px",
              "right": "0px",
              "bottom": "14px",
              "left": "0px"
            },
            "mobile": {
              "top": "0px",
              "right": "0px",
              "bottom": "12px",
              "left": "0px"
            }
          },
          "color": "#111827"
        },
        "subTitle": {
          "typo": {
            "fontSize": {
              "desktop": 18,
              "tablet": 16,
              "mobile": 14
            },
            "lineHeight": "1.75rem",
            "fontFamily": "ui-sans-serif, system-ui",


          },
          "margin": {
            "desktop": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "tablet": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "mobile": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            }
          },
          "color": "#4b5563"
        },
        "card": {
          "margin": {
            "desktop": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "tablet": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "mobile": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            }
          },
          "padding": {
            "desktop": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "tablet": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "mobile": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            }
          },
          "border": {
            "width": "0px",
            "style": "solid",
            "color": "#fff",

          },
          "radius": {
            "top": "8px",
            "right": "8px",
            "bottom": "8px",
            "left": "8px"
          }
        },
        "img": {
          "wrapper": {
            "margin": {
              "desktop": {
                "top": "0px",
                "right": "0px",
                "bottom": "24px",
                "left": "0px"
              },
              "tablet": {
                "top": "0px",
                "right": "0px",
                "bottom": "18px",
                "left": "0px"
              },
              "mobile": {
                "top": "0px",
                "right": "0px",
                "bottom": "18px",
                "left": "0px"
              }
            },
            "padding": {
              "desktop": {
                "top": "0px",
                "right": "0px",
                "bottom": "0px",
                "left": "0px"
              },
              "tablet": {
                "top": "0px",
                "right": "0px",
                "bottom": "0px",
                "left": "0px"
              },
              "mobile": {
                "top": "0px",
                "right": "0px",
                "bottom": "0px",
                "left": "0px"
              }
            },
            "radius": {
              "top": "16px",
              "right": "16px",
              "bottom": "16px",
              "left": "16px"
            },
            "border": {
              "width": "0px",
              "style": "solid",
              "color": "#fff"
            }
          },
          "avatar": {
            "radius": {
              "top": "16px",
              "right": "16px",
              "bottom": "16px",
              "left": "16px"
            },
            "height": "320px",
            "width": "100%"
          }
        },
        "cardContent": {
          "textAlign": "left",
          "name": {
            "typo": {
              "fontSize": {
                "desktop": 24,
                "tablet": 18,
                "mobile": 16
              },
              "fontWeight": 700,
              "lineHeight": "1.5rem",
              "fontFamily": "ui-sans-serif, system-ui",
              "textTransform": "capitalize"
            },
            "color": "#111827",
            "margin": {
              "desktop": {
                "top": "0px",
                "right": "0px",
                "bottom": "0px",
                "left": "0px"
              },
              "tablet": {
                "top": "0px",
                "right": "0px",
                "bottom": "0px",
                "left": "0px"
              },
              "mobile": {
                "top": "0px",
                "right": "0px",
                "bottom": "0px",
                "left": "0px"
              }
            }
          },
          "role": {
            "typo": {
              "fontSize": {
                "desktop": 16,
                "tablet": 14,
                "mobile": 13
              },
              "fontWeight": 500,
              "lineHeight": 1.5,
              "letterSpacing": "0.05em",
              "textTransform": "capitalize",
              "fontFamily": "ui-sans-serif, system-ui"
            },
            "color": "#2563eb",
            "margin": {
              "desktop": {
                "top": "0px",
                "right": "0px",
                "bottom": "0px",
                "left": "0px"
              },
              "tablet": {
                "top": "0px",
                "right": "0px",
                "bottom": "0px",
                "left": "0px"
              },
              "mobile": {
                "top": "0px",
                "right": "0px",
                "bottom": "0px",
                "left": "0px"
              }
            }
          },
          "bio": {
            "typo": {
              "fontSize": {
                "desktop": 16,
                "tablet": 14,
                "mobile": 13

              },
              "fontWeight": 400,
              "lineHeight": 1.625,
              "letterSpacing": "0.05em",
              "textTransform": "",
              "fontFamily": "ui-sans-serif, system-ui"
            },
            "color": "#4b5563",
            "margin": {
              "desktop": {
                "top": "0px",
                "right": "0px",
                "bottom": "24px",
                "left": "0px"
              },
              "tablet": {
                "top": "0px",
                "right": "0px",
                "bottom": "24px",
                "left": "0px"
              },
              "mobile": {
                "top": "0px",
                "right": "0px",
                "bottom": "24px",
                "left": "0px"
              }
            }
          },
          "social": {
            "gapX": "0.75rem",
            "justifyContent": "center"
          },
          "button": {
            "height": "30px",
            "width": "30px",
            "padding": {
              "desktop": {
                "top": "0px",
                "right": "0px",
                "bottom": "0px",
                "left": "0px"
              },
              "tablet": {
                "top": "0px",
                "right": "0px",
                "bottom": "0px",
                "left": "0px"
              },
              "mobile": {
                "top": "0px",
                "right": "0px",
                "bottom": "0px",
                "left": "0px"
              }
            },
            "bg": {
              "color": "#f3f4f6"
            },
            "hover": {
              "bg": {
                "color": "#dbeafe"
              }
            },
            "border": {
              "width": "0px",
              "style": "solid",
              "color": "#ffffff"
            },
            "radius": 50,
            "icon": {
              "size": 15,
              "fill": "#9da0a7",
              "hover": {
                "fill": "#2563eb"
              }
            }
          },
          "badge": {
            "height": "48px",
            "width": "48px",

            "bg": {
              "color": "#f3f4f6"
            },
            "hover": {
              "bg": {
                "color": "#dbeafe"
              }
            },
            "radius": 50,
            "icon": {
              "size": 24,
              "fill": "#000000",
              "hover": {
                "fill": "#2563eb"
              }
            }
          },
          "location": {
            "typo": {
              "fontSize": {
                "desktop": 14,
                "tablet": 12,
                "mobile": 12
              },
              "lineHeight": 1.3,
              "fontFamily": "ui-sans-serif, system-ui"
            },
            "color": "#6b7280"
          }
        }
      }
      draft["section"] = {
        "headline": "Leadership Team",
        "slogan": "Experienced professionals driving innovation and excellence in creative solutions"
      }

      draft['columns'] = {
        "desktop": 2,
        "tablet": 1,
        "mobile": 1,
        "gapX": "1.5rem",
        "gapY": "2rem"

      }

      draft["teamMembers"] = [...draft?.teamMembers]
      break;


















  }








})




export const toolTipPresets = [
  {
    label: "Default",
    value: "default",
    img: "https://i.ibb.co.com/14qZT1P/theme4.png",
    height: "auto",
    width: "160px",
    isPro: false
  },
  {
    label: "Theme-2",
    value: "theme2",
    img: "https://media.istockphoto.com/id/471926619/photo/moraine-lake-at-sunrise-banff-national-park-canada.jpg?s=612x612&w=0&k=20&c=mujiCtVk5QA697SD3d8V8BGmd91-8HlxCNHkolEA0Bo=",
    height: "auto",
    width: "160px",
    isPro: false
  },
  {
    label: "Theme-3",
    value: "theme3",
    img: "https://ibb.co.com/fzmf4skC",
    height: "auto",
    width: "160px",
    isPro: true
  },

  {
    label: "Theme-4",
    value: "theme4",
    img: "https://i.ibb.co.com/14qZT1P/theme4.png",
    height: "auto",
    width: "160px",
    isPro: false
  }
];