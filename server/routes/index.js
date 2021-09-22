import express from 'express';
import webpack from 'webpack';
import wds from 'webpack-dev-middleware';

import webpackConfig from '../../webpack.config';

const compiler = webpack(webpackConfig);

const router = express.Router();
router.use('/', wds(compiler));
router.get('/', (req, res) => res.send('router operational'));

export default router;
