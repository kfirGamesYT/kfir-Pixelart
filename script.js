let namespace = "pam";

/**
 * @author Frank Dip
 * @desc Pixel Art Maker
 * Not using JS design pattern Module yet.
 * TODO: Refactor to DRY code
 * @version 1.4
 */

/********************************************//**
 *  DOM Selectors jQuery
 ***********************************************/

const $body = $("body");

const $savePNG = $(`#${namespace}-save-png`);
const $saveJPEG = $(`#${namespace}-save-jpeg`);
const $deleteButton = $(`#${namespace}-delete--button`);

const $borderDefault = $(`#${namespace}-border--default`);
const $borderLess = $(`#${namespace}-border--less`);
const $borderColor = $(`#${namespace}-border--color`);

const $pixelArtPikachu = $(`#${namespace}-pixel-art--pikachu`);
const $pixelArtPokeball = $(`#${namespace}-pixel-art--pokeball`);

const $colorPicker = $(`#${namespace}-color-picker`);

const $sizePicker = $(`#${namespace}-size-picker`);
const $sizePickerWidth = $(`#${namespace}-size-picker--width`);
const $sizePickerHeight = $(`#${namespace}-size-picker--height`);
const $sizePickerSubmit= $(`#${namespace}-size-picker--submit`);

const $toolPaint = $(`#${namespace}-tool--paint`);
const $toolDipper = $(`#${namespace}-tool--dipper`);
const $toolEraser = $(`#${namespace}-tool--eraser`);

const $table = $(`#${namespace}-table`);

const $helpViewBody = $(`#${namespace}-help--view--body`);

const $tooltip = $("[data-toggle='tooltip']");

/********************************************//**
 * Model
 ***********************************************/

/**
 * @desc Holds the pixel art
 */
