<?php

/*
 * This file is part of Contao.
 *
 * (c) Leo Feyer
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\MenuBundle\FrontendModule;

use Contao\BackendTemplate;
use Contao\ModuleNavigation;
use Patchwork\Utf8;

class MenuModule extends ModuleNavigation
{
    protected $strTemplate = 'mod_huh_menu';

    const TYPE = 'huh_menu';

    public function generate()
    {
        if (TL_MODE == 'BE') {
            /** @var BackendTemplate|object $objTemplate */
            $objTemplate = new \BackendTemplate('be_wildcard');

            $objTemplate->wildcard = '### ' . Utf8::strtoupper($GLOBALS['TL_LANG']['FMD'][$this->type][0]) . ' ###';
            $objTemplate->title    = $this->headline;
            $objTemplate->id       = $this->id;
            $objTemplate->link     = $this->name;
            $objTemplate->href     = 'contao/main.php?do=themes&amp;table=tl_module&amp;act=edit&amp;id=' . $this->id;

            return $objTemplate->parse();
        }

        $strBuffer = parent::generate();

        return ($this->Template->items != '') ? $strBuffer : '';
    }

    protected function compile()
    {
        parent::compile();


    }
}
