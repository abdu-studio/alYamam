(function(){
    var script = {
 "mouseWheelEnabled": true,
 "definitions": [{
 "duration": 1000,
 "id": "effect_9B74A580_BA4C_F414_41E2_97EF2EB9A9C9",
 "easing": "cubic_in_out",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "id": "effect_9B70E579_BA4C_F4F4_41D9_7100182C592C",
 "easing": "cubic_in_out",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "id": "effect_ADD9DA77_BA7D_DCFC_41E1_BE172AD6601D",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "id": "effect_ADDAFA78_BA7D_DCF4_41D8_879968B7A21E",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 152.54,
  "class": "PanoramaCameraPosition",
  "pitch": -37.24
 },
 "id": "panorama_A90E5F62_BA5C_D415_41C7_93FE545DC680_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -167.05,
  "class": "PanoramaCameraPosition",
  "pitch": -38.36
 },
 "id": "panorama_A817BC2C_BA4C_746D_41E0_F8E2656EB685_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 1000,
 "id": "effect_AD73C938_BA7F_DC74_41E4_0C7B33388362",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A90E5F62_BA5C_D415_41C7_93FE545DC680_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_A90E5F62_BA5C_D415_41C7_93FE545DC680_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A90E5F62_BA5C_D415_41C7_93FE545DC680_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A90E5F62_BA5C_D415_41C7_93FE545DC680_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A90E5F62_BA5C_D415_41C7_93FE545DC680_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_A90E5F62_BA5C_D415_41C7_93FE545DC680_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A90E5F62_BA5C_D415_41C7_93FE545DC680_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A90E5F62_BA5C_D415_41C7_93FE545DC680_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A90E5F62_BA5C_D415_41C7_93FE545DC680_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_A90E5F62_BA5C_D415_41C7_93FE545DC680_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A90E5F62_BA5C_D415_41C7_93FE545DC680_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A90E5F62_BA5C_D415_41C7_93FE545DC680_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A90E5F62_BA5C_D415_41C7_93FE545DC680_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_A90E5F62_BA5C_D415_41C7_93FE545DC680_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A90E5F62_BA5C_D415_41C7_93FE545DC680_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A90E5F62_BA5C_D415_41C7_93FE545DC680_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A90E5F62_BA5C_D415_41C7_93FE545DC680_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_A90E5F62_BA5C_D415_41C7_93FE545DC680_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A90E5F62_BA5C_D415_41C7_93FE545DC680_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A90E5F62_BA5C_D415_41C7_93FE545DC680_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A90E5F62_BA5C_D415_41C7_93FE545DC680_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A90E5F62_BA5C_D415_41C7_93FE545DC680_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_A90E5F62_BA5C_D415_41C7_93FE545DC680_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A90E5F62_BA5C_D415_41C7_93FE545DC680_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A90E5F62_BA5C_D415_41C7_93FE545DC680_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "Img_04",
 "id": "panorama_A90E5F62_BA5C_D415_41C7_93FE545DC680",
 "thumbnailUrl": "media/panorama_A90E5F62_BA5C_D415_41C7_93FE545DC680_t.jpg",
 "partial": false,
 "class": "Panorama",
 "pitch": 0
},
{
 "duration": 1000,
 "id": "effect_AD72A938_BA7F_DC74_41DD_AB8BA9E0E809",
 "easing": "cubic_in_out",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "id": "effect_ADDAFA77_BA7D_DCFC_4185_A9B14F9BAC30",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "id": "effect_9B744580_BA4C_F414_41D4_B56ED9913B07",
 "easing": "cubic_in_out",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "id": "effect_ADDA8A78_BA7D_DCF4_41E3_95F01A32650E",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "items": [
  {
   "media": "this.panorama_B1966017_BA44_2C3C_41DA_C74E48B77677",
   "end": "if(this.existsKey('visibility_Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115')){ if(this.getKey('visibility_Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115')) { this.setComponentVisibility(this.Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115, true, -1, this.effect_9B718579_BA4C_F4F4_41A6_79E22026CCD4, 'showEffect', false); } else { this.setComponentVisibility(this.Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115, false, -1, this.effect_ADD77A76_BA7D_DCFD_41E4_E79795F44B13, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115')",
   "class": "PanoramaPlayListItem",
   "begin": "this.registerKey('visibility_Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115', this.Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115.get('visible')); this.setEndToItemIndex(this.mainPlayList, 0, 1); this.keepComponentVisibility(this.Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115, false); this.setComponentVisibility(this.Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115, false, -1, this.effect_ADD77A76_BA7D_DCFD_41E4_E79795F44B13, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_camera",
   "start": "this.keepComponentVisibility(this.Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115, true)"
  },
  {
   "media": "this.panorama_B58CF2AC_BA44_2C6D_41D8_CA0FC176C254",
   "end": "if(this.existsKey('visibility_Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E')){ if(this.getKey('visibility_Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E')) { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E, true, -1, this.effect_9B70E579_BA4C_F4F4_41D9_7100182C592C, 'showEffect', false); } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E, false, -1, this.effect_ADD9DA77_BA7D_DCFC_41E1_BE172AD6601D, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E'); if(this.existsKey('visibility_Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A')){ if(this.getKey('visibility_Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A')) { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A, true, -1, this.effect_9B70F579_BA4C_F4F4_41DF_FA15AD233575, 'showEffect', false); } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A, false, -1, this.effect_ADD9AA77_BA7D_DCFC_41DF_934FE583406E, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A'); if(this.existsKey('visibility_IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329')){ if(this.getKey('visibility_IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329')) { this.setComponentVisibility(this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329, true, -1, this.effect_9B708579_BA4C_F4F4_41DE_218EFDB8EC0B, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329, false, -1, this.effect_ADD96A77_BA7D_DCFC_41E4_31E7A1AE9019, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329'); if(this.existsKey('visibility_Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE')){ if(this.getKey('visibility_Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE')) { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, -1, this.effect_9B734579_BA4C_F4F4_41D2_17A459F9C527, 'showEffect', false); } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, -1, this.effect_ADDAFA77_BA7D_DCFC_4185_A9B14F9BAC30, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE'); if(this.existsKey('visibility_IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB')){ if(this.getKey('visibility_IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB')) { this.setComponentVisibility(this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB, true, -1, this.effect_9B732579_BA4C_F4F7_41DD_E409F63A95B5, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB, false, -1, this.effect_ADDACA77_BA7D_DCFC_41D3_7FE97967E882, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB'); if(this.existsKey('visibility_IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A')){ if(this.getKey('visibility_IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A')) { this.setComponentVisibility(this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A, true, -1, this.effect_9B73E579_BA4C_F4F7_41BA_F1C6C626CD60, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A, false, -1, this.effect_ADDA7A77_BA7D_DCFC_41E0_ED83BC30F525, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A'); if(this.existsKey('visibility_IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D')){ if(this.getKey('visibility_IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D')) { this.setComponentVisibility(this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D, true, -1, this.effect_9B73C579_BA4C_F4F7_41D5_31F324B16348, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D, false, -1, this.effect_ADDA1A77_BA7D_DCFC_41E3_9133E52AD096, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D'); if(this.existsKey('visibility_IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96')){ if(this.getKey('visibility_IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96')) { this.setComponentVisibility(this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96, true, -1, this.effect_9B73B579_BA4C_F4F7_41E3_EFA9A88C97A1, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96, false, -1, this.effect_ADDBEA78_BA7D_DCF4_41E3_BC166229F7AB, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96'); if(this.existsKey('visibility_IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0')){ if(this.getKey('visibility_IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0')) { this.setComponentVisibility(this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0, true, -1, this.effect_9B72757F_BA4C_F4EC_41A2_283859031EB8, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0, false, -1, this.effect_ADDAFA78_BA7D_DCF4_41D8_879968B7A21E, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0'); if(this.existsKey('visibility_IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC')){ if(this.getKey('visibility_IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC')) { this.setComponentVisibility(this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC, true, -1, this.effect_9B72557F_BA4C_F4EC_41E2_618BBBEA4C74, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC, false, -1, this.effect_ADDABA78_BA7D_DCF4_41B5_ADEF029936EF, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC'); if(this.existsKey('visibility_IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521')){ if(this.getKey('visibility_IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521')) { this.setComponentVisibility(this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521, true, -1, this.effect_9B72057F_BA4C_F4EB_41E1_62A2FDC3BFE7, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521, false, -1, this.effect_ADDA8A78_BA7D_DCF4_41E3_95F01A32650E, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521'); this.setComponentVisibility(this.Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115, false, -1, this.effect_AD73C938_BA7F_DC74_41E4_0C7B33388362, 'hideEffect', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.registerKey('visibility_IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521', this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.get('visible')); this.registerKey('visibility_IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC', this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.get('visible')); this.registerKey('visibility_IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0', this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.get('visible')); this.registerKey('visibility_IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96', this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.get('visible')); this.registerKey('visibility_IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D', this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.get('visible')); this.registerKey('visibility_IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A', this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.get('visible')); this.registerKey('visibility_IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB', this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.get('visible')); this.registerKey('visibility_Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE', this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')); this.registerKey('visibility_IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329', this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.get('visible')); this.registerKey('visibility_Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A', this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A.get('visible')); this.registerKey('visibility_Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E', this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E.get('visible')); this.setEndToItemIndex(this.mainPlayList, 1, 2); this.keepComponentVisibility(this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E, false); this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E, false, -1, this.effect_ADD9DA77_BA7D_DCFC_41E1_BE172AD6601D, 'hideEffect', false); this.keepComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A, false); this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A, false, -1, this.effect_ADD9AA77_BA7D_DCFC_41DF_934FE583406E, 'hideEffect', false); this.keepComponentVisibility(this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329, false); this.setComponentVisibility(this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329, false, -1, this.effect_ADD96A77_BA7D_DCFC_41E4_31E7A1AE9019, 'hideEffect', false); this.keepComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false); this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, -1, this.effect_ADDAFA77_BA7D_DCFC_4185_A9B14F9BAC30, 'hideEffect', false); this.keepComponentVisibility(this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB, false); this.setComponentVisibility(this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB, false, -1, this.effect_ADDACA77_BA7D_DCFC_41D3_7FE97967E882, 'hideEffect', false); this.keepComponentVisibility(this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A, false); this.setComponentVisibility(this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A, false, -1, this.effect_ADDA7A77_BA7D_DCFC_41E0_ED83BC30F525, 'hideEffect', false); this.keepComponentVisibility(this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D, false); this.setComponentVisibility(this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D, false, -1, this.effect_ADDA1A77_BA7D_DCFC_41E3_9133E52AD096, 'hideEffect', false); this.keepComponentVisibility(this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96, false); this.setComponentVisibility(this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96, false, -1, this.effect_ADDBEA78_BA7D_DCF4_41E3_BC166229F7AB, 'hideEffect', false); this.keepComponentVisibility(this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0, false); this.setComponentVisibility(this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0, false, -1, this.effect_ADDAFA78_BA7D_DCF4_41D8_879968B7A21E, 'hideEffect', false); this.keepComponentVisibility(this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC, false); this.setComponentVisibility(this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC, false, -1, this.effect_ADDABA78_BA7D_DCF4_41B5_ADEF029936EF, 'hideEffect', false); this.keepComponentVisibility(this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521, false); this.setComponentVisibility(this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521, false, -1, this.effect_ADDA8A78_BA7D_DCF4_41E3_95F01A32650E, 'hideEffect', false); this.keepComponentVisibility(this.Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115, false); this.setComponentVisibility(this.Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115, true, -1, this.effect_AD702938_BA7F_DC74_41DF_D904B2DB5E74, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B58CF2AC_BA44_2C6D_41D8_CA0FC176C254_camera",
   "start": "this.keepComponentVisibility(this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E, true); this.keepComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A, true); this.keepComponentVisibility(this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329, true); this.keepComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true); this.keepComponentVisibility(this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB, true); this.keepComponentVisibility(this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A, true); this.keepComponentVisibility(this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D, true); this.keepComponentVisibility(this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96, true); this.keepComponentVisibility(this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0, true); this.keepComponentVisibility(this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC, true); this.keepComponentVisibility(this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521, true); this.keepComponentVisibility(this.Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115, true)"
  },
  {
   "media": "this.panorama_A87365F0_BA5D_D7F4_41C2_3F1EABCE8A95",
   "end": "this.setComponentVisibility(this.Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115, false, -1, this.effect_AD726938_BA7F_DC74_41C6_AA64D6A473B2, 'hideEffect', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3); this.keepComponentVisibility(this.Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115, false); this.setComponentVisibility(this.Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115, true, -1, this.effect_AD72A938_BA7F_DC74_41DD_AB8BA9E0E809, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A87365F0_BA5D_D7F4_41C2_3F1EABCE8A95_camera",
   "start": "this.keepComponentVisibility(this.Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115, true)"
  },
  {
   "media": "this.panorama_A90E5F62_BA5C_D415_41C7_93FE545DC680",
   "end": "if(this.existsKey('visibility_Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E')){ if(this.getKey('visibility_Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E')) { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E, true, -1, this.effect_9B75E57F_BA4C_F4EB_41CB_97442E01B13B, 'showEffect', false); } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E, false, -1, this.effect_ADDDDA7D_BA7D_DCEF_41E1_49AB908BD400, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E'); if(this.existsKey('visibility_Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A')){ if(this.getKey('visibility_Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A')) { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A, true, -1, this.effect_9B75A57F_BA4C_F4EB_41E4_6CC8648DEDC7, 'showEffect', false); } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A, false, -1, this.effect_ADDDAA7E_BA7D_DCEC_41E6_4B556CE9BDB4, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A'); if(this.existsKey('visibility_IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329')){ if(this.getKey('visibility_IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329')) { this.setComponentVisibility(this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329, true, -1, this.effect_9B758580_BA4C_F414_41C5_361C6113199A, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329, false, -1, this.effect_ADDD4A7E_BA7D_DCEC_41DD_A41232D961BA, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329'); if(this.existsKey('visibility_Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE')){ if(this.getKey('visibility_Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE')) { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, -1, this.effect_9B744580_BA4C_F414_41D4_B56ED9913B07, 'showEffect', false); } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, -1, this.effect_ADDEEA7E_BA7D_DCEC_41D7_2C23D3E69042, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE'); if(this.existsKey('visibility_IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB')){ if(this.getKey('visibility_IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB')) { this.setComponentVisibility(this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB, true, -1, this.effect_9B743580_BA4C_F414_41D4_BB3F81A96B67, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB, false, -1, this.effect_ADDEAA7E_BA7D_DCEC_41C1_65EDB8B48E41, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB'); if(this.existsKey('visibility_IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A')){ if(this.getKey('visibility_IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A')) { this.setComponentVisibility(this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A, true, -1, this.effect_9B741580_BA4C_F414_41D5_896B9CC47F89, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A, false, -1, this.effect_ADDE3A7E_BA7D_DCEC_41DC_EB15EB6C58B6, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A'); if(this.existsKey('visibility_IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D')){ if(this.getKey('visibility_IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D')) { this.setComponentVisibility(this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D, true, -1, this.effect_9B74A580_BA4C_F414_41E2_97EF2EB9A9C9, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D, false, -1, this.effect_ADDFFA7E_BA7D_DCEC_41DA_B5B24ED01BB5, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D'); if(this.existsKey('visibility_IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96')){ if(this.getKey('visibility_IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96')) { this.setComponentVisibility(this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96, true, -1, this.effect_9B748580_BA4C_F415_41E4_7347EB509CE5, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96, false, -1, this.effect_ADDFAA7E_BA7D_DCEC_41E0_838E07216E50, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96'); if(this.existsKey('visibility_IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0')){ if(this.getKey('visibility_IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0')) { this.setComponentVisibility(this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0, true, -1, this.effect_9B776580_BA4C_F415_41BE_5F385AC1C67B, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0, false, -1, this.effect_ADDF4A7E_BA7D_DCEC_41E2_7E671B61887E, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0'); if(this.existsKey('visibility_IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC')){ if(this.getKey('visibility_IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC')) { this.setComponentVisibility(this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC, true, -1, this.effect_9B772580_BA4C_F415_41D5_A5571ADF75E2, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC, false, -1, this.effect_ADA0FA7E_BA7D_DCEC_41D3_94BD51FEBD37, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC'); if(this.existsKey('visibility_IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521')){ if(this.getKey('visibility_IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521')) { this.setComponentVisibility(this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521, true, -1, this.effect_9B770580_BA4C_F415_41B6_52F37A8C6D82, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521, false, -1, this.effect_ADDE3A7E_BA7D_DCEC_41DC_A96E00C0B796, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521'); this.setComponentVisibility(this.Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115, false, -1, this.effect_9E297769_BA45_D417_41C7_7013363A3D28, 'hideEffect', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.registerKey('visibility_IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521', this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.get('visible')); this.registerKey('visibility_IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC', this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.get('visible')); this.registerKey('visibility_IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0', this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.get('visible')); this.registerKey('visibility_IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96', this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.get('visible')); this.registerKey('visibility_IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D', this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.get('visible')); this.registerKey('visibility_IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A', this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.get('visible')); this.registerKey('visibility_IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB', this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.get('visible')); this.registerKey('visibility_Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE', this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')); this.registerKey('visibility_IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329', this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.get('visible')); this.registerKey('visibility_Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A', this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A.get('visible')); this.registerKey('visibility_Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E', this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E.get('visible')); this.setEndToItemIndex(this.mainPlayList, 3, 4); this.keepComponentVisibility(this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E, false); this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E, false, -1, this.effect_ADDDDA7D_BA7D_DCEF_41E1_49AB908BD400, 'hideEffect', false); this.keepComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A, false); this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A, false, -1, this.effect_ADDDAA7E_BA7D_DCEC_41E6_4B556CE9BDB4, 'hideEffect', false); this.keepComponentVisibility(this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329, false); this.setComponentVisibility(this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329, false, -1, this.effect_ADDD4A7E_BA7D_DCEC_41DD_A41232D961BA, 'hideEffect', false); this.keepComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false); this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, -1, this.effect_ADDEEA7E_BA7D_DCEC_41D7_2C23D3E69042, 'hideEffect', false); this.keepComponentVisibility(this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB, false); this.setComponentVisibility(this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB, false, -1, this.effect_ADDEAA7E_BA7D_DCEC_41C1_65EDB8B48E41, 'hideEffect', false); this.keepComponentVisibility(this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A, false); this.setComponentVisibility(this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A, false, -1, this.effect_ADDE3A7E_BA7D_DCEC_41DC_EB15EB6C58B6, 'hideEffect', false); this.keepComponentVisibility(this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D, false); this.setComponentVisibility(this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D, false, -1, this.effect_ADDFFA7E_BA7D_DCEC_41DA_B5B24ED01BB5, 'hideEffect', false); this.keepComponentVisibility(this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96, false); this.setComponentVisibility(this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96, false, -1, this.effect_ADDFAA7E_BA7D_DCEC_41E0_838E07216E50, 'hideEffect', false); this.keepComponentVisibility(this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0, false); this.setComponentVisibility(this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0, false, -1, this.effect_ADDF4A7E_BA7D_DCEC_41E2_7E671B61887E, 'hideEffect', false); this.keepComponentVisibility(this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC, false); this.setComponentVisibility(this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC, false, -1, this.effect_ADA0FA7E_BA7D_DCEC_41D3_94BD51FEBD37, 'hideEffect', false); this.keepComponentVisibility(this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521, false); this.setComponentVisibility(this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521, false, -1, this.effect_ADDE3A7E_BA7D_DCEC_41DC_A96E00C0B796, 'hideEffect', false); this.keepComponentVisibility(this.Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115, false); this.setComponentVisibility(this.Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115, true, -1, this.effect_9E299769_BA45_D417_41E0_D576EE35910B, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A90E5F62_BA5C_D415_41C7_93FE545DC680_camera",
   "start": "this.keepComponentVisibility(this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E, true); this.keepComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A, true); this.keepComponentVisibility(this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329, true); this.keepComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true); this.keepComponentVisibility(this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB, true); this.keepComponentVisibility(this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A, true); this.keepComponentVisibility(this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D, true); this.keepComponentVisibility(this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96, true); this.keepComponentVisibility(this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0, true); this.keepComponentVisibility(this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC, true); this.keepComponentVisibility(this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521, true); this.keepComponentVisibility(this.Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115, true)"
  },
  {
   "media": "this.panorama_ABE742C8_BA44_2C15_41AE_617AE47671AE",
   "end": "this.setComponentVisibility(this.Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115, false, -1, this.effect_9E2AA769_BA45_D417_41B3_01D7FC7804DB, 'hideEffect', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5); this.keepComponentVisibility(this.Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115, false); this.setComponentVisibility(this.Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115, true, -1, this.effect_9E2AE769_BA45_D417_41DE_F1B8804C5159, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_ABE742C8_BA44_2C15_41AE_617AE47671AE_camera",
   "start": "this.keepComponentVisibility(this.Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115, true)"
  },
  {
   "media": "this.panorama_ABAFA958_BA43_FC34_41E6_00C15C854D66",
   "end": "this.setComponentVisibility(this.Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115, false, -1, this.effect_9E2BD769_BA45_D417_41D0_BC3B50E84E78, 'hideEffect', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6); this.keepComponentVisibility(this.Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115, false); this.setComponentVisibility(this.Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115, true, -1, this.effect_9E2BF769_BA45_D417_41D3_62BBA7F2CF0A, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_ABAFA958_BA43_FC34_41E6_00C15C854D66_camera",
   "start": "this.keepComponentVisibility(this.Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115, true)"
  },
  {
   "media": "this.panorama_A8F1C809_BA4C_5C14_41E2_D35A9CA632CE",
   "end": "this.setComponentVisibility(this.Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115, false, -1, this.effect_9E2B3769_BA45_D417_41E0_3B8780182F2A, 'hideEffect', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7); this.keepComponentVisibility(this.Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115, false); this.setComponentVisibility(this.Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115, true, -1, this.effect_9E2B5769_BA45_D417_41E1_FAD9CAE982BD, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A8F1C809_BA4C_5C14_41E2_D35A9CA632CE_camera",
   "start": "this.keepComponentVisibility(this.Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115, true)"
  },
  {
   "media": "this.panorama_ABC1EEB6_BA4C_347C_41E4_BD7A4D61FEA7",
   "end": "this.setComponentVisibility(this.Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115, false, -1, this.effect_9E148769_BA45_D417_41C3_92006AE35760, 'hideEffect', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8); this.keepComponentVisibility(this.Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115, false); this.setComponentVisibility(this.Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115, true, -1, this.effect_9E14B769_BA45_D417_41D9_959D8E016F71, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_ABC1EEB6_BA4C_347C_41E4_BD7A4D61FEA7_camera",
   "start": "this.keepComponentVisibility(this.Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115, true)"
  },
  {
   "media": "this.panorama_A817BC2C_BA4C_746D_41E0_F8E2656EB685",
   "start": "this.keepComponentVisibility(this.Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115, true)",
   "camera": "this.panorama_A817BC2C_BA4C_746D_41E0_F8E2656EB685_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 0); this.keepComponentVisibility(this.Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115, false); this.setComponentVisibility(this.Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115, true, -1, this.effect_9E15F769_BA45_D417_41E6_AC54C3FB78FA, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.setComponentVisibility(this.Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115, false, -1, this.effect_9E2B6769_BA45_D417_41E4_DBCE25EC100B, 'hideEffect', false); this.trigger('tourEnded')"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "duration": 1000,
 "id": "effect_9E15F769_BA45_D417_41E6_AC54C3FB78FA",
 "easing": "cubic_in_out",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "id": "effect_9B743580_BA4C_F414_41D4_BB3F81A96B67",
 "easing": "cubic_in_out",
 "class": "FadeInEffect"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 1.08,
  "class": "PanoramaCameraPosition",
  "pitch": -58.94
 },
 "id": "panorama_B58CF2AC_BA44_2C6D_41D8_CA0FC176C254_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A817BC2C_BA4C_746D_41E0_F8E2656EB685_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_A817BC2C_BA4C_746D_41E0_F8E2656EB685_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A817BC2C_BA4C_746D_41E0_F8E2656EB685_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A817BC2C_BA4C_746D_41E0_F8E2656EB685_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A817BC2C_BA4C_746D_41E0_F8E2656EB685_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_A817BC2C_BA4C_746D_41E0_F8E2656EB685_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A817BC2C_BA4C_746D_41E0_F8E2656EB685_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A817BC2C_BA4C_746D_41E0_F8E2656EB685_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A817BC2C_BA4C_746D_41E0_F8E2656EB685_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_A817BC2C_BA4C_746D_41E0_F8E2656EB685_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A817BC2C_BA4C_746D_41E0_F8E2656EB685_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A817BC2C_BA4C_746D_41E0_F8E2656EB685_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A817BC2C_BA4C_746D_41E0_F8E2656EB685_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_A817BC2C_BA4C_746D_41E0_F8E2656EB685_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A817BC2C_BA4C_746D_41E0_F8E2656EB685_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A817BC2C_BA4C_746D_41E0_F8E2656EB685_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A817BC2C_BA4C_746D_41E0_F8E2656EB685_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_A817BC2C_BA4C_746D_41E0_F8E2656EB685_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A817BC2C_BA4C_746D_41E0_F8E2656EB685_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A817BC2C_BA4C_746D_41E0_F8E2656EB685_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A817BC2C_BA4C_746D_41E0_F8E2656EB685_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A817BC2C_BA4C_746D_41E0_F8E2656EB685_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_A817BC2C_BA4C_746D_41E0_F8E2656EB685_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A817BC2C_BA4C_746D_41E0_F8E2656EB685_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A817BC2C_BA4C_746D_41E0_F8E2656EB685_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "img_09",
 "id": "panorama_A817BC2C_BA4C_746D_41E0_F8E2656EB685",
 "thumbnailUrl": "media/panorama_A817BC2C_BA4C_746D_41E0_F8E2656EB685_t.jpg",
 "partial": false,
 "class": "Panorama",
 "pitch": 0
},
{
 "duration": 1000,
 "id": "effect_AD726938_BA7F_DC74_41C6_AA64D6A473B2",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "id": "effect_9B75A57F_BA4C_F4EB_41E4_6CC8648DEDC7",
 "easing": "cubic_in_out",
 "class": "FadeInEffect"
},
{
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B58CF2AC_BA44_2C6D_41D8_CA0FC176C254_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B58CF2AC_BA44_2C6D_41D8_CA0FC176C254_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B58CF2AC_BA44_2C6D_41D8_CA0FC176C254_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B58CF2AC_BA44_2C6D_41D8_CA0FC176C254_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B58CF2AC_BA44_2C6D_41D8_CA0FC176C254_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B58CF2AC_BA44_2C6D_41D8_CA0FC176C254_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B58CF2AC_BA44_2C6D_41D8_CA0FC176C254_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B58CF2AC_BA44_2C6D_41D8_CA0FC176C254_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B58CF2AC_BA44_2C6D_41D8_CA0FC176C254_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B58CF2AC_BA44_2C6D_41D8_CA0FC176C254_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B58CF2AC_BA44_2C6D_41D8_CA0FC176C254_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B58CF2AC_BA44_2C6D_41D8_CA0FC176C254_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B58CF2AC_BA44_2C6D_41D8_CA0FC176C254_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B58CF2AC_BA44_2C6D_41D8_CA0FC176C254_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B58CF2AC_BA44_2C6D_41D8_CA0FC176C254_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B58CF2AC_BA44_2C6D_41D8_CA0FC176C254_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B58CF2AC_BA44_2C6D_41D8_CA0FC176C254_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B58CF2AC_BA44_2C6D_41D8_CA0FC176C254_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B58CF2AC_BA44_2C6D_41D8_CA0FC176C254_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B58CF2AC_BA44_2C6D_41D8_CA0FC176C254_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B58CF2AC_BA44_2C6D_41D8_CA0FC176C254_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B58CF2AC_BA44_2C6D_41D8_CA0FC176C254_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B58CF2AC_BA44_2C6D_41D8_CA0FC176C254_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B58CF2AC_BA44_2C6D_41D8_CA0FC176C254_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B58CF2AC_BA44_2C6D_41D8_CA0FC176C254_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "Img_02",
 "id": "panorama_B58CF2AC_BA44_2C6D_41D8_CA0FC176C254",
 "thumbnailUrl": "media/panorama_B58CF2AC_BA44_2C6D_41D8_CA0FC176C254_t.jpg",
 "partial": false,
 "class": "Panorama",
 "pitch": 0
},
{
 "duration": 1000,
 "id": "effect_ADDFFA7E_BA7D_DCEC_41DA_B5B24ED01BB5",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "id": "effect_9B70F579_BA4C_F4F4_41DF_FA15AD233575",
 "easing": "cubic_in_out",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "id": "effect_ADD9AA77_BA7D_DCFC_41DF_934FE583406E",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "id": "effect_9B758580_BA4C_F414_41C5_361C6113199A",
 "easing": "cubic_in_out",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "id": "effect_ADDE3A7E_BA7D_DCEC_41DC_EB15EB6C58B6",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "id": "effect_9B732579_BA4C_F4F7_41DD_E409F63A95B5",
 "easing": "cubic_in_out",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "id": "effect_ADA0FA7E_BA7D_DCEC_41D3_94BD51FEBD37",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "id": "effect_ADDBEA78_BA7D_DCF4_41E3_BC166229F7AB",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "id": "effect_9B776580_BA4C_F415_41BE_5F385AC1C67B",
 "easing": "cubic_in_out",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "id": "effect_ADDFAA7E_BA7D_DCEC_41E0_838E07216E50",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "id": "effect_ADDF4A7E_BA7D_DCEC_41E2_7E671B61887E",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "id": "effect_ADD77A76_BA7D_DCFD_41E4_E79795F44B13",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "id": "effect_ADD96A77_BA7D_DCFC_41E4_31E7A1AE9019",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "id": "effect_9E299769_BA45_D417_41E0_D576EE35910B",
 "easing": "cubic_in_out",
 "class": "FadeInEffect"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -2.99,
  "class": "PanoramaCameraPosition",
  "pitch": -59.91
 },
 "id": "panorama_ABAFA958_BA43_FC34_41E6_00C15C854D66_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 1000,
 "id": "effect_9E297769_BA45_D417_41C7_7013363A3D28",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "id": "effect_ADDDDA7D_BA7D_DCEF_41E1_49AB908BD400",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "id": "effect_ADDDAA7E_BA7D_DCEC_41E6_4B556CE9BDB4",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -56.17,
  "class": "PanoramaCameraPosition",
  "pitch": -65.09
 },
 "id": "panorama_ABC1EEB6_BA4C_347C_41E4_BD7A4D61FEA7_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 1000,
 "id": "effect_ADDEEA7E_BA7D_DCEC_41D7_2C23D3E69042",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "id": "effect_9B72057F_BA4C_F4EB_41E1_62A2FDC3BFE7",
 "easing": "cubic_in_out",
 "class": "FadeInEffect"
},
{
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABC1EEB6_BA4C_347C_41E4_BD7A4D61FEA7_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ABC1EEB6_BA4C_347C_41E4_BD7A4D61FEA7_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ABC1EEB6_BA4C_347C_41E4_BD7A4D61FEA7_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ABC1EEB6_BA4C_347C_41E4_BD7A4D61FEA7_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABC1EEB6_BA4C_347C_41E4_BD7A4D61FEA7_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ABC1EEB6_BA4C_347C_41E4_BD7A4D61FEA7_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ABC1EEB6_BA4C_347C_41E4_BD7A4D61FEA7_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ABC1EEB6_BA4C_347C_41E4_BD7A4D61FEA7_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABC1EEB6_BA4C_347C_41E4_BD7A4D61FEA7_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ABC1EEB6_BA4C_347C_41E4_BD7A4D61FEA7_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ABC1EEB6_BA4C_347C_41E4_BD7A4D61FEA7_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ABC1EEB6_BA4C_347C_41E4_BD7A4D61FEA7_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABC1EEB6_BA4C_347C_41E4_BD7A4D61FEA7_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ABC1EEB6_BA4C_347C_41E4_BD7A4D61FEA7_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ABC1EEB6_BA4C_347C_41E4_BD7A4D61FEA7_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ABC1EEB6_BA4C_347C_41E4_BD7A4D61FEA7_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABC1EEB6_BA4C_347C_41E4_BD7A4D61FEA7_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ABC1EEB6_BA4C_347C_41E4_BD7A4D61FEA7_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ABC1EEB6_BA4C_347C_41E4_BD7A4D61FEA7_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ABC1EEB6_BA4C_347C_41E4_BD7A4D61FEA7_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_ABC1EEB6_BA4C_347C_41E4_BD7A4D61FEA7_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABC1EEB6_BA4C_347C_41E4_BD7A4D61FEA7_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ABC1EEB6_BA4C_347C_41E4_BD7A4D61FEA7_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ABC1EEB6_BA4C_347C_41E4_BD7A4D61FEA7_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ABC1EEB6_BA4C_347C_41E4_BD7A4D61FEA7_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "img_08",
 "id": "panorama_ABC1EEB6_BA4C_347C_41E4_BD7A4D61FEA7",
 "thumbnailUrl": "media/panorama_ABC1EEB6_BA4C_347C_41E4_BD7A4D61FEA7_t.jpg",
 "partial": false,
 "class": "Panorama",
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -41.56,
  "class": "PanoramaCameraPosition",
  "pitch": -35.28
 },
 "id": "panorama_ABE742C8_BA44_2C15_41AE_617AE47671AE_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABE742C8_BA44_2C15_41AE_617AE47671AE_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ABE742C8_BA44_2C15_41AE_617AE47671AE_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ABE742C8_BA44_2C15_41AE_617AE47671AE_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ABE742C8_BA44_2C15_41AE_617AE47671AE_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABE742C8_BA44_2C15_41AE_617AE47671AE_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ABE742C8_BA44_2C15_41AE_617AE47671AE_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ABE742C8_BA44_2C15_41AE_617AE47671AE_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ABE742C8_BA44_2C15_41AE_617AE47671AE_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABE742C8_BA44_2C15_41AE_617AE47671AE_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ABE742C8_BA44_2C15_41AE_617AE47671AE_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ABE742C8_BA44_2C15_41AE_617AE47671AE_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ABE742C8_BA44_2C15_41AE_617AE47671AE_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABE742C8_BA44_2C15_41AE_617AE47671AE_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ABE742C8_BA44_2C15_41AE_617AE47671AE_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ABE742C8_BA44_2C15_41AE_617AE47671AE_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ABE742C8_BA44_2C15_41AE_617AE47671AE_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABE742C8_BA44_2C15_41AE_617AE47671AE_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ABE742C8_BA44_2C15_41AE_617AE47671AE_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ABE742C8_BA44_2C15_41AE_617AE47671AE_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ABE742C8_BA44_2C15_41AE_617AE47671AE_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_ABE742C8_BA44_2C15_41AE_617AE47671AE_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABE742C8_BA44_2C15_41AE_617AE47671AE_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ABE742C8_BA44_2C15_41AE_617AE47671AE_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ABE742C8_BA44_2C15_41AE_617AE47671AE_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ABE742C8_BA44_2C15_41AE_617AE47671AE_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "Img_05",
 "id": "panorama_ABE742C8_BA44_2C15_41AE_617AE47671AE",
 "thumbnailUrl": "media/panorama_ABE742C8_BA44_2C15_41AE_617AE47671AE_t.jpg",
 "partial": false,
 "class": "Panorama",
 "pitch": 0
},
{
 "duration": 1000,
 "id": "effect_9E2AE769_BA45_D417_41DE_F1B8804C5159",
 "easing": "cubic_in_out",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "id": "effect_9B770580_BA4C_F415_41B6_52F37A8C6D82",
 "easing": "cubic_in_out",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "id": "effect_9E2B6769_BA45_D417_41E4_DBCE25EC100B",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABAFA958_BA43_FC34_41E6_00C15C854D66_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ABAFA958_BA43_FC34_41E6_00C15C854D66_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ABAFA958_BA43_FC34_41E6_00C15C854D66_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ABAFA958_BA43_FC34_41E6_00C15C854D66_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABAFA958_BA43_FC34_41E6_00C15C854D66_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ABAFA958_BA43_FC34_41E6_00C15C854D66_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ABAFA958_BA43_FC34_41E6_00C15C854D66_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ABAFA958_BA43_FC34_41E6_00C15C854D66_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABAFA958_BA43_FC34_41E6_00C15C854D66_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ABAFA958_BA43_FC34_41E6_00C15C854D66_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ABAFA958_BA43_FC34_41E6_00C15C854D66_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ABAFA958_BA43_FC34_41E6_00C15C854D66_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABAFA958_BA43_FC34_41E6_00C15C854D66_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ABAFA958_BA43_FC34_41E6_00C15C854D66_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ABAFA958_BA43_FC34_41E6_00C15C854D66_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ABAFA958_BA43_FC34_41E6_00C15C854D66_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABAFA958_BA43_FC34_41E6_00C15C854D66_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ABAFA958_BA43_FC34_41E6_00C15C854D66_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ABAFA958_BA43_FC34_41E6_00C15C854D66_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ABAFA958_BA43_FC34_41E6_00C15C854D66_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_ABAFA958_BA43_FC34_41E6_00C15C854D66_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABAFA958_BA43_FC34_41E6_00C15C854D66_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ABAFA958_BA43_FC34_41E6_00C15C854D66_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ABAFA958_BA43_FC34_41E6_00C15C854D66_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ABAFA958_BA43_FC34_41E6_00C15C854D66_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "img_06",
 "id": "panorama_ABAFA958_BA43_FC34_41E6_00C15C854D66",
 "thumbnailUrl": "media/panorama_ABAFA958_BA43_FC34_41E6_00C15C854D66_t.jpg",
 "partial": false,
 "class": "Panorama",
 "pitch": 0
},
{
 "duration": 1000,
 "id": "effect_9B72757F_BA4C_F4EC_41A2_283859031EB8",
 "easing": "cubic_in_out",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "id": "effect_9E2B5769_BA45_D417_41E1_FAD9CAE982BD",
 "easing": "cubic_in_out",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "id": "effect_9E2B3769_BA45_D417_41E0_3B8780182F2A",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "id": "effect_ADDABA78_BA7D_DCF4_41B5_ADEF029936EF",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "id": "effect_9B734579_BA4C_F4F4_41D2_17A459F9C527",
 "easing": "cubic_in_out",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "id": "effect_ADDEAA7E_BA7D_DCEC_41C1_65EDB8B48E41",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "id": "effect_9B772580_BA4C_F415_41D5_A5571ADF75E2",
 "easing": "cubic_in_out",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "id": "effect_9E2BF769_BA45_D417_41D3_62BBA7F2CF0A",
 "easing": "cubic_in_out",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "id": "effect_9E148769_BA45_D417_41C3_92006AE35760",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "id": "effect_ADDE3A7E_BA7D_DCEC_41DC_A96E00C0B796",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "id": "effect_ADDA1A77_BA7D_DCFC_41E3_9133E52AD096",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "id": "effect_9B72557F_BA4C_F4EC_41E2_618BBBEA4C74",
 "easing": "cubic_in_out",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "id": "effect_9E2BD769_BA45_D417_41D0_BC3B50E84E78",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "id": "effect_9E14B769_BA45_D417_41D9_959D8E016F71",
 "easing": "cubic_in_out",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "id": "effect_9B73E579_BA4C_F4F7_41BA_F1C6C626CD60",
 "easing": "cubic_in_out",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "id": "effect_9B73C579_BA4C_F4F7_41D5_31F324B16348",
 "easing": "cubic_in_out",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "id": "effect_9B75E57F_BA4C_F4EB_41CB_97442E01B13B",
 "easing": "cubic_in_out",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "id": "effect_ADDA7A77_BA7D_DCFC_41E0_ED83BC30F525",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "id": "effect_AD702938_BA7F_DC74_41DF_D904B2DB5E74",
 "easing": "cubic_in_out",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "id": "effect_ADDD4A7E_BA7D_DCEC_41DD_A41232D961BA",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A87365F0_BA5D_D7F4_41C2_3F1EABCE8A95_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_A87365F0_BA5D_D7F4_41C2_3F1EABCE8A95_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A87365F0_BA5D_D7F4_41C2_3F1EABCE8A95_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A87365F0_BA5D_D7F4_41C2_3F1EABCE8A95_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A87365F0_BA5D_D7F4_41C2_3F1EABCE8A95_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_A87365F0_BA5D_D7F4_41C2_3F1EABCE8A95_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A87365F0_BA5D_D7F4_41C2_3F1EABCE8A95_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A87365F0_BA5D_D7F4_41C2_3F1EABCE8A95_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A87365F0_BA5D_D7F4_41C2_3F1EABCE8A95_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_A87365F0_BA5D_D7F4_41C2_3F1EABCE8A95_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A87365F0_BA5D_D7F4_41C2_3F1EABCE8A95_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A87365F0_BA5D_D7F4_41C2_3F1EABCE8A95_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A87365F0_BA5D_D7F4_41C2_3F1EABCE8A95_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_A87365F0_BA5D_D7F4_41C2_3F1EABCE8A95_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A87365F0_BA5D_D7F4_41C2_3F1EABCE8A95_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A87365F0_BA5D_D7F4_41C2_3F1EABCE8A95_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A87365F0_BA5D_D7F4_41C2_3F1EABCE8A95_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_A87365F0_BA5D_D7F4_41C2_3F1EABCE8A95_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A87365F0_BA5D_D7F4_41C2_3F1EABCE8A95_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A87365F0_BA5D_D7F4_41C2_3F1EABCE8A95_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A87365F0_BA5D_D7F4_41C2_3F1EABCE8A95_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A87365F0_BA5D_D7F4_41C2_3F1EABCE8A95_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_A87365F0_BA5D_D7F4_41C2_3F1EABCE8A95_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A87365F0_BA5D_D7F4_41C2_3F1EABCE8A95_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A87365F0_BA5D_D7F4_41C2_3F1EABCE8A95_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "Img_03",
 "id": "panorama_A87365F0_BA5D_D7F4_41C2_3F1EABCE8A95",
 "thumbnailUrl": "media/panorama_A87365F0_BA5D_D7F4_41C2_3F1EABCE8A95_t.jpg",
 "partial": false,
 "class": "Panorama",
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_camera",
 "initialPosition": {
  "yaw": -0.34,
  "class": "PanoramaCameraPosition",
  "pitch": -90
 }
},
{
 "duration": 1000,
 "id": "effect_9B741580_BA4C_F414_41D5_896B9CC47F89",
 "easing": "cubic_in_out",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "id": "effect_9B73B579_BA4C_F4F7_41E3_EFA9A88C97A1",
 "easing": "cubic_in_out",
 "class": "FadeInEffect"
},
{
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_rotation"
},
{
 "duration": 1000,
 "id": "effect_9B708579_BA4C_F4F4_41DE_218EFDB8EC0B",
 "easing": "cubic_in_out",
 "class": "FadeInEffect"
},
{
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8F1C809_BA4C_5C14_41E2_D35A9CA632CE_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_A8F1C809_BA4C_5C14_41E2_D35A9CA632CE_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A8F1C809_BA4C_5C14_41E2_D35A9CA632CE_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A8F1C809_BA4C_5C14_41E2_D35A9CA632CE_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8F1C809_BA4C_5C14_41E2_D35A9CA632CE_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_A8F1C809_BA4C_5C14_41E2_D35A9CA632CE_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A8F1C809_BA4C_5C14_41E2_D35A9CA632CE_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A8F1C809_BA4C_5C14_41E2_D35A9CA632CE_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8F1C809_BA4C_5C14_41E2_D35A9CA632CE_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_A8F1C809_BA4C_5C14_41E2_D35A9CA632CE_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A8F1C809_BA4C_5C14_41E2_D35A9CA632CE_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A8F1C809_BA4C_5C14_41E2_D35A9CA632CE_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8F1C809_BA4C_5C14_41E2_D35A9CA632CE_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_A8F1C809_BA4C_5C14_41E2_D35A9CA632CE_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A8F1C809_BA4C_5C14_41E2_D35A9CA632CE_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A8F1C809_BA4C_5C14_41E2_D35A9CA632CE_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8F1C809_BA4C_5C14_41E2_D35A9CA632CE_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_A8F1C809_BA4C_5C14_41E2_D35A9CA632CE_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A8F1C809_BA4C_5C14_41E2_D35A9CA632CE_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A8F1C809_BA4C_5C14_41E2_D35A9CA632CE_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A8F1C809_BA4C_5C14_41E2_D35A9CA632CE_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8F1C809_BA4C_5C14_41E2_D35A9CA632CE_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_A8F1C809_BA4C_5C14_41E2_D35A9CA632CE_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A8F1C809_BA4C_5C14_41E2_D35A9CA632CE_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A8F1C809_BA4C_5C14_41E2_D35A9CA632CE_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "img_07",
 "id": "panorama_A8F1C809_BA4C_5C14_41E2_D35A9CA632CE",
 "thumbnailUrl": "media/panorama_A8F1C809_BA4C_5C14_41E2_D35A9CA632CE_t.jpg",
 "partial": false,
 "class": "Panorama",
 "pitch": 0
},
{
 "duration": 1000,
 "id": "effect_9B748580_BA4C_F415_41E4_7347EB509CE5",
 "easing": "cubic_in_out",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "id": "effect_ADDACA77_BA7D_DCFC_41D3_7FE97967E882",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -178.57,
  "class": "PanoramaCameraPosition",
  "pitch": -52.71
 },
 "id": "panorama_A8F1C809_BA4C_5C14_41E2_D35A9CA632CE_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 1000,
 "id": "effect_9B718579_BA4C_F4F4_41A6_79E22026CCD4",
 "easing": "cubic_in_out",
 "class": "FadeInEffect"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 87.89,
  "class": "PanoramaCameraPosition",
  "pitch": -24.74
 },
 "id": "panorama_A87365F0_BA5D_D7F4_41C2_3F1EABCE8A95_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_ABE742C8_BA44_2C15_41AE_617AE47671AE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8F1C809_BA4C_5C14_41E2_D35A9CA632CE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_ABAFA958_BA43_FC34_41E6_00C15C854D66"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B58CF2AC_BA44_2C6D_41D8_CA0FC176C254"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A817BC2C_BA4C_746D_41E0_F8E2656EB685"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A90E5F62_BA5C_D415_41C7_93FE545DC680"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A87365F0_BA5D_D7F4_41C2_3F1EABCE8A95"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_ABC1EEB6_BA4C_347C_41E4_BD7A4D61FEA7"
  }
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "img_Main",
 "id": "panorama_B1966017_BA44_2C3C_41DA_C74E48B77677",
 "thumbnailUrl": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_AA737086_BA4C_6C1D_41CC_CCD1B5310C4F",
  "this.overlay_AAEAABD5_BA4C_3C3C_41CA_C6C2A121E1C6",
  "this.overlay_B5BF3EB7_BA4C_D47B_41BC_102D0BF06C0C",
  "this.overlay_AAC9C6B1_BA4C_D477_41E3_B1984B1FA867",
  "this.overlay_AAA70894_BA4C_3C3D_41E6_FB815A86195C",
  "this.overlay_AB12F58F_BA4C_542C_41CA_F9771388F516",
  "this.overlay_B5F55468_BA4C_7414_41B4_0799D7341322",
  "this.overlay_AA328660_BA4C_5414_41E3_5D935E042269"
 ]
},
{
 "duration": 1000,
 "id": "effect_9E2AA769_BA45_D417_41B3_01D7FC7804DB",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "transitionDuration": 500,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "MainViewer",
 "left": 0,
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadShadowVerticalLength": 0,
 "class": "ViewerArea",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 0.5,
 "toolTipFontSize": 13,
 "width": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 50,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "minWidth": 100,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 55,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 6,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "data": {
  "name": "--SETTINGS"
 },
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "class": "Container",
 "right": "0%",
 "width": 115.05,
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 641,
 "top": "0%",
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "--STICKER"
 },
 "children": [
  "this.Image_AE21F213_BA4C_2C3B_41E0_6267E779F294"
 ],
 "left": 30,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_0DD1BF09_1744_0507_41B3_29434E440055",
 "class": "Container",
 "width": 573,
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 133,
 "top": 15,
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "data": {
  "name": "--MENU"
 },
 "children": [
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
  "this.Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0"
 ],
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "verticalAlign": "top",
 "borderSize": 0,
 "bottom": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "height": 118,
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0.64,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--INFO photo"
 },
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--LOCATION"
 },
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "maxHeight": 196,
 "maxWidth": 294,
 "id": "Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115",
 "left": "1.43%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Image",
 "width": "5.115%",
 "borderSize": 0,
 "url": "skin/Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "bottom": "2.62%",
 "minWidth": 1,
 "verticalAlign": "middle",
 "height": "5.939%",
 "click": "this.mainPlayList.set('selectedIndex', 0)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "Image10907"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "paddingLeft": 0,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "class": "IconButton",
 "width": 58,
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton FULLSCREEN"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "paddingLeft": 0,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "class": "IconButton",
 "width": 58,
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton MUTE"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "paddingLeft": 0,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "class": "IconButton",
 "width": 58,
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "shadow": false,
 "visible": false,
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "cursor": "hand",
 "maxHeight": 37,
 "maxWidth": 49,
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "right": 30,
 "width": 100,
 "borderSize": 0,
 "transparencyActive": true,
 "minHeight": 1,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "horizontalAlign": "center",
 "bottom": 8,
 "minWidth": 1,
 "mode": "push",
 "height": 75,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "propagateClick": true,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "paddingLeft": 0,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "class": "IconButton",
 "width": 58,
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton HS "
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "paddingLeft": 0,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "class": "IconButton",
 "width": 58,
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton GYRO"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.8,
   "image": "this.AnimatedImageResource_ADFDCA67_BA7D_DC1B_41DF_80A9ADD8EE34",
   "pitch": -34,
   "yaw": 150.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_AA737086_BA4C_6C1D_41CC_CCD1B5310C4F",
 "data": {
  "label": "Circle Point 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.8,
   "yaw": 150.2,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.65,
   "image": "this.AnimatedImageResource_ABDC16FA_BA43_D5F4_41E5_C47D6DFDBDF7",
   "pitch": -56.44,
   "yaw": 162.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_AAEAABD5_BA4C_3C3C_41CA_C6C2A121E1C6",
 "data": {
  "label": "Circle Point 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.65,
   "yaw": 162.44,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -56.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.27,
   "image": "this.AnimatedImageResource_AE0934B3_BA4D_F474_41B9_72D5C64FDB7A",
   "pitch": -46.94,
   "yaw": 116.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B5BF3EB7_BA4C_D47B_41BC_102D0BF06C0C",
 "data": {
  "label": "Circle Point 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.27,
   "yaw": 116.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -46.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.37,
   "image": "this.AnimatedImageResource_AE0EC4B3_BA4D_F474_41E3_5561B6DC4FAA",
   "pitch": -46.29,
   "yaw": 11.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_AAC9C6B1_BA4C_D477_41E3_B1984B1FA867",
 "data": {
  "label": "Circle Point 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.37,
   "yaw": 11.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -46.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.85,
   "image": "this.AnimatedImageResource_AE0E94B3_BA4D_F474_41CD_CB15934A02E1",
   "pitch": -43.07,
   "yaw": -28.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_AAA70894_BA4C_3C3D_41E6_FB815A86195C",
 "data": {
  "label": "Circle Point 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.85,
   "yaw": -28.25,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -43.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_0_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 6.25,
   "image": "this.AnimatedImageResource_ABD346FA_BA43_D5F4_41E4_AB92DBB003F3",
   "pitch": -58.96,
   "yaw": -91.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_AB12F58F_BA4C_542C_41CA_F9771388F516",
 "data": {
  "label": "Circle Point 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.25,
   "yaw": -91.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -58.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_0_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.17,
   "image": "this.AnimatedImageResource_AE0FE4B3_BA4D_F47B_41C5_41E41A4B5AA1",
   "pitch": -47.58,
   "yaw": -148.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B5F55468_BA4C_7414_41B4_0799D7341322",
 "data": {
  "label": "Circle Point 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.17,
   "yaw": -148.17,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -47.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_0_HS_12_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 6.69,
   "image": "this.AnimatedImageResource_AE0FB4B3_BA4D_F47B_41D2_DE982805A954",
   "pitch": -73.83,
   "yaw": 5.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_AA328660_BA4C_5414_41E3_5D935E042269",
 "data": {
  "label": "Circle Point 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.69,
   "yaw": 5.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -73.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_0_HS_13_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "data": {
  "name": "button menu sup"
 },
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "class": "Container",
 "right": "0%",
 "width": 110,
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 110,
 "top": "0%",
 "layout": "horizontal",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "data": {
  "name": "-button set"
 },
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "width": "91.304%",
 "borderSize": 0,
 "verticalAlign": "top",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "height": "85.959%",
 "layout": "vertical",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 3,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "maxHeight": 203,
 "maxWidth": 1008,
 "id": "Image_AE21F213_BA4C_2C3B_41E0_6267E779F294",
 "left": "7.5%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Image",
 "width": "100%",
 "borderSize": 0,
 "url": "skin/Image_AE21F213_BA4C_2C3B_41E0_6267E779F294.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "top": "26.32%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "Image14291"
 }
},
{
 "data": {
  "name": "-button set container"
 },
 "left": "0%",
 "paddingLeft": 30,
 "scrollBarColor": "#000000",
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "class": "Container",
 "width": 1199,
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5,
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "height": 51,
 "layout": "horizontal",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 3,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "The Year of Handicrafts Med",
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "fontStyle": "normal",
 "iconBeforeLabel": true,
 "paddingLeft": 0,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "data": {
  "name": "Button house info"
 },
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
 "fontSize": "39px",
 "class": "Button",
 "right": "42.4%",
 "width": 407,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "mode": "push",
 "height": 51,
 "top": "8.47%",
 "label": "\u062e\u0631\u064a\u0637\u0629 \u0627\u0644\u0645\u062e\u0637\u0637",
 "backgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 0,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 0,
 "rollOverBackgroundOpacity": 0.8
},
{
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9"
 ],
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "32.07%",
 "paddingLeft": 0,
 "scrollBarColor": "#FFFFFF",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "class": "Container",
 "right": "35.38%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "horizontalAlign": "left",
 "bottom": "5.4%",
 "contentOpaque": false,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "top": "4.6%",
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": true,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "32.02%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "class": "Container",
 "right": "35.41%",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "borderSize": 0,
 "top": "5%",
 "bottom": "79.4%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "class": "Container",
 "right": "10%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "horizontalAlign": "left",
 "bottom": "5%",
 "contentOpaque": false,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "top": "5%",
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": true,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "class": "Container",
 "right": "10%",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "borderSize": 0,
 "top": "5%",
 "bottom": "80%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_ADFDCA67_BA7D_DC1B_41DF_80A9ADD8EE34",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_0_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_ABDC16FA_BA43_D5F4_41E5_C47D6DFDBDF7",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_0_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AE0934B3_BA4D_F474_41B9_72D5C64FDB7A",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_0_HS_8_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AE0EC4B3_BA4D_F474_41E3_5561B6DC4FAA",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_0_HS_9_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AE0E94B3_BA4D_F474_41CD_CB15934A02E1",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_0_HS_10_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_ABD346FA_BA43_D5F4_41E4_AB92DBB003F3",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_0_HS_11_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AE0FE4B3_BA4D_F47B_41C5_41E41A4B5AA1",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_0_HS_12_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AE0FB4B3_BA4D_F47B_41D2_DE982805A954",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B1966017_BA44_2C3C_41DA_C74E48B77677_0_HS_13_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ]
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "paddingLeft": 0,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "class": "IconButton",
 "width": 60,
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": 60,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "image button menu"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "paddingLeft": 0,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "class": "IconButton",
 "width": 58,
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "click": "this.shareTwitter(window.location.href)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "shadow": false,
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton TWITTER"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "paddingLeft": 0,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "class": "IconButton",
 "width": 58,
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "click": "this.shareFacebook(window.location.href)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "shadow": false,
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton FB"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "children": [
  "this.Image_AF6D2D0E_BA47_D42D_41CB_3633EF8C1BCA"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "99.985%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "layout": "absolute",
 "height": "99.983%",
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "transparencyActive": false,
 "borderSize": 0,
 "horizontalAlign": "center",
 "width": "6.689%",
 "minHeight": 50,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "height": "17.238%",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "85%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "paddingLeft": 50,
 "scrollBarColor": "#0069A3",
 "paddingRight": 50,
 "class": "Container",
 "scrollBarOpacity": 0.51,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "15%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 400,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 20,
 "backgroundOpacity": 1,
 "paddingBottom": 20,
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "transparencyActive": false,
 "borderSize": 0,
 "horizontalAlign": "center",
 "width": "25%",
 "minHeight": 50,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "maxHeight": 1311,
 "maxWidth": 915,
 "id": "Image_AF6D2D0E_BA47_D42D_41CB_3633EF8C1BCA",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Image",
 "right": "10.05%",
 "width": "78.608%",
 "borderSize": 0,
 "url": "skin/Image_AF6D2D0E_BA47_D42D_41CB_3633EF8C1BCA.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "bottom": "12.3%",
 "minWidth": 1,
 "verticalAlign": "middle",
 "height": "73.322%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "scaleMode": "fill",
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "Image14729"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "WebFrame",
 "right": "0%",
 "backgroundColorDirection": "vertical",
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "minHeight": 1,
 "scrollEnabled": true,
 "borderSize": 0,
 "bottom": "0%",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "top": "0%",
 "insetBorder": false,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "WebFrame48191"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "height": 60,
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.79,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingBottom": 30,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "width": 370,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 40,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 20,
 "borderRadius": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.8vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.69vh;font-family:'Bebas Neue Bold';\">location</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.91vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.06vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">address line 1</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">address line 2</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:5.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.06vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac.</SPAN></SPAN></DIV></div>",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText"
 }
},
{
 "fontFamily": "Bebas Neue Bold",
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button"
 },
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "fontStyle": "normal",
 "iconBeforeLabel": true,
 "paddingLeft": 0,
 "paddingRight": 0,
 "fontSize": 34,
 "class": "Button",
 "width": 207,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderSize": 0,
 "borderColor": "#000000",
 "horizontalAlign": "center",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 59,
 "mode": "push",
 "minWidth": 1,
 "label": "lorem ipsum",
 "backgroundColor": [
  "#04A3E1"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.7,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "visible": false,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 1
}],
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "data": {
  "name": "Player468"
 },
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_0DD1BF09_1744_0507_41B3_29434E440055",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Image_A8E25BFD_BA44_73EF_41D7_9ED44A311115"
 ],
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Player",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "backgroundPreloadEnabled": true,
 "width": "100%",
 "borderSize": 0,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "existsKey": function(key){  return key in window; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "unregisterKey": function(key){  delete window[key]; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "horizontalAlign": "left",
 "defaultVRPointer": "laser",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "downloadEnabled": false,
 "verticalAlign": "top",
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible",
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