const pixel = [
  {
    name: "ピカチュー",
    modal: {
      id: `${namespace}-pixel-art--modal--pikachu`
    },
    width: 28,
    height: 24,
    color: {
      picker: "#FFEA00",
      background: "#FFEA00"
    },
    art: [
      {
        // Black
        color: "#000000",
        pixel: [
          {tr: 1, td: 1},
          {tr: 1, td: 2},
          {tr: 1, td: 27},
          {tr: 1, td: 28},
          {tr: 2, td: 1},
          {tr: 2, td: 2},
          {tr: 2, td: 3},
          {tr: 2, td: 4},
          {tr: 2, td: 25},
          {tr: 2, td: 26},
          {tr: 2, td: 27},
          {tr: 2, td: 28},
          {tr: 3, td: 1},
          {tr: 3, td: 2},
          {tr: 3, td: 3},
          {tr: 3, td: 5},
          {tr: 3, td: 24},
          {tr: 3, td: 26},
          {tr: 3, td: 27},
          {tr: 3, td: 28},
          {tr: 4, td: 1},
          {tr: 4, td: 2},
          {tr: 4, td: 3},
          {tr: 4, td: 6},
          {tr: 4, td: 7},
          {tr: 4, td: 22},
          {tr: 4, td: 23},
          {tr: 4, td: 26},
          {tr: 4, td: 27},
          {tr: 4, td: 28},
          {tr: 5, td: 2},
          {tr: 5, td: 3},
          {tr: 5, td: 8},
          {tr: 5, td: 21},
          {tr: 5, td: 26},
          {tr: 5, td: 27},
          {tr: 6, td: 2},
          {tr: 6, td: 3},
          {tr: 6, td: 9},
          {tr: 6, td: 10},
          {tr: 6, td: 13},
          {tr: 6, td: 14},
          {tr: 6, td: 15},
          {tr: 6, td: 16},
          {tr: 6, td: 19},
          {tr: 6, td: 20},
          {tr: 6, td: 26},
          {tr: 6, td: 27},
          {tr: 7, td: 3},
          {tr: 7, td: 11},
          {tr: 7, td: 12},
          {tr: 7, td: 17},
          {tr: 7, td: 18},
          {tr: 7, td: 26},
          {tr: 8, td: 4},
          {tr: 8, td: 25},
          {tr: 9, td: 4},
          {tr: 9, td: 25},
          {tr: 10, td: 5},
          {tr: 10, td: 7},
          {tr: 10, td: 22},
          {tr: 10, td: 24},
          {tr: 11, td: 6},
          {tr: 11, td: 23},
          {tr: 12, td: 6},
          {tr: 12, td: 23},
          {tr: 12, td: 7},
          {tr: 13, td: 5},
          {tr: 13, td: 8},
          {tr: 13, td: 9},
          {tr: 13, td: 20},
          {tr: 13, td: 21},
          {tr: 13, td: 24},
          {tr: 13, td: 6},
          {tr: 14, td: 5},
          {tr: 14, td: 7},
          {tr: 14, td: 9},
          {tr: 14, td: 10},
          {tr: 14, td: 19},
          {tr: 14, td: 20},
          {tr: 14, td: 22},
          {tr: 14, td: 24},
          {tr: 14, td: 23},
          {tr: 15, td: 5},
          {tr: 15, td: 7},
          {tr: 15, td: 8},
          {tr: 15, td: 9},
          {tr: 15, td: 10},
          {tr: 15, td: 19},
          {tr: 15, td: 20},
          {tr: 15, td: 21},
          {tr: 15, td: 22},
          {tr: 15, td: 24},
          {tr: 15, td: 6},
          {tr: 16, td: 5},
          {tr: 16, td: 8},
          {tr: 16, td: 9},
          {tr: 16, td: 14},
          {tr: 16, td: 15},
          {tr: 16, td: 20},
          {tr: 16, td: 21},
          {tr: 16, td: 24},
          {tr: 17, td: 4},
          {tr: 17, td: 25},
          {tr: 18, td: 4},
          {tr: 18, td: 12},
          {tr: 18, td: 14},
          {tr: 18, td: 15},
          {tr: 18, td: 17},
          {tr: 18, td: 25},
          {tr: 19, td: 4},
          {tr: 19, td: 13},
          {tr: 19, td: 14},
          {tr: 19, td: 15},
          {tr: 19, td: 16},
          {tr: 19, td: 25},
          {tr: 20, td: 5},
          {tr: 20, td: 13},
          {tr: 20, td: 16},
          {tr: 20, td: 24},
          {tr: 21, td: 6},
          {tr: 21, td: 13},
          {tr: 21, td: 16},
          {tr: 21, td: 23},
          {tr: 22, td: 7},
          {tr: 22, td: 8},
          {tr: 22, td: 14},
          {tr: 22, td: 15},
          {tr: 22, td: 21},
          {tr: 22, td: 22},
          {tr: 23, td: 9},
          {tr: 23, td: 10},
          {tr: 23, td: 11},
          {tr: 23, td: 18},
          {tr: 23, td: 19},
          {tr: 23, td: 20},
          {tr: 24, td: 12},
          {tr: 24, td: 13},
          {tr: 24, td: 14},
          {tr: 24, td: 15},
          {tr: 24, td: 16},
          {tr: 24, td: 17}
        ]
      },
      // Yellow
      {
        color: "#FFEA00",
        pixel: [
          {tr: 3, td: 4},
          {tr: 3, td: 25},
          {tr: 4, td: 4},
          {tr: 4, td: 5},
          {tr: 4, td: 24},
          {tr: 4, td: 25},
          {tr: 5, td: 4},
          {tr: 5, td: 5},
          {tr: 5, td: 6},
          {tr: 5, td: 7},
          {tr: 5, td: 22},
          {tr: 5, td: 23},
          {tr: 5, td: 24},
          {tr: 5, td: 25},
          {tr: 6, td: 4},
          {tr: 6, td: 5},
          {tr: 6, td: 6},
          {tr: 6, td: 7},
          {tr: 6, td: 8},
          {tr: 6, td: 21},
          {tr: 6, td: 22},
          {tr: 6, td: 23},
          {tr: 6, td: 24},
          {tr: 6, td: 25},
          {tr: 7, td: 4},
          {tr: 7, td: 5},
          {tr: 7, td: 6},
          {tr: 7, td: 7},
          {tr: 7, td: 8},
          {tr: 7, td: 9},
          {tr: 7, td: 10},
          {tr: 7, td: 13},
          {tr: 7, td: 14},
          {tr: 7, td: 15},
          {tr: 7, td: 16},
          {tr: 7, td: 19},
          {tr: 7, td: 20},
          {tr: 7, td: 21},
          {tr: 7, td: 22},
          {tr: 7, td: 23},
          {tr: 7, td: 24},
          {tr: 7, td: 25},
          {tr: 8, td: 5},
          {tr: 8, td: 6},
          {tr: 8, td: 7},
          {tr: 8, td: 8},
          {tr: 8, td: 9},
          {tr: 8, td: 10},
          {tr: 8, td: 11},
          {tr: 8, td: 12},
          {tr: 8, td: 13},
          {tr: 8, td: 14},
          {tr: 8, td: 15},
          {tr: 8, td: 16},
          {tr: 8, td: 17},
          {tr: 8, td: 18},
          {tr: 8, td: 19},
          {tr: 8, td: 20},
          {tr: 8, td: 21},
          {tr: 8, td: 22},
          {tr: 8, td: 23},
          {tr: 8, td: 24},
          {tr: 9, td: 5},
          {tr: 9, td: 6},
          {tr: 9, td: 7},
          {tr: 9, td: 8},
          {tr: 9, td: 9},
          {tr: 9, td: 10},
          {tr: 9, td: 11},
          {tr: 9, td: 12},
          {tr: 9, td: 13},
          {tr: 9, td: 14},
          {tr: 9, td: 15},
          {tr: 9, td: 16},
          {tr: 9, td: 17},
          {tr: 9, td: 18},
          {tr: 9, td: 19},
          {tr: 9, td: 20},
          {tr: 9, td: 21},
          {tr: 9, td: 22},
          {tr: 9, td: 23},
          {tr: 9, td: 24},
          {tr: 10, td: 6},
          {tr: 10, td: 8},
          {tr: 10, td: 9},
          {tr: 10, td: 10},
          {tr: 10, td: 11},
          {tr: 10, td: 12},
          {tr: 10, td: 13},
          {tr: 10, td: 14},
          {tr: 10, td: 15},
          {tr: 10, td: 16},
          {tr: 10, td: 17},
          {tr: 10, td: 18},
          {tr: 10, td: 19},
          {tr: 10, td: 20},
          {tr: 10, td: 21},
          {tr: 10, td: 23},
          {tr: 11, td: 7},
          {tr: 11, td: 8},
          {tr: 11, td: 9},
          {tr: 11, td: 10},
          {tr: 11, td: 11},
          {tr: 11, td: 12},
          {tr: 11, td: 13},
          {tr: 11, td: 14},
          {tr: 11, td: 15},
          {tr: 11, td: 16},
          {tr: 11, td: 17},
          {tr: 11, td: 18},
          {tr: 11, td: 19},
          {tr: 11, td: 20},
          {tr: 11, td: 21},
          {tr: 11, td: 22},
          {tr: 12, td: 7},
          {tr: 12, td: 8},
          {tr: 12, td: 9},
          {tr: 12, td: 10},
          {tr: 12, td: 11},
          {tr: 12, td: 12},
          {tr: 12, td: 13},
          {tr: 12, td: 14},
          {tr: 12, td: 15},
          {tr: 12, td: 16},
          {tr: 12, td: 17},
          {tr: 12, td: 18},
          {tr: 12, td: 19},
          {tr: 12, td: 20},
          {tr: 12, td: 21},
          {tr: 12, td: 22},
          {tr: 13, td: 6},
          {tr: 13, td: 7},
          {tr: 13, td: 10},
          {tr: 13, td: 11},
          {tr: 13, td: 12},
          {tr: 13, td: 13},
          {tr: 13, td: 14},
          {tr: 13, td: 15},
          {tr: 13, td: 16},
          {tr: 13, td: 17},
          {tr: 13, td: 18},
          {tr: 13, td: 19},
          {tr: 13, td: 22},
          {tr: 13, td: 23},
          {tr: 14, td: 6},
          {tr: 14, td: 11},
          {tr: 14, td: 12},
          {tr: 14, td: 13},
          {tr: 14, td: 14},
          {tr: 14, td: 15},
          {tr: 14, td: 16},
          {tr: 14, td: 17},
          {tr: 14, td: 18},
          {tr: 14, td: 23},
          {tr: 15, td: 6},
          {tr: 15, td: 11},
          {tr: 15, td: 12},
          {tr: 15, td: 13},
          {tr: 15, td: 14},
          {tr: 15, td: 15},
          {tr: 15, td: 16},
          {tr: 15, td: 17},
          {tr: 15, td: 18},
          {tr: 15, td: 23},
          {tr: 16, td: 6},
          {tr: 16, td: 7},
          {tr: 16, td: 10},
          {tr: 16, td: 11},
          {tr: 16, td: 12},
          {tr: 16, td: 13},
          {tr: 16, td: 16},
          {tr: 16, td: 17},
          {tr: 16, td: 18},
          {tr: 16, td: 19},
          {tr: 16, td: 22},
          {tr: 16, td: 23},
          {tr: 17, td: 5},
          {tr: 17, td: 6},
          {tr: 17, td: 9},
          {tr: 17, td: 10},
          {tr: 17, td: 11},
          {tr: 17, td: 12},
          {tr: 17, td: 13},
          {tr: 17, td: 14},
          {tr: 17, td: 15},
          {tr: 17, td: 16},
          {tr: 17, td: 17},
          {tr: 17, td: 18},
          {tr: 17, td: 19},
          {tr: 17, td: 20},
          {tr: 17, td: 23},
          {tr: 17, td: 24},
          {tr: 18, td: 5},
          {tr: 18, td: 10},
          {tr: 18, td: 11},
          {tr: 18, td: 13},
          {tr: 18, td: 16},
          {tr: 18, td: 18},
          {tr: 18, td: 19},
          {tr: 18, td: 24},
          {tr: 19, td: 5},
          {tr: 19, td: 10},
          {tr: 19, td: 11},
          {tr: 19, td: 12},
          {tr: 19, td: 17},
          {tr: 19, td: 18},
          {tr: 19, td: 19},
          {tr: 19, td: 24},
          {tr: 20, td: 6},
          {tr: 20, td: 9},
          {tr: 20, td: 10},
          {tr: 20, td: 11},
          {tr: 20, td: 12},
          {tr: 20, td: 17},
          {tr: 20, td: 18},
          {tr: 20, td: 19},
          {tr: 20, td: 20},
          {tr: 20, td: 23},
          {tr: 21, td: 7},
          {tr: 21, td: 8},
          {tr: 21, td: 9},
          {tr: 21, td: 10},
          {tr: 21, td: 11},
          {tr: 21, td: 12},
          {tr: 21, td: 17},
          {tr: 21, td: 18},
          {tr: 21, td: 19},
          {tr: 21, td: 20},
          {tr: 21, td: 21},
          {tr: 21, td: 22},
          {tr: 22, td: 9},
          {tr: 22, td: 10},
          {tr: 22, td: 11},
          {tr: 22, td: 12},
          {tr: 22, td: 13},
          {tr: 22, td: 16},
          {tr: 22, td: 17},
          {tr: 22, td: 18},
          {tr: 22, td: 19},
          {tr: 22, td: 20},
          {tr: 23, td: 12},
          {tr: 23, td: 13},
          {tr: 23, td: 14},
          {tr: 23, td: 15},
          {tr: 23, td: 16},
          {tr: 23, td: 17}
        ]
      },
      // Red
      {
        color: "#FF0000",
        pixel: [
          {tr: 17, td: 7},
          {tr: 17, td: 8},
          {tr: 17, td: 21},
          {tr: 17, td: 22},
          {tr: 18, td: 6},
          {tr: 18, td: 7},
          {tr: 18, td: 8},
          {tr: 18, td: 9},
          {tr: 18, td: 20},
          {tr: 18, td: 21},
          {tr: 18, td: 22},
          {tr: 18, td: 23},
          {tr: 19, td: 6},
          {tr: 19, td: 7},
          {tr: 19, td: 8},
          {tr: 19, td: 9},
          {tr: 19, td: 20},
          {tr: 19, td: 21},
          {tr: 19, td: 22},
          {tr: 19, td: 23},
          {tr: 20, td: 7},
          {tr: 20, td: 8},
          {tr: 20, td: 14},
          {tr: 20, td: 15},
          {tr: 20, td: 21},
          {tr: 20, td: 22},
          {tr: 21, td: 14},
          {tr: 21, td: 15}
        ]
      },
      // White
      {
        color: "#FFFFFF",
        pixel: [
          {tr: 14, td: 8},
          {tr: 14, td: 21},
        ]
      }
    ]
  },
  {
    name: "Pokeball",
    modal: {
      id: `${namespace}-pixel-art--modal--pokeball`
    },
    width: 14,
    height: 14,
    color: {
      picker: "#FF0000",
      background: "#FF0000"
    },
    art: [
      {
        color: "#000000",
        pixel: [
          {tr: 1, td: 6},
          {tr: 1, td: 7},
          {tr: 1, td: 8},
          {tr: 1, td: 9},
          {tr: 2, td: 4},
          {tr: 2, td: 5},
          {tr: 2, td: 10},
          {tr: 2, td: 11},
          {tr: 3, td: 3},
          {tr: 3, td: 12},
          {tr: 4, td: 2},
          {tr: 4, td: 13},
          {tr: 5, td: 2},
          {tr: 5, td: 13},
          {tr: 6, td: 1},
          {tr: 6, td: 7},
          {tr: 6, td: 8},
          {tr: 6, td: 14},
          {tr: 7, td: 1},
          {tr: 7, td: 6},
          {tr: 7, td: 9},
          {tr: 7, td: 14},
          {tr: 8, td: 1},
          {tr: 8, td: 2},
          {tr: 8, td: 3},
          {tr: 8, td: 4},
          {tr: 8, td: 5},
          {tr: 8, td: 6},
          {tr: 8, td: 9},
          {tr: 8, td: 10},
          {tr: 8, td: 11},
          {tr: 8, td: 12},
          {tr: 8, td: 13},
          {tr: 8, td: 14},
          {tr: 9, td: 1},
          {tr: 9, td: 7},
          {tr: 9, td: 8},
          {tr: 9, td: 14},
          {tr: 10, td: 2},
          {tr: 10, td: 13},
          {tr: 11, td: 2},
          {tr: 11, td: 13},
          {tr: 12, td: 3},
          {tr: 12, td: 12},
          {tr: 13, td: 4},
          {tr: 13, td: 5},
          {tr: 13, td: 10},
          {tr: 13, td: 11},
          {tr: 14, td: 6},
          {tr: 14, td: 7},
          {tr: 14, td: 8},
          {tr: 14, td: 9}
        ]
      },
      {
        color: "#FF0000",
        pixel: [
          {tr: 2, td: 6},
          {tr: 2, td: 7},
          {tr: 2, td: 8},
          {tr: 2, td: 9},
          {tr: 3, td: 4},
          {tr: 3, td: 5},
          {tr: 3, td: 6},
          {tr: 3, td: 7},
          {tr: 3, td: 8},
          {tr: 3, td: 9},
          {tr: 3, td: 10},
          {tr: 3, td: 11},
          {tr: 4, td: 3},
          {tr: 4, td: 4},
          {tr: 4, td: 5},
          {tr: 4, td: 6},
          {tr: 4, td: 7},
          {tr: 4, td: 8},
          {tr: 4, td: 9},
          {tr: 4, td: 10},
          {tr: 4, td: 11},
          {tr: 4, td: 12},
          {tr: 5, td: 3},
          {tr: 5, td: 4},
          {tr: 5, td: 5},
          {tr: 5, td: 6},
          {tr: 5, td: 7},
          {tr: 5, td: 8},
          {tr: 5, td: 9},
          {tr: 5, td: 10},
          {tr: 5, td: 11},
          {tr: 5, td: 12},
          {tr: 6, td: 2},
          {tr: 6, td: 3},
          {tr: 6, td: 4},
          {tr: 6, td: 5},
          {tr: 6, td: 6},
          {tr: 6, td: 9},
          {tr: 6, td: 10},
          {tr: 6, td: 11},
          {tr: 6, td: 12},
          {tr: 6, td: 13},
          {tr: 7, td: 2},
          {tr: 7, td: 3},
          {tr: 7, td: 4},
          {tr: 7, td: 5},
          {tr: 7, td: 10},
          {tr: 7, td: 11},
          {tr: 7, td: 12},
          {tr: 7, td: 13}
        ]
      }
    ]
  }
];

