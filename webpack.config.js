var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var PROD = (process.env.NODE_ENV === 'production');

console.log('Production Build: ' + PROD);

var entry = [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    './src/scripts/app.jsx'
];

var alias = {
    'components': 'scripts/components',
    'views': 'scripts/views'
};

var plugins = [
    new HtmlWebpackPlugin({
        title: 'BookLister',
        template: './src/index.html',
        filename: 'index.html'
    }),
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }
    })
];

if (PROD) {
    var prodAlias = {
        'react': 'react/dist/react.min.js',
        'react-dom': 'react-dom/dist/react-dom.min.js'
    };

    var prodPlugins = [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
    ];

    Object.assign(alias, prodAlias);
    plugins = plugins.concat(prodPlugins);

    entry.shift();
}

module.exports = {
    entry,
    module: {
        loaders: [{
            test: /\.(jsx|js)?$/,
            exclude: /node_modules/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.(scss|css)$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.woff(\?v=\d+\.\d+\.\d+|.*)?$/,
            loader: 'url?limit=10000&mimetype=application/font-woff'
        }, {
            test: /\.woff2(\?v=\d+\.\d+\.\d+|.*)?$/,
            loader: 'url?limit=10000&mimetype=application/font-woff'
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+|.*)?$/,
            loader: 'url?limit=10000&mimetype=application/octet-stream'
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+|.*)?$/,
            loader: 'file'
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+|.*)?$/,
            loader: 'url?limit=10000&mimetype=image/svg+xml'
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+|.*)?$/,
            loader: 'url?limit=10000&mimetype=image/svg+xml'
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: [
                'file?hash=sha512&digest=hex&name=[hash].[ext]',
                'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }]
    },
    output: {
        filename: 'app.js',
        path: path.join(__dirname, '/build')
    },
    resolve: {
        root: path.resolve(__dirname, 'src'),
        modulesDirectories: ['node_modules'],
        extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.json'],
        alias
    },
    plugins
};
