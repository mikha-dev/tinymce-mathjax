<?php

namespace DcatAdminExt\TinymceMathjax;

use Dcat\Admin\Extend\ServiceProvider;
use Dcat\Admin\Admin;
use Dcat\Admin\Form;

class TinymceMathjaxServiceProvider extends ServiceProvider
{
	protected $js = [
	    'lib/tinymce/tinymce.min.js',
        'js/index.js',
        'js/ext_toolbar.js'
    ];
	protected $css = [];

	public function register()
	{
		//
	}

	public function init()
	{
		parent::init();

        Admin::requireAssets('@dcat-admin-ext.tinymce-mathjax');
        Admin::booting(function () {
            Form::extend('matheditor', \DcatAdminExt\TinymceMathjax\Form\MathEditor::class);
        });

	}

	public function settingForm()
	{
		return new Setting($this);
	}
}