/**
 * @desc Keeps track of which tool is active
 * TODO: Test if JS design module can be used.
 */
const tool = {
  paint: true,
  dipper: false,
  eraser: false,
  painting: function() {
    this.paint = true,
    this.dipper = false,
    this.eraser = false
  },
  dipping: function() {
    this.paint = false;
    this.dipper = true;
    this.eraser = false;
  },
  erasing: function() {
    this.paint = false;
    this.dipper = false;
    this.eraser = true;
  }
};

/**
 * @desc Converts rgb to hex
 * @param {string} color_value Takes a string in rgb format
 */
function rgba2hex(color_value) {
	if (!color_value) return false;
	let parts = color_value.toLowerCase().match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/),
	    length = color_value.indexOf('rgba') ? 3 : 2; // Fix for alpha values
	delete(parts[0]);
	for (var i = 1; i <= length; i++) {
		parts[i] = parseInt( parts[i] ).toString(16);
		if (parts[i].length == 1) parts[i] = '0' + parts[i];
	}
	return '#' + parts.join('').toUpperCase(); // #F7F7F7
}

/********************************************//**
 * Controller
 ***********************************************/

 /**
  * @desc Creates the pixel art links
  * Creates the table on load
  * Creates the help documentation
  * Makes the bootstrap tooltip work
  */
