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
  console.log(draft?.teamMembers);
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
            "fontWeight": 600,
            "fontSize": {
              "desktop": 48,
              "tablet": 32,
              "mobile": 24
            },
            "lineHeight": 1,
            "fontFamily": "ui-sans-serif, system-ui"
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
            "fontWeight": 300,
            "letterSpace": "1px"
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
          "color": "rgba(249, 249, 249, 0.95)"
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
            "color": " rgba(255, 255, 255, 0.2)",
            "radius": 24
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
            "radius": 16,
            "minHeight": "256px"
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
              "lineHeight": 1.3,
              "letterSpace": "0.5px",
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
              "lineHeight": 1.6,
              "textTransform": "",
              "fontFamily": "ui-sans-serif, system-ui"
            },
            "color": "rgba(255, 255, 255, 0.8)",
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
              "color": "rgba(255, 255, 255, 0.2)"
            },
            "border": {
              "width": "0px",
              "style": "solid",
              "color": "transparent",
            },
            "radius": 50,
            "icon": {
              "size": 18,
              "fill": "#ffffff"
            }
          }
        }
      }
      draft["section"] = {
        "headline": draft.section.headline,
        "slogan": draft.section.slogan
      }



      draft["teamMembers"] = [...draft?.teamMembers]
      break;








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
            "fontWeight": 600,
            "fontSize": {
              "desktop": 38,
              "tablet": 24,
              "mobile": 18
            },
            "lineHeight": 1,
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
            "fontWeight": 300,
            "letterSpace": "1px"
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
              "bottom": "14px",
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
            "width": "0px",
            "style": "solid",
            "color": "#fff",

          },
          "radius": 0
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
            "radius": 16,
            "minHeight": "256px"
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
            "color": "#6b7280",
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
            "border": {
              "width": "0px",
              "style": "solid",
              "color": "transparent",

            },
            "radius": 50,
            "icon": {
              "size": 18,
              "fill": "#babbbf"
            }
          }
        }
      }
      draft["section"] = {
        "headline": draft.section.headline,
        "slogan": draft.section.slogan
      }
      draft["teamMembers"] = [...draft?.teamMembers]
      break;


  }


})


