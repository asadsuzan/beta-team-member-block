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
          "padding": draft.styles.section.padding,
          "margin": draft.styles.section.margin,
          "radius": draft.styles.section.radius,
          "bg": {
            "color": "linear-gradient(to bottom right, #9333ea, #db2777, #f97316)"
          }
        },
        "header": {
          "margin": draft.styles.header.margin,
          "padding": draft.styles.header.padding,
          "textAlign": draft.styles.header.textAlign,
          "bg": {
            "color": ""
          }
        },
        "title": {
          "typo": {
            "fontWeight": 600,
            "fontSize": {
              "desktop": 48,
              "tablet": 20,
              "mobile": 18
            },
            "lineHeight": 1,
            "fontFamily": "ui-sans-serif, system-ui"
          },
          "margin": {
            "top": "0px",
            "right": "0px",
            "bottom": "24px",
            "left": "0px"
          },
          "color": "#ffffff"
        },
        "subTitle": {
          "typo": {
            "fontSize": {
              "desktop": 18,
              "tablet": 14,
              "mobile": 12
            },
            "fontFamily": "ui-sans-serif, system-ui",
            "fontWeight": 400,
            "letterSpace": "1px"
          },
          "margin": {
            "top": "0px",
            "right": "0px",
            "bottom": "0px",
            "left": "0px"
          },
          "color": "rgba(249, 249, 249, 0.95)"
        },
        "card": {
          "width": "100%",
          "height": "100%",
          "margin": {
            "top": "0px",
            "right": "0px",
            "bottom": "0px",
            "left": "0px"
          },
          "padding": {
            "top": "24px",
            "right": "24px",
            "bottom": "24px",
            "left": "24px"
          },
          "border": {
            "width": "1px",
            "style": "solid",
            "color": " rgba(255, 255, 255, 0.2)",
            "radius": 24
          }
        },
        "img": {
          "width": "100%",
          "height": "100%",
          "radius": 15
        },
        "cardContent": {
          "textAlign": "center",
          "name": {
            "typo": {
              "fontSize": {
                "desktop": 20,
                "tablet": 18,
                "mobile": 214
              },
              "fontWeight": 700,
              "lineHeight": 1.3,
              "fontFamily": "ui-sans-serif, system-ui"
            },
            "color": "#ffffff",
            "margin": {
              "top": "0px",
              "right": "0px",
              "bottom": "8px",
              "left": "0px"
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
              "lineHeight": 1.3,
              "letterSpace": "0.5px",
              "textTransform": "uppercase",
              "fontFamily": "ui-sans-serif, system-ui"
            },
            "color": "#facc15",
            "margin": {
              "top": "0px",
              "right": "0px",
              "bottom": "10px",
              "left": "0px"
            }
          },
          "bio": {
            "typo": {
              "fontSize": {
                "desktop": 14,
                "tablet": 12,
                "mobile": 12
              },
              "lineHeight": 1.6,
              "textTransform": "",
              "fontFamily": "ui-sans-serif, system-ui"
            },
            "color": "rgba(255, 255, 255, 0.8)",
            "margin": {
              "top": "0px",
              "right": "0px",
              "bottom": "16px",
              "left": "0px"
            }
          },
          "button": {
            "width": "40px",
            "height": "40px",
            "bg": {
              "color": "rgba(255, 255, 255, 0.2)"
            },
            "border": {
              "width": "0px",
              "style": "solid",
              "color": "#ffffff",
              "radius": 24
            },
            "radius": 50,
            "icon": {
              "size": 18,
              "fill": "none"
            }
          }
        }
      }
      draft["section"] = {
        "headline": draft.section.headline,
        "slogan": draft.section.slogan
      }
      draft["teamMembers"] = [...draft.teamMembers]
      break;

    case "theme2":
      draft["styles"] = {
        "section": {

          "padding": draft.styles.section.padding,
          "margin": draft.styles.section.margin,
          "bg": {
            "color": "#ffffff"
          },
          "radius": draft.styles.section.radius
        },
        "header": {
          "margin": draft.styles.header.margin,
          "padding": draft.styles.header.padding,
          "textAlign": draft.styles.header.textAlign,
          "bg": {
            "color": ""
          }
        },
        "title": {
          "typo": {
            "fontWeight": 700,
            "fontSize": {
              "desktop": 36,
              "tablet": 20,
              "mobile": 18
            },
            "fontFamily": "ui-sans-serif, system-ui"
          },
          "margin": {
            "top": "0px",
            "right": "0px",
            "bottom": "16px",
            "left": "0px"
          },
          "color": "#111827"
        },
        "subTitle": {
          "typo": {
            "fontSize": {
              "desktop": 18,
              "tablet": 20,
              "mobile": 14
            },
            "lineHeight": 1.6,
            "fontFamily": "ui-sans-serif, system-ui"
          },
          "margin": {
            "top": "0px",
            "right": "0px",
            "bottom": "0px",
            "left": "0px"
          },
          "color": "#6b7280"
        },
        "card": {
          "width": "100%",
          "height": "100%",
          "margin": {
            "top": "0px",
            "right": "0px",
            "bottom": "0px",
            "left": "0px"
          },
          "padding": {
            "top": "0px",
            "right": "0px",
            "bottom": "0px",
            "left": "0px"
          },
          "border": {
            "width": "0px",
            "style": "solid",
            "color": "#fff"
          },
          "radius": 0
        },
        "img": {
          "width": "100%",
          "height": "256px",
          "radius": 16
        },
        "cardContent": {
          "textAlign": "center",
          "name": {
            "typo": {
              "fontSize": {
                "desktop": 24,
                "tablet": 20,
                "mobile": 18
              },
              "fontWeight": 600,
              "lineHeight": 1.3
            },
            "color": "#111827",
            "margin": {
              "top": "0px",
              "right": "0px",
              "bottom": "8px",
              "left": "0px"
            }
          },
          "role": {
            "typo": {
              "fontSize": {
                "desktop": 16,
                "tablet": 14,
                "mobile": 12
              },
              "fontWeight": 500,
              "lineHeight": 1.5,
              "letterSpacing": "0.05em"
            },
            "color": "#6b7280",
            "margin": {
              "top": "0px",
              "right": "0px",
              "bottom": "10px",
              "left": "0px"
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
              "textTransform": ""
            },
            "color": "#6b7280",
            "margin": {
              "top": "0px",
              "right": "0px",
              "bottom": "16px",
              "left": "0px"
            }
          },
          "button": {
            "width": "40px",
            "height": "40px",
            "bg": {
              "color": "rgba(255, 255, 255, 0.2)"
            },
            "border": {
              "width": "0px",
              "style": "solid",
              "color": "#ffffff"
            },
            "radius": 0,
            "icon": {
              "size": 20,
              "fill": "#babbbf"
            }
          }
        }
      }
      draft["section"] = {
        "headline": draft.section.headline,
        "slogan": draft.section.slogan
      }
      draft["teamMembers"] = [...draft.teamMembers]
      break;


  }


})


