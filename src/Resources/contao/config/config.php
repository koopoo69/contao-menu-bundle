<?php

/**
 * Frontend modules
 */
$GLOBALS['FE_MOD']['navigation'][\HeimrichHannot\MenuBundle\FrontendModule\MenuModule::TYPE] = \HeimrichHannot\MenuBundle\FrontendModule\MenuModule::class;

/**
 * JS
 */
if (System::getContainer()->get('huh.utils.container')->isFrontend()) {
    $GLOBALS['TL_JAVASCRIPT']['contao-list-bundle'] = 'bundles/contaomenu/js/contao-menu-bundle.js|static';
}