<?php

namespace DcatAdminExt\TinymceMathjax\Form;

use Dcat\Admin\Form\Field;
use Dcat\Admin\Support\Helper;

class MathEditor extends Field
{
    /**
     * @var string
     */
    protected $view = 'dcat-admin-ext.tinymce-mathjax::math-editor';

    protected $options = [
        'plugins' => [
            'image',
            'code',
            'table',
            'charmap'
        ],
        'toolbar' => [
            'bold italic underline strikethrough forecolor table image | mathjax 手写公式 LaTex符号 | charmap code', // 三角函数 微分表 积分表 平面几何 立体几何 方程表 矩阵 概率 指数对数
        ],
        // 'menubar' => '小学公式 初中公式 高中公式 微分 积分 概率论 线性代数 三角函数 平面几何 立体几何',
        'menubar' => false,
        'menu' => [
            '小学公式' => [ 'title' => '小学公式', 'items' => '加法减法 乘法除法 括号运算 几何公式'],
            '初中公式' => [ 'title' => '初中公式', 'items' => '乘方 开方 二次方程根'],
            '高中公式' => [ 'title' => '高中公式', 'items' => '指数对数 等差求和 标准差'],
            '微分' => [ 'title' => '微分', 'items' => '极限 导数 偏分方程'],
            '积分' => [ 'title' => '积分', 'items' => '不定积分 定积分 二重积分'],
            '概率论' => [ 'title' => '概率论', 'items' => '贝叶斯定理 正态分布 泊松分布'],
            '线性代数' => [ 'title' => '线性代数', 'items' => '三阶行列式 矩阵 余子式'],
            '三角函数' => ['title' => '三角函数', 'items' => '正弦余弦 正切余切 正割余割'],
            '平面几何' => [ 'title' => '平面几何', 'items' => '抛物线 圆 椭圆 双曲线'],
            '立体几何' => [ 'title' => '立体几何', 'items' => '球的体积'],
        ],
        'external_plugins' => [
            'mathjax' => '/vendor/dcat-admin-extensions/dcat-admin-ext/tinymce-mathjax/lib/tinymce/plugins/math/plugin.js'
        ],
        'mathjax' => [
            'lib' => '/vendor/dcat-admin-extensions/dcat-admin-ext/tinymce-mathjax/lib/mathjax/es5/tex-mml-chtml.js',
            'symbols' => [
                'start' => '\\(', 'end' => '\\)'
            ]
        ],
        'min_height' => 300,
        'save_enablewhendirty' => true,
        'convert_urls' => false,
        'forced_root_block' => false
    ];

    protected $disk;

    protected $imageUploadDirectory = 'tinymce/images';

    /**
     * 设置文件上传存储配置.
     *
     * @param string $disk
     *
     * @return $this
     */
    public function disk(string $disk)
    {
        $this->disk = $disk;

        return $this;
    }

    /**
     * 设置图片上传文件夹.
     *
     * @param string $dir
     *
     * @return $this
     */
    public function imageDirectory(string $dir)
    {
        $this->imageUploadDirectory = $dir;

        return $this;
    }

    /**
     * 自定义图片上传接口.
     *
     * @param string $url
     *
     * @return $this
     */
    public function imageUrl(string $url)
    {
        return $this->mergeOptions(['images_upload_url' => $this->formatUrl(admin_url($url))]);
    }

    /**
     * 设置语言包url.
     *
     * @param string $url
     *
     * @return $this
     */
    public function languageUrl(string $url)
    {
        return $this->mergeOptions(['language_url' => $url]);
    }

    /**
     * 设置编辑器高度.
     *
     * @param int $height
     *
     * @return $this
     */
    public function height(int $height)
    {
        return $this->mergeOptions(['min_height' => $height]);
    }

    /**
     * @return array
     */
    protected function formatOptions()
    {
        $this->options['language'] = config('app.locale');
        $this->options['readonly'] = ! empty($this->attributes['readonly']) || ! empty($this->attributes['disabled']);

        if (empty($this->options['images_upload_url'])) {
            $this->options['images_upload_url'] = $this->defaultImageUploadUrl();
        }

        return $this->options;
    }

    /**
     * @return string
     */
    protected function defaultImageUploadUrl()
    {
        return $this->formatUrl(route(admin_api_route_name('tinymce.upload')));
    }

    /**
     * @param string $url
     *
     * @return string
     */
    protected function formatUrl(string $url)
    {
        return Helper::urlWithQuery(
            $url,
            [
                '_token' => csrf_token(),
                'disk'   => $this->disk,
                'dir'    => $this->imageUploadDirectory,
            ]
        );
    }

    /**
     * @return string
     */
    public function render()
    {
        $this->addVariables([
            'options' => $this->formatOptions(),
        ]);

        return parent::render();
    }
}