$(_ => {
  drawPixel(pixel[0]);
  $tooltip.tooltip();
});

/**
 * @desc Saves the file to a png
 */
$savePNG.click(_ => {
  html2canvas($table, {
    onrendered: function (canvas) {
      const a = document.createElement('a');
      a.href = canvas.toDataURL();
      a.download = 'pixelart.png';
      a.click();
    }
  });
});

/**
 * @desc Saves the file to a jpeg
 */
$saveJPEG.click(_ => {
  html2canvas($table, {
    onrendered: function (canvas) {
      const a = document.createElement('a');
      a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
      a.download = 'pixelart.jpeg';
      a.click();
    }
  });
});

/**
 * @desc Deletes the table children
 */
$deleteButton.click(_ => clearTableChildren());

/**
 * @desc Restores border
 * Can't use saved DOM selectors yet
 * TODO: Figure out how to use save DOM selectors
 */
$borderDefault.click(_ => {
    $(`#${namespace}-table`).css("border", "");
    $(`#${namespace}-table tr`).css("border", "");
    $(`#${namespace}-table td`).css("border", "");
});

/**
 * @desc Removes border
 * Can't use saved DOM selectors yet
 * TODO: Figure out how to use save DOM selectors
 */
$borderLess.click(_ => {
  $(`#${namespace}-table tr`).css("border", "none");
  $(`#${namespace}-table td`).css("border", "none");
});

