<?php

/**
 * Frontend modules
 */
$GLOBALS['FE_MOD']['navigationMenu'][\HeimrichHannot\MenuBundle\FrontendModule\MenuModule::TYPE] = \HeimrichHannot\MenuBundle\FrontendModule\MenuModule::class;
$GLOBALS['FE_MOD']['navigationMenu'][\HeimrichHannot\MenuBundle\FrontendModule\CustomMenuModule::TYPE] = \HeimrichHannot\MenuBundle\FrontendModule\CustomMenuModule::class;

/**
 * JS
 */
if (System::getContainer()->get('huh.utils.container')->isFrontend()) {
    $GLOBALS['TL_JAVASCRIPT']['contao-menu-bundle'] = 'bundles/contaomenu/contao-menu-bundle.js';
}

/**
 * CSS
 */
if (System::getContainer()->get('huh.utils.container')->isFrontend()) {
    $GLOBALS['TL_CSS']['contao-menu-bundle'] = 'bundles/contaomenu/contao-menu-bundle.css';
}