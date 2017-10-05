bundle: main.js bullet.js airframe.js sprite.js
	browserify main.js bullet.js airframe.js sprite.js node_modules/p5/lib/p5.min.js -t [ babelify --presets es2015 ] -o bundle.js

clean:
	rm -f bundle.js