/**
 * @desc Changes the colors of the border
 * Can't use saved DOM selectors yet
 * TODO: Figure out how to use save DOM selectors
 */
$borderColor.on("click change", _ => {
  $(`#${namespace}-table`).css("border-color", $borderColor.val());
  $(`#${namespace}-table tr`).css("border-color", $borderColor.val());
  $(`#${namespace}-table td`).css("border-color", $borderColor.val());
});

/**
 * @desc Creates the piakchu pixel art
 * @param {object} pixel[0] Object with pikachu art
 */
$pixelArtPikachu.click(_ => drawPixel(pixel[0]));

/** 
 * @desc Creates the pokeball pixel art
 * @param {object} pixel[1] Object with pokeball art
 */
$pixelArtPokeball.click(_ => drawPixel(pixel[1]));

/**
 * @desc Submits the form
 */
$sizePickerSubmit.click(_ => $sizePicker.submit());

/**
 * @desc On submit of the form, creates a table
 * @param {event} event Uses the event to prevent default of the form
 */
$sizePicker.on("submit", event => {
  event.preventDefault();
  setTable($sizePickerWidth.val(), $sizePickerHeight.val());
});

/**
 * @desc Sets the paint tool to true and active
 */
$toolPaint.on("click", _ => {
  tool.painting();
  toolSetClass(tool);
});

/**
 * @desc Sets the dipper tool to true and active
 */
$toolDipper.on("click", _ => {
  tool.dipping();
  toolSetClass(tool);
});

/**
 * @desc Sets the erase tool to true and active
 */
$toolEraser.on("click", _ => {
  tool.erasing();
  toolSetClass(tool);
});

/**
 * @desc Allows to paint on the table
 * @param {event} event Uses the event target to select each td
 * @param {boolean} down Used to determine if the paintTool should be active
 * @param {object} tool Used to determine which tool is active
 */
(_ => {
  let down = false;
  $table.on("mousedown", "td", event => {
    down = true;
    toolBar(event, down, tool);
  }).on("mouseover", "td", event => toolBar(event, down, tool))
  .on("mouseup", _ => down = false)
  .on("mouseleave", _ => down = false);
})();

/**
 * @desc Erases the background color to default on double click
 */
$table.on("dblclick", "td", event => {
  $(event.target).css("background-color", "");
});

/********************************************//**
 * View
 ***********************************************/
/**
 * @desc Changes the classes tools
 */
function toolSetClass(ele) {
  if (ele.paint === true) {
    $toolPaint.addClass("active");
  } else if (ele.paint === false) {
    $toolPaint.removeClass("active");
  }

  if (ele.dipper === true) {
    $toolDipper.addClass("active");
  } else if (ele.dipper === false) {
    $toolDipper.removeClass("active");
  }

  if (ele.eraser === true) {
    $toolEraser.addClass("active");
  } else if (ele.eraser === false) {
    $toolEraser.removeClass("active");
  }
}

/**
 * @desc Paints the canvas table
 * @param {event} event Sets the event from the target
 * @param {boolean} down Sets if the tool should be active
 * @param {object} tool Uses data from the object for which to use
 */
function toolBar(event, down, tool) {
  if (down) {
    if (tool.paint === true) {
      $(event.target).css("background-color", $colorPicker.val());
    } else if (tool.dipper === true) {
      const hex = rgba2hex($(event.target).css("background-color"));
      $colorPicker.val(hex);
    } else if (tool.eraser === true) {
      $(event.target).css("background-color", "");
    }
  }
}

/**
 * @desc Removes table children
 */
function clearTableChildren() {$table.empty();}

/**
 * @desc Creates the table
 * @param {number} width Takes a number to create the columns
 * @param {number} height Takes a number to create the rows
 */
function setTable(width, height) {
  const tbody = document.createElement("tbody");
  clearTableChildren();
  for (let i = 0; i < height; i++) {
    const row = tbody.insertRow(i);
    for (let j = 0; j < width; j++) {
      const cell = row.insertCell(j);
    }
  }
  $table.append(tbody);
}

/**
 * @desc Makes the pixel art.
 * @param {object} ele Takes an object to draw the art.
 */
function drawPixel(ele) {
  $sizePickerWidth.val(ele.width);
  $sizePickerHeight.val(ele.height);
  $colorPicker.val(ele.color.picker);
  setTable(ele.width, ele.height);
  ele.art.forEach(ele1 => {
    ele1.pixel.forEach(ele2 => {
      $(`tr:nth-child(${ele2.tr}) td:nth-child(${ele2.td})`).css("background", ele1.color);
    });
  });
}