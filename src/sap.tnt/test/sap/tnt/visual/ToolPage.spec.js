/*global describe,it,element,by,takeScreenshot,expect,browser*/

describe('sap.tnt.ToolPage', function() {
	"use strict";

	var bPhone = null;

	// initial loading
	it('should load test page', function () {
		browser.executeScript(function () {
			return sap.ui.Device.system.phone;
		}).then(function (response) {
			bPhone = response;
		});
		expect(takeScreenshot()).toLookAs('0_initial');
	});

	// change the page content
	it('should change the page content', function () {
		if (bPhone) {
			element(by.id('menuToggleButton')).click();
		}

		element(by.css('#NList > li:first-of-type > .sapTntNavLIGroupItems > li:nth-of-type(3)')).click();
		expect(takeScreenshot()).toLookAs('1_changed_page_content');
	});

	var sideNav = element(by.id('SNav'));

	// collapse NavigationListItem
	it('should visualize collapse NavigationListItem', function () {
		element(by.css('#NList > li:first-of-type .sapUiIcon[title=Collapse]')).click();
		expect(takeScreenshot(sideNav)).toLookAs('2_collapsedNavigation_List_Item');
	});

	// long list of items
	it('should visualize long list of items', function () {
		element(by.css('#NList > li:nth-of-type(3) .sapUiIcon[title=Expand]')).click();
		expect(takeScreenshot(sideNav)).toLookAs('3_long_list_of_items');
	});

	// collapse Side Content
	it('should visualize collapsed side content', function () {
			element(by.id('menuToggleButton')).click();
			expect(takeScreenshot()).toLookAs('4_collapsed_side_content');
	});

	// click on first item
	// only for desktop
	it('should click on first item (collapsed)', function () {
		if (!bPhone) {
			element(by.css('#NList > li:first-of-type')).click();
			expect(takeScreenshot()).toLookAs('5_click_on_first_item');
		}
	});

	// change the page content
	// only for desktop
	it('should change the page content (collapsed)', function () {
		if (!bPhone) {
			element(by.css('.sapTntNavLIPopup ul.sapTntNavLIGroupItems > li:first-child')).click();
			expect(takeScreenshot()).toLookAs('6_change_page_content');
		}
	});

	// long list of items
	// only for desktop
	it('should visualize long list of items (collapsed)', function () {
		if (!bPhone) {
			element(by.css('#NList > li:nth-of-type(3)')).click();
			expect(takeScreenshot()).toLookAs('7_long_list_of_items');
		}
	});

	var toolHeader = element(by.id('tHeader'));
	it('should display tool header', function () {
		expect(takeScreenshot(toolHeader)).toLookAs('8_tool_header');
	});
});
