import React from "react";
import { storiesOf } from "@storybook/react";
import {
	withKnobs,
	text,
	boolean,
	number,
	array,
	select,
	object
} from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import withReadme from "storybook-readme/with-readme";
import { withInfo } from '@storybook/addon-info';

// import READMEs for each component
import SingleListReadme from "@appbaseio/reactive-manual/docs/v1/components/SingleList.md";
import MultiListReadme from "@appbaseio/reactive-manual/docs/v1/components/MultiList.md";
import SingleDataListReadme from "@appbaseio/reactive-manual/docs/v1/components/SingleDataList.md";
import MultiDataListReadme from "@appbaseio/reactive-manual/docs/v1/components/MultiDataList.md";
import SelectedFiltersReadme from "@appbaseio/reactive-manual/docs/v1/components/SelectedFilters.md";
import SingleDropdownListReadme from "@appbaseio/reactive-manual/docs/v1/components/SingleDropdownList.md";
import MultiDropdownListReadme from "@appbaseio/reactive-manual/docs/v1/components/MultiDropdownList.md";
// import NestedListReadme from "@appbaseio/reactive-manual/docs/v1/search-components/NestedList.md";
import NestedMultiListReadme from "@appbaseio/reactive-manual/docs/v1/search-components/NestedMultiList.md";
import SingleRangeReadme from "@appbaseio/reactive-manual/docs/v1/components/SingleRange.md";
import MultiRangeReadme from "@appbaseio/reactive-manual/docs/v1/components/MultiRange.md";
import SingleDropdownRangeReadme from "@appbaseio/reactive-manual/docs/v1/components/SingleDropdownRange.md";
import MultiDropdownRangeReadme from "@appbaseio/reactive-manual/docs/v1/components/MultiDropdownRange.md";
import RangeSliderReadme from "@appbaseio/reactive-manual/docs/v1/components/RangeSlider.md";
import DynamicRangeSliderReadme from "@appbaseio/reactive-manual/docs/v1/search-components/DynamicRangeSlider.md";
import TagCloudReadme from "@appbaseio/reactive-manual/docs/v1/search-components/TagCloud.md";
import RatingsFilterReadme from "@appbaseio/reactive-manual/docs/v1/search-components/RatingsFilter.md";
import CategorySearchReadme from "@appbaseio/reactive-manual/docs/v1/search-components/CategorySearch.md";
// import MultiLevelMenuReadme from "@appbaseio/reactive-manual/docs/v1/search-components/MultiLevelMenu.md";
import ResultCardReadme from "@appbaseio/reactive-manual/docs/v1/search-components/ResultCard.md";
import ResultListReadme from "@appbaseio/reactive-manual/docs/v1/search-components/ResultList.md";
// import ViewSwitcherReadme from "@appbaseio/reactive-manual/docs/v1/search-components/ViewSwitcher.md";
import NumberBoxReadme from "@appbaseio/reactive-manual/docs/v1/components/NumberBox.md";
import ToggleButtonReadme from "@appbaseio/reactive-manual/docs/v1/components/ToggleButton.md";
import DatePickerReadme from "@appbaseio/reactive-manual/docs/v1/components/DatePicker.md";
import DateRangeReadme from "@appbaseio/reactive-manual/docs/v1/components/DateRange.md";
import TextFieldReadme from "@appbaseio/reactive-manual/docs/v1/components/TextField.md";
import DataSearchReadme from "@appbaseio/reactive-manual/docs/v1/components/DataSearch.md";
import DataControllerReadme from "@appbaseio/reactive-manual/docs/v1/components/DataController.md";
// import ReactiveElementReadme from "@appbaseio/reactive-manual/docs/v1/components/ReactiveElement.md";
import ReactiveListReadme from "@appbaseio/reactive-manual/docs/v1/components/ReactiveList.md";
// import GeoDistanceSliderReadme from "@appbaseio/reactive-manual/docs/v1/map-components/GeoDistanceSlider.md";
// import GeoDistanceDropdownReadme from "@appbaseio/reactive-manual/docs/v1/map-components/GeoDistanceDropdown.md";
// import PlacesSearchReadme from "@appbaseio/reactive-manual/docs/v1/map-components/PlacesSearch.md";
// import ReactiveMapReadme from "@appbaseio/reactive-manual/docs/v1/map-components/ReactiveMap.md";

// import reactivemaps components
// import GeoDistanceSliderDefault from "./reactivemaps/GeoDistanceSlider.stories";
// import GeoDistanceDropdownDefault from "./reactivemaps/GeoDistanceDropdown.stories";
// import PlacesSearchDefault from "./reactivemaps/PlacesSearch.stories";
// import ReactiveMapDefault from "./reactivemaps/ReactiveMap.stories";

import SingleListMapDefault from "./reactivemaps/SingleList.stories";
// import MultiListMapDefault from "./reactivemaps/MultiList.stories";
// import SingleDropdownListMapDefault from "./reactivemaps/SingleDropdownList.stories";
// import MultiDropdownListMapDefault from "./reactivemaps/MultiDropdownList.stories";
// import SingleRangeMapDefault from "./reactivemaps/SingleRange.stories";
// import MultiRangeMapDefault from "./reactivemaps/MultiRange.stories";
// import SingleDropdownRangeMapDefault from "./reactivemaps/SingleDropdownRange.stories";
// import MultiDropdownRangeMapDefault from "./reactivemaps/MultiDropdownRange.stories";
// import DataSearchMapDefault from "./reactivemaps/DataSearch.stories";
// import TextFieldMapDefault from "./reactivemaps/TextField.stories";
// import ToggleButtonMapDefault from "./reactivemaps/ToggleButton.stories";
// import RangeSliderMapDefault from "./reactivemaps/RangeSlider.stories";
// import NumberBoxMapDefault from "./reactivemaps/NumberBox.stories";
// import DatePickerMapDefault from "./reactivemaps/DatePicker.stories";
// import DateRangeMapDefault from "./reactivemaps/DateRange.stories";
// import DataControllerMapDefault from "./reactivemaps/DataController.stories";

// import reactivesearch components
// import NestedListDefault from "./reactivesearch/NestedList.stories";
// import NestedMultiListDefault from "./reactivesearch/NestedMultiList.stories";
import DynamicRangeSliderDefault from "./reactivesearch/DynamicRangeSlider.stories";
import TagCloudDefault from "./reactivesearch/TagCloud.stories";
import RatingsFilterDefault from "./reactivesearch/RatingsFilter.stories";
import CategorySearchDefault from "./reactivesearch/CategorySearch.stories";
// import MultiLevelMenuDefault from "./reactivesearch/MultiLevelMenu.stories";
// import ReactiveListDefault from "./reactivesearch/ReactiveList.stories";
import ResultCardDefault from "./reactivesearch/ResultCard.stories";
import ReactiveListDefault from "./reactivesearch/ReactiveList.stories";
import ResultListDefault from "./reactivesearch/ResultList.stories";
// import ViewSwitcherDefault from "./reactivesearch/ViewSwitcher.stories";
import SingleDataListRSDefault from "./reactivesearch/SingleDataList.stories";
import MultiDataListRSDefault from "./reactivesearch/MultiDataList.stories";
import DataSearchRSDefault from "./reactivesearch/DataSearch.stories";
import TextFieldRSDefault from "./reactivesearch/TextField.stories";
import NumberBoxRSDefault from "./reactivesearch/NumberBox.stories";
import SingleListRSDefault from "./reactivesearch/SingleList.stories";
import MultiListRSDefault from "./reactivesearch/MultiList.stories";
import SingleDropdownListRSDefault from "./reactivesearch/SingleDropdownList.stories";
import MultiDropdownListRSDefault from "./reactivesearch/MultiDropdownList.stories";
import SingleRangeRSDefault from "./reactivesearch/SingleRange.stories";
import MultiRangeRSDefault from "./reactivesearch/MultiRange.stories";
import SingleDropdownRangeRSDefault from "./reactivesearch/SingleDropdownRange.stories";
import MultiDropdownRangeRSDefault from "./reactivesearch/MultiDropdownRange.stories";
import ToggleButtonRSDefault from "./reactivesearch/ToggleButton.stories";
import DatePickerRSDefault from "./reactivesearch/DatePicker.stories";
import DateRangeRSDefault from "./reactivesearch/DateRange.stories";
import RangeSliderRSDefault from "./reactivesearch/RangeSlider.stories";
import RangeInputRSDefault from "./reactivesearch/RangeInput.stories";
import DataControllerRSDefault from "./reactivesearch/DataController.stories";
import ReactiveComponentStory from "./reactivesearch/ReactiveComponent.stories";
// import ReactiveElement from "./reactivesearch/ReactiveElement";

require("./styles.css");

function removeFirstLine(str, number = 1) {
	while (number--) {
		str = str.substring(str.indexOf("\n") + 1);
	}
	return str;
}

// The function removes lines starting with // which crashes storybook
const removeCommentsLine = str => str.replace(/^.*    \/\/.*$/gm, "");

storiesOf("Base components/DataController", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(DataControllerReadme), () => (
			<DataControllerRSDefault showFilter={false} />
		))
	)
	.add(
		"With defaultSelected",
		withReadme(removeFirstLine(DataControllerReadme), () => (
			<DataControllerRSDefault
				defaultSelected={text("defaultSelected", "Harry Potter")}
			/>
		))
	)
	.add(
		"With UI",
		withReadme(removeFirstLine(DataControllerReadme), () => (
			<DataControllerRSDefault
				title="DataController"
				showFilter={false}
			>
				<p>★ A customizable UI widget ★</p>
			</DataControllerRSDefault>
		))
	)
	.add(
		"With filter",
		withReadme(removeFirstLine(DataControllerReadme), () => (
			<DataControllerRSDefault
				defaultSelected={text("defaultSelected", "Harry Potter")}
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Custom Filter Name")}
			/>
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(DataControllerReadme), () => (
			<DataControllerRSDefault
				showFilter={false}
				URLParams={boolean("URLParams (not visible on storybook)", true)}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(DataControllerReadme), () => (
			<DataControllerRSDefault
				title={text("title", "DataController")}
				visible={boolean("visible", true)}
				defaultSelected={text("defaultSelected", "Harry Potter")}
				componentStyle={object("componentStyle", { paddingBottom: "10px" })}
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Custom Filter Name")}
				URLParams={boolean("URLParams (not visible on storybook)", true)}
			>
				<p>{text("dataLabel", "★  A customizable UI widget ★")}</p>
			</DataControllerRSDefault>
		))
	);

storiesOf("Base components/ReactiveComponent", module)
	.addDecorator(withKnobs)
	.add(
		"A custom component",
		() => (
			<ReactiveComponentStory />
		)
	)

// Reactivemaps components

// storiesOf("map/GeoDistanceSlider", module)
// 	.addDecorator(withKnobs)
// 	.add("Basic", withReadme(removeFirstLine(GeoDistanceSliderReadme), () => (
// 		<GeoDistanceSliderDefault
// 			defaultSelected={{
// 				distance: 50
// 			}}
// 			unit="mi"
// 			placeholder="Search Location"
// 			showFilter={false}
// 		/>
// 	)))
// 	.add("With title", withReadme(removeFirstLine(GeoDistanceSliderReadme), () => (
// 		<GeoDistanceSliderDefault
// 			defaultSelected={{
// 				distance: 50
// 			}}
// 			unit="mi"
// 			title={text("title", "Geo Distance Slider")}
// 			placeholder="Search Location"
// 			showFilter={false}
// 		/>
// 	)))
// 	.add("With placeholder", withReadme(removeFirstLine(GeoDistanceSliderReadme), () => (
// 		<GeoDistanceSliderDefault
// 			defaultSelected={{
// 				distance: 50
// 			}}
// 			unit="mi"
// 			placeholder={text("placeholder", "Search Location")}
// 			showFilter={false}
// 		/>
// 	)))
// 	.add("With filter", withReadme(removeFirstLine(GeoDistanceSliderReadme), () => (
// 		<GeoDistanceSliderDefault
// 			defaultSelected={{
// 				distance: 50
// 			}}
// 			unit="mi"
// 			placeholder="Search Location"
// 			showFilter={boolean("showFilter", true)}
// 			filterLabel={text("filterLabel", "GeoDistance filter")}
// 		/>
// 	)))
// 	.add("With Range Labels", withReadme(removeFirstLine(GeoDistanceSliderReadme), () => (
// 		<GeoDistanceSliderDefault
// 			defaultSelected={{
// 				distance: 50
// 			}}
// 			unit="mi"
// 			title="Geo Distance Search"
// 			placeholder="Search Location"
// 			rangeLabels={{
// 				start: "Start",
// 				end: "End"
// 			}}
// 			showFilter={false}
// 		/>
// 	)))
// 	.add("With defaultSelected", withReadme(removeFirstLine(GeoDistanceSliderReadme), () => (
// 		<GeoDistanceSliderDefault
// 			defaultSelected={object("defaultSelected", {
// 				location: "London",
// 				distance: 5
// 			})}
// 			unit="mi"
// 			title="Geo Distance Search"
// 			placeholder="Search Location"
// 			rangeLabels={{
// 				start: "Start",
// 				end: "End"
// 			}}
// 			showFilter={false}
// 		/>
// 	)))
// 	.add("With stepValue", withReadme(removeFirstLine(GeoDistanceSliderReadme), () => (
// 		<GeoDistanceSliderDefault
// 			defaultSelected={{
// 				distance: 50
// 			}}
// 			unit="mi"
// 			placeholder="Search Location"
// 			showFilter={false}
// 			stepValue={number("stepValue", 1)}
// 		/>
// 	)))
// 	.add("With autoLocation off", withReadme(removeFirstLine(GeoDistanceSliderReadme), () => (
// 		<GeoDistanceSliderDefault
// 			defaultSelected={{
// 				distance: 50
// 			}}
// 			unit="mi"
// 			title={text("title", "Geo Distance Slider")}
// 			placeholder="Search Location"
// 			showFilter={false}
// 			autoLocation={boolean("autoLocation", false)}
// 		/>
// 	)))
// 	.add("With URLParams", withReadme(removeFirstLine(GeoDistanceSliderReadme), () => (
// 		<GeoDistanceSliderDefault
// 			defaultSelected={{
// 				distance: 50
// 			}}
// 			unit="mi"
// 			placeholder="Search Location"
// 			showFilter={false}
// 			URLParams={boolean("URLParams (not visible on storybook)", true)}
// 		/>
// 	)))
// 	.add("Playground", withReadme(removeFirstLine(GeoDistanceSliderReadme), () => (
// 		<GeoDistanceSliderDefault
// 			defaultSelected={object("defaultSelected", {
// 				location: "London",
// 				distance: 5
// 			})}
// 			stepValue={number("stepValue", 1)}
// 			unit={text("unit", "mi")}
// 			title={text("title", "Geo Distance Slider")}
// 			placeholder={text("placeholder", "Search Location")}
// 			range={object("range", {
// 				start: 0,
// 				end: 50
// 			})}
// 			rangeLabels={object("rangeLabels", {
// 				start: "Start",
// 				end: "End"
// 			})}
// 			autoLocation={boolean("autoLocation", true)}
// 			showFilter={boolean("showFilter", true)}
// 			filterLabel={text("filterLabel", "GeoDistance filter")}
// 			URLParams={boolean("URLParams (not visible on storybook)", true)}
// 		/>
// 	)));

// storiesOf("map/GeoDistanceDropdown", module)
// 	.addDecorator(withKnobs)
// 	.add("Basic", withReadme(removeFirstLine(GeoDistanceDropdownReadme), () => (
// 		<GeoDistanceDropdownDefault
// 			unit="mi"
// 			data={
// 				[{ start: 1, end: 100, label: "Less than 100 miles" },
// 				{ start: 101, end: 200, label: "Between 100 and 200 miles" },
// 				{ start: 201, end: 500, label: "Between 200 and 500 miles" },
// 				{ start: 501, end: 1000, label: "Above 500 miles" }]
// 			}
// 			placeholder="Search Location"
// 			showFilter={false}
// 		/>
// 	)))
// 	.add("With title", withReadme(removeFirstLine(GeoDistanceDropdownReadme), () => (
// 		<GeoDistanceDropdownDefault
// 			unit="mi"
// 			data={
// 				[{ start: 1, end: 100, label: "Less than 100 miles" },
// 				{ start: 101, end: 200, label: "Between 100 and 200 miles" },
// 				{ start: 201, end: 500, label: "Between 200 and 500 miles" },
// 				{ start: 501, end: 1000, label: "Above 500 miles" }]
// 			}
// 			title={text("title", "Geo Distance Slider")}
// 			placeholder="Search Location"
// 			showFilter={false}
// 		/>
// 	)))
// 	.add("With placeholder", withReadme(removeFirstLine(GeoDistanceDropdownReadme), () => (
// 		<GeoDistanceDropdownDefault
// 			unit="mi"
// 			data={
// 				[{ start: 1, end: 100, label: "Less than 100 miles" },
// 				{ start: 101, end: 200, label: "Between 100 and 200 miles" },
// 				{ start: 201, end: 500, label: "Between 200 and 500 miles" },
// 				{ start: 501, end: 1000, label: "Above 500 miles" }]
// 			}
// 			placeholder={text("placeholder", "Search Location")}
// 			placeholderDropdown={text("placeholderDropdown", "Select radius")}
// 			showFilter={false}
// 		/>
// 	)))
// 	.add("With filter", withReadme(removeFirstLine(GeoDistanceDropdownReadme), () => (
// 		<GeoDistanceDropdownDefault
// 			unit="mi"
// 			data={
// 				[{ start: 1, end: 100, label: "Less than 100 miles" },
// 				{ start: 101, end: 200, label: "Between 100 and 200 miles" },
// 				{ start: 201, end: 500, label: "Between 200 and 500 miles" },
// 				{ start: 501, end: 1000, label: "Above 500 miles" }]
// 			}
// 			placeholder="Search Location"
// 			showFilter={boolean("showFilter", true)}
// 			filterLabel={text("filterLabel", "GeoDistance filter")}
// 		/>
// 	)))
// 	.add("With Default Selected", withReadme(removeFirstLine(GeoDistanceDropdownReadme), () => (
// 		<GeoDistanceDropdownDefault
// 			unit="mi"
// 			data={
// 				[{ start: 1, end: 100, label: "Less than 100 miles" },
// 				{ start: 101, end: 200, label: "Between 100 and 200 miles" },
// 				{ start: 201, end: 500, label: "Between 200 and 500 miles" },
// 				{ start: 501, end: 1000, label: "Above 500 miles" }]
// 			}
// 			defaultSelected={object("defaultSelected", {
// 				label: "Less than 100 miles",
// 				location: "London"
// 			})}
// 			title="Geo Distance Search"
// 			placeholder="Search Location"
// 			showFilter={false}
// 		/>
// 	)))
// 	.add("Without autoLocation", withReadme(removeFirstLine(GeoDistanceDropdownReadme), () => (
// 		<GeoDistanceDropdownDefault
// 			unit="mi"
// 			data={
// 				[{ start: 1, end: 100, label: "Less than 100 miles" },
// 				{ start: 101, end: 200, label: "Between 100 and 200 miles" },
// 				{ start: 201, end: 500, label: "Between 200 and 500 miles" },
// 				{ start: 501, end: 1000, label: "Above 500 miles" }]
// 			}
// 			placeholder="Search Location"
// 			showFilter={false}
// 			autoLocation={boolean("autoLocation", false)}
// 		/>
// 	)))
// 	.add("With URLParams", withReadme(removeFirstLine(GeoDistanceDropdownReadme), () => (
// 		<GeoDistanceDropdownDefault
// 			unit="mi"
// 			data={
// 				[{ start: 1, end: 100, label: "Less than 100 miles" },
// 				{ start: 101, end: 200, label: "Between 100 and 200 miles" },
// 				{ start: 201, end: 500, label: "Between 200 and 500 miles" },
// 				{ start: 501, end: 1000, label: "Above 500 miles" }]
// 			}
// 			placeholder="Search Location"
// 			showFilter={false}
// 			URLParams={boolean("URLParams (not visible in storybook)", true)}
// 		/>
// 	)))
// 	.add("Playground", withReadme(removeFirstLine(GeoDistanceDropdownReadme), () => (
// 		<GeoDistanceDropdownDefault
// 			data={
// 				[{ start: 1, end: 100, label: "Less than 100 miles" },
// 				{ start: 101, end: 200, label: "Between 100 and 200 miles" },
// 				{ start: 201, end: 500, label: "Between 200 and 500 miles" },
// 				{ start: 501, end: 1000, label: "Above 500 miles" }]
// 			}
// 			unit={select("unit", { mi: "mi", miles: "miles", yd: "yd", yards: "yards", ft: "ft", feet: "feet", in: "in", inch: "inch", km: "km", kilometers: "kilometers", m: "m", meters: "meters", cm: "cm", centimeters: "centimeters", mm: "mm", millimeters: "millimeters", NM: "NM", nmi: "nmi", nauticalmiles: "nauticalmiles" }, "mi")}
// 				title={text("title", "Geo Distance Slider")}
// 				defaultSelected={object("defaultSelected", {
// 					label: "Less than 100 miles",
// 					location: "London"
// 				})}
// 				placeholder={text("placeholder", "Search Location")}
// 				title={text("title", "Geo Distance Slider")}
// 				placeholderDropdown={text("placeholderDropdown", "Select radius")}
// 				autoLocation={boolean("autoLocation", true)}
// 				showFilter={boolean("showFilter", true)}
// 				filterLabel={text("filterLabel", "GeoDistance filter")}
// 				URLParams={boolean("URLParams (not visible in storybook)", true)}
// 		/>
// 	)));

// storiesOf("map/PlacesSearch", module)
// 	.addDecorator(withKnobs)
// 	.add("Finding nearby places", withReadme(removeFirstLine(PlacesSearchReadme), () => (
// 		<PlacesSearchDefault />
// 	)));

// storiesOf("map/ReactiveMap", module)
// 	.addDecorator(withKnobs)
// 	.add("Basic", withReadme(removeFirstLine(removeCommentsLine(ReactiveMapReadme), 3), () => (
// 		<ReactiveMapDefault />
// 	)))
// 	.add("With title", withReadme(removeFirstLine(removeCommentsLine(ReactiveMapReadme), 3), () => (
// 		<ReactiveMapDefault
// 			title={text("title", "Reactive maps")}
// 		/>
// 	)))
// 	.add("With Popover onClick", withReadme(removeFirstLine(removeCommentsLine(ReactiveMapReadme), 3), () => (
// 		<ReactiveMapDefault
// 			title="Reactive Maps"
// 			showPopoverOn="click"
// 		/>
// 	)))
// 	.add("With Popover onMouseOver", withReadme(removeFirstLine(removeCommentsLine(ReactiveMapReadme), 3), () => (
// 		<ReactiveMapDefault
// 			title="Reactive Maps"
// 			showPopoverOn="mouseover"
// 		/>
// 	)))
// 	.add("Playground", withReadme(removeFirstLine(removeCommentsLine(ReactiveMapReadme), 3), () => (
// 		<ReactiveMapDefault
// 			title={text("title", "Reactive maps")}
// 			showPopoverOn={select("showPopoverOn", { click: "click", mouseover: "mouseover" }, "click")}
// 			setMarkerCluster={boolean("setMarkerCluster", true)}
// 			autoCenter={boolean("autoCenter", true)}
// 			showSearchAsMove={boolean("showSearchAsMove", true)}
// 			setSearchAsMove={boolean("setSearchAsMove", false)}
// 			showMapStyles={boolean("showMapStyles", false)}
// 			defaultMapStyle={select("defaultMapStyle", { Standard: "Standard", "Blue Essence": "Blue Essence", "Blue Water": "Blue Water", "Flat Map": "Flat Map", "Light Monochrome": "Light Monochrome", "Midnight Commander": "Midnight Commander", "Unsaturated Browns": "Unsaturated Browns" }, "Standard")}
// 			size={number("size", 100)}
// 			streamTTL={number("streamTTL", 5)}
// 			streamAutoCenter={boolean("streamAutoCenter", true)}
// 			autoMarkerPosition={boolean("autoMarkerPosition", false)}
// 			showMarkers={boolean("showMarkers", true)}
// 			autoMapRender={boolean("autoMapRender", true)}
// 			defaultZoom={number("defaultZoom", 13)}
// 			defaultCenter={object("defaultCenter", {
// 				lat: 37.74,
// 				lon: -122.45
// 			})}
// 			defaultMarkerImage={text("defaultMarkerImage", "https://cdn.rawgit.com/appbaseio/reactivemaps/6500c73a/dist/images/historic-pin.png")}
// 			streamMarkerImage={text("streamMarkerImage", "https://cdn.rawgit.com/appbaseio/reactivemaps/6500c73a/dist/images/stream-pin.png")}
// 		/>
// 	)));

storiesOf("Map Components/SingleList", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListMapDefault showFilter={false} showSearch placeholder="Search City" />
	)))
	.add("With title", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListMapDefault showSearch placeholder="Search City" showFilter={false} title={text("title", "Cities")} />
	)))
	.add("With size", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListMapDefault showSearch placeholder="Search City" showFilter={false} size={number("size", 10)} />
	)))
	.add("With filter", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListMapDefault showSearch placeholder="Search City" showFilter={boolean("showFilter", true)} filterLabel={text("filterLabel", "City filter")} />
	)))
	.add("Without count", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListMapDefault showSearch placeholder="Search City" showFilter={false} showCount={boolean("showCount", false)} />
	)))
	.add("Without Search", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListMapDefault showFilter={false} showSearch={boolean("showSearch", false)} placeholder="Search City" />
	)))
	.add("Wihout radio buttons", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListMapDefault showSearch placeholder="Search City" showFilter={false} showRadio={boolean("showRadio", false)} />
	)))
	.add("Default Selected", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListMapDefault showFilter={false} showSearch defaultSelected={text("defaultSelected", "San Francisco")} placeholder="Search City" />
	)))
	.add("Custom Sort", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListMapDefault showFilter={false} title="SingleList: Ascending Sort" showSearch defaultSelected="London" sortBy={select("sortBy", { asc: "asc", description: "desc", count: "count" }, "asc")} placeholder="Search City" />
	)))
	.add("With Select All", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListMapDefault showFilter={false} showSearch selectAllLabel={text("selectAllLabel", "All cities")} placeholder="Search City" />
	)))
	.add("With URLParams", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListMapDefault showFilter={false} showSearch placeholder="Search City" URLParams={boolean("URLParams (not visible in storybook)", true)} />
	)))
	.add("Playground", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListMapDefault
			title={text("title", "SingleList: City Filter")}
			size={number("size", 100)}
			sortBy={select("sortBy", { asc: "asc", description: "desc", count: "count" }, "count")}
			defaultSelected={text("defaultSelected", "San Francisco")}
			showCount={boolean("showCount", true)}
			showSearch={boolean("showSearch", true)}
			placeholder={text("placeholder", "Search City")}
			selectAllLabel={text("selectAllLabel", "All cities")}
			showRadio={boolean("showRadio", true)}
			showFilter={boolean("showFilter", true)}
			filterLabel={text("filterLabel", "City filter")}
			URLParams={boolean("URLParams (not visible in storybook)", false)}
		/>
	)));

// storiesOf("map/MultiList", module)
// 	.addDecorator(withKnobs)
// 	.add("Basic", withReadme(removeFirstLine(MultiListReadme), () => (
// 		<MultiListMapDefault showFilter={false} showSearch placeholder="Search City" />
// 	)))
// 	.add("With title", withReadme(removeFirstLine(MultiListReadme), () => (
// 		<MultiListMapDefault showSearch placeholder="Search City" showFilter={false} title={text("title", "MultiList: City Filter")} />
// 	)))
// 	.add("With size", withReadme(removeFirstLine(MultiListReadme), () => (
// 		<MultiListMapDefault showSearch placeholder="Search City" showFilter={false} size={number("size", 10)} />
// 	)))
// 	.add("With filter", withReadme(removeFirstLine(MultiListReadme), () => (
// 		<MultiListMapDefault showFilter={boolean("showFilter", true)} filterLabel={text("filterLabel", "City filter")}  showSearch placeholder="Search City" />
// 	)))
// 	.add("With queryFormat", withReadme(removeFirstLine(MultiListReadme), () => (
// 		<MultiListMapDefault showSearch placeholder="Search City" queryFormat={select("queryFormat", { and: "and", or: "or" }, "and")} />
// 	)))
// 	.add("Wihout count", withReadme(removeFirstLine(MultiListReadme), () => (
// 		<MultiListMapDefault showSearch placeholder="Search City" showFilter={false} showCount={boolean("showCount", false)} />
// 	)))
// 	.add("Without Search", withReadme(removeFirstLine(MultiListReadme), () => (
// 		<MultiListMapDefault showFilter={false} showSearch={boolean("showSearch", false)} placeholder="Search City" />
// 	)))
// 	.add("Without checkbox", withReadme(removeFirstLine(MultiListReadme), () => (
// 		<MultiListMapDefault showSearch placeholder="Search City" showFilter={false} showCheckbox={boolean("showCheckbox", false)} />
// 	)))
// 	.add("Default Selected", withReadme(removeFirstLine(MultiListReadme), () => (
// 		<MultiListMapDefault showFilter={false} showSearch defaultSelected={array("defaultSelected", ["London", "Sydney"])} placeholder="Search City" />
// 	)))
// 	.add("Custom Sort", withReadme(removeFirstLine(MultiListReadme), () => (
// 		<MultiListMapDefault showFilter={false} title="MultiList: Ascending Sort" showSearch defaultSelected={["London"]} sortBy={select("sortBy", { asc: "asc", description: "desc", count: "count" }, "asc")} placeholder="Search City" />
// 	)))
// 	.add("With Select All", withReadme(removeFirstLine(MultiListReadme), () => (
// 		<MultiListMapDefault showFilter={false} showSearch selectAllLabel={text("selectAllLabel", "All cities")} placeholder="Search City" />
// 	)))
// 	.add("With URLParams", withReadme(removeFirstLine(MultiListReadme), () => (
// 		<MultiListMapDefault showFilter={false} showSearch placeholder="Search City" URLParams={boolean("URLParams (not visible in storybook)", true)} />
// 	)))
// 	.add("Playground", withReadme(removeFirstLine(MultiListReadme), () => (
// 		<MultiListMapDefault
// 			title={text("title", "MultiList: City Filter")}
// 			size={number("size", 10)}
// 			sortBy={select("sortBy", { asc: "asc", description: "desc", count: "count" }, "count")}
// 			defaultSelected={array("defaultSelected", ["London", "Sydney"])}
// 			showCount={boolean("showCount", true)}
// 			showSearch={boolean("showSearch", true)}
// 			showCheckbox={boolean("showCheckbox", true)}
// 			placeholder={text("placeholder", "Search City")}
// 			selectAllLabel={text("selectAllLabel", "All cities")}
// 			queryFormat={select("queryFormat", { and: "and", or: "or" }, "or")}
// 			showFilter={boolean("showFilter", true)}
// 			filterLabel={text("filterLabel", "City filter")}
// 			URLParams={boolean("URLParams (not visible in storybook)", false)}
// 		/>
// 	)));

// storiesOf("map/SingleDropdownList", module)
// 	.addDecorator(withKnobs)
// 	.add("Basic", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
// 		<SingleDropdownListMapDefault showFilter={false} />
// 	)))
// 	.add("With title", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
// 		<SingleDropdownListMapDefault showFilter={false} title={text("title", "City list")} />
// 	)))
// 	.add("With size", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
// 		<SingleDropdownListMapDefault showFilter={false} size={number("size", 10)} />
// 	)))
// 	.add("With filter", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
// 		<SingleDropdownListMapDefault showFilter={boolean("showFilter", true)} filterLabel={text("filterLabel", "City filter")} />
// 	)))
// 	.add("With custom sort", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
// 		<SingleDropdownListMapDefault showFilter={false} sortBy={select("sortBy", { asc: "asc", description: "desc", count: "count" }, "asc")} />
// 	)))
// 	.add("Without count", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
// 		<SingleDropdownListMapDefault showFilter={false} showCount={boolean("showCount", false)} />
// 	)))
// 	.add("With Select All", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
// 		<SingleDropdownListMapDefault
// 			selectAllLabel={text("selectAllLabel", "All Cities")}
// 			showFilter={false}
// 		/>
// 	)))
// 	.add("With Default Selected", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
// 		<SingleDropdownListMapDefault
// 			selectAllLabel="All Cities"
// 			defaultSelected={text("defaultSelected", "London")}
// 			showFilter={false}
// 		/>
// 	)))
// 	.add("With URLParams", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
// 		<SingleDropdownListMapDefault showFilter={false} URLParams={boolean("URLParams (not visible in storybook)", true)} />
// 	)))
// 	.add("Playground", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
// 		<SingleDropdownListMapDefault
// 			title={text("title", "SingleDropdownList")}
// 			size={number("size", 100)}
// 			showCount={boolean("showCount", true)}
// 			sortBy={select("sortBy", { asc: "asc", description: "desc", count: "count" }, "count")}
// 			selectAllLabel={text("selectAllLabel", "All Cities")}
// 			defaultSelected={text("defaultSelected", "London")}
// 			placeholder={text("placeholder", "Select a City")}
// 			showFilter={boolean("showFilter", true)}
// 			filterLabel={text("filterLabel", "City filter")}
// 			URLParams={boolean("URLParams (not visible in storybook)", false)}
// 		/>
// 	)));

// storiesOf("map/MultiDropdownList", module)
// 	.addDecorator(withKnobs)
// 	.add("Basic", withReadme(removeFirstLine(MultiDropdownListReadme), () => (
// 		<MultiDropdownListMapDefault showFilter={false} />
// 	)))
// 	.add("With title", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
// 		<MultiDropdownListMapDefault showFilter={false} title={text("title", "City list")} />
// 	)))
// 	.add("With Placeholder", withReadme(removeFirstLine(MultiDropdownListReadme), () => (
// 		<MultiDropdownListMapDefault
// 			placeholder={text("placeholder", "Select Cities")}
// 			showFilter={false}
// 		/>
// 	)))
// 	.add("With size", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
// 		<MultiDropdownListMapDefault showFilter={false} size={number("size", 10)} />
// 	)))
// 	.add("With filter", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
// 		<MultiDropdownListMapDefault showFilter={boolean("showFilter", true)} filterLabel={text("filterLabel", "City filter")} />
// 	)))
// 	.add("Without count", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
// 		<MultiDropdownListMapDefault showFilter={false} showCount={boolean("showCount", false)} />
// 	)))
// 	.add("With custom sort", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
// 		<MultiDropdownListMapDefault showFilter={false} sortBy={select("sortBy", { asc: "asc", description: "desc", count: "count" }, "asc")} />
// 	)))
// 	.add("With Select All", withReadme(removeFirstLine(MultiDropdownListReadme), () => (
// 		<MultiDropdownListMapDefault
// 			placeholder="Select Cities"
// 			selectAllLabel={text("selectAllLabel", "All Cities")}
// 			showFilter={false}
// 		/>
// 	)))
// 	.add("With Default Selected", withReadme(removeFirstLine(MultiDropdownListReadme), () => (
// 		<MultiDropdownListMapDefault
// 			placeholder="Select Cities"
// 			size={100}
// 			sortBy="count"
// 			defaultSelected={array("defaultSelected", ["London", "Melbourne"])}
// 			showFilter={false}
// 		/>
// 	)))
// 	.add("With URLParams", withReadme(removeFirstLine(MultiDropdownListReadme), () => (
// 		<MultiDropdownListMapDefault showFilter={false} URLParams={boolean("URLParams (not visible in storybook)", true)} />
// 	)))
// 	.add("Playground", withReadme(removeFirstLine(MultiDropdownListReadme), () => (
// 		<MultiDropdownListMapDefault
// 			title={text("title", "MultiDropdownList")}
// 			size={number("size", 100)}
// 			showCount={boolean("showCount", true)}
// 			sortBy={select("sortBy", { asc: "asc", description: "desc", count: "count" }, "count")}
// 			selectAllLabel={text("selectAllLabel", "All Cities")}
// 			defaultSelected={array("defaultSelected", ["London", "Melbourne"])}
// 			placeholder={text("placeholder", "Select Cities")}
// 			showFilter={boolean("showFilter", true)}
// 			filterLabel={text("filterLabel", "City filter")}
// 			URLParams={boolean("URLParams (not visible in storybook)", false)}
// 		/>
// 	)));

// storiesOf("map/SingleRange", module)
// 	.addDecorator(withKnobs)
// 	.add("Basic", withReadme(removeFirstLine(SingleRangeReadme), () => (
// 		<SingleRangeMapDefault showFilter={false} />
// 	)))
// 	.add("With title", withReadme(removeFirstLine(SingleRangeReadme), () => (
// 		<SingleRangeMapDefault showFilter={false} title={text("title", "SingleRange: Earthquake Filter")} />
// 	)))
// 	.add("With Default Selected", withReadme(removeFirstLine(SingleRangeReadme), () => (
// 		<SingleRangeMapDefault defaultSelected={text("defaultSelected", "Moderate")} showFilter={false} />
// 	)))
// 	.add("With filter", withReadme(removeFirstLine(SingleRangeReadme), () => (
// 		<SingleRangeMapDefault showFilter={boolean("showFilter", true)} filterLabel={text("filterLabel", "Earthquake range filter")} />
// 	)))
// 	.add("Without radio buttons", withReadme(removeFirstLine(SingleRangeReadme), () => (
// 		<SingleRangeMapDefault showFilter={false} showRadio={boolean("showRadio", false)} />
// 	)))
// 	.add("With URLParams", withReadme(removeFirstLine(SingleRangeReadme), () => (
// 		<SingleRangeMapDefault showFilter={false} URLParams={boolean("URLParams (not visible in storybook)", true)} />
// 	)))
// 	.add("Playground", withReadme(removeFirstLine(SingleRangeReadme), () => (
// 		<SingleRangeMapDefault
// 			title={text("title", "SingleRange: Earthquake Filter")}
// 			defaultSelected={text("defaultSelected", "Moderate")}
// 			showRadio={boolean("showRadio", true)}
// 			showFilter={boolean("showFilter", true)}
// 			filterLabel={text("filterLabel", "Earthquake range filter")}
// 			URLParams={boolean("URLParams (not visible in storybook)", false)}
// 		/>
// 	)));

// storiesOf("map/MultiRange", module)
// 	.addDecorator(withKnobs)
// 	.add("Basic", withReadme(removeFirstLine(MultiRangeReadme), () => (
// 		<MultiRangeMapDefault showFilter={false} />
// 	)))
// 	.add("With title", withReadme(removeFirstLine(MultiRangeReadme), () => (
// 		<MultiRangeMapDefault title={text("title", "MultiRange: Earthquake Filter")} showFilter={false} />
// 	)))
// 	.add("With Default Selected", withReadme(removeFirstLine(MultiRangeReadme), () => (
// 		<MultiRangeMapDefault defaultSelected={array("defaultSelected", ["Major", "Moderate"])} showFilter={false} />
// 	)))
// 	.add("With filter", withReadme(removeFirstLine(MultiRangeReadme), () => (
// 		<MultiRangeMapDefault showFilter={boolean("showFilter", true)} filterLabel={text("filterLabel", "Earthquake range filter")} />
// 	)))
// 	.add("Without checkbox", withReadme(removeFirstLine(MultiRangeReadme), () => (
// 		<MultiRangeMapDefault showFilter={false} showCheckbox={boolean("showCheckbox", false)} />
// 	)))
// 	.add("With URLParams", withReadme(removeFirstLine(MultiRangeReadme), () => (
// 		<MultiRangeMapDefault showFilter={false} URLParams={boolean("URLParams (not visible in storybook)", true)} />
// 	)))
// 	.add("Playground", withReadme(removeFirstLine(MultiRangeReadme), () => (
// 		<MultiRangeMapDefault
// 			title={text("title", "MultiRange: Filter")}
// 			defaultSelected={array("defaultSelected", ["Major", "Moderate"])}
// 			showCheckbox={boolean("showCheckbox", true)}
// 			showFilter={boolean("showFilter", true)}
// 			filterLabel={text("filterLabel", "Earthquake range filter")}
// 			URLParams={boolean("URLParams (not visible in storybook)", false)}
// 		/>
// 	)));

// storiesOf("map/SingleDropdownRange", module)
// 	.addDecorator(withKnobs)
// 	.add("Basic", withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
// 		<SingleDropdownRangeMapDefault showFilter={false} />
// 	)))
// 	.add("With title", withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
// 		<SingleDropdownRangeMapDefault title={text("title", "SingleDropdownRange: Filter")} showFilter={false} />
// 	)))
// 	.add("With placeholder", withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
// 		<SingleDropdownRangeMapDefault placeholder={text("placeholder", "Search places")} showFilter={false} />
// 	)))
// 	.add("With Default Selected", withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
// 		<SingleDropdownRangeMapDefault defaultSelected={text("defaultSelected", "Moderate")} showFilter={false} />
// 	)))
// 	.add("With filter", withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
// 		<SingleDropdownRangeMapDefault showFilter={boolean("showFilter", true)} filterLabel={text("filterLabel", "Price")} />
// 	)))
// 	.add("With URLParams", withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
// 		<SingleDropdownRangeMapDefault URLParams={boolean("URLParams (not visible in storybook)", true)} showFilter={false} />
// 	)))
// 	.add("Playground", withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
// 		<SingleDropdownRangeMapDefault
// 			title={text("title", "SingleDropdownRange: Filter")}
// 			placeholder={text("placeholder", "Search prices")}
// 			defaultSelected={text("defaultSelected", "Moderate")}
// 			URLParams={boolean("URLParams (not visible in storybook)", false)}
// 			showFilter={boolean("showFilter", true)}
// 			filterLabel={text("filterLabel", "Price")}
// 		/>
// 	)));

// storiesOf("map/MultiDropdownRange", module)
// 	.addDecorator(withKnobs)
// 	.add("Basic", withReadme(removeFirstLine(MultiDropdownRangeReadme), () => (
// 		<MultiDropdownRangeMapDefault showFilter={false} />
// 	)))
// 	.add("With title", withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
// 		<MultiDropdownRangeMapDefault title={text("title", "MultiDropdownRange: Earthquake Magnitude")} showFilter={false} />
// 	)))
// 	.add("With placeholder", withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
// 		<MultiDropdownRangeMapDefault placeholder={text("placeholder", "Search places")} showFilter={false} />
// 	)))
// 	.add("With Default Selected", withReadme(removeFirstLine(MultiDropdownRangeReadme), () => (
// 		<MultiDropdownRangeMapDefault defaultSelected={["Moderate", "Strong"]} showFilter={false} />
// 	)))
// 	.add("With filter", withReadme(removeFirstLine(MultiDropdownRangeReadme), () => (
// 		<MultiDropdownRangeMapDefault showFilter={boolean("showFilter", true)} filterLabel={text("filterLabel", "Price")} />
// 	)))
// 	.add("With URLParams", withReadme(removeFirstLine(MultiDropdownRangeReadme), () => (
// 		<MultiDropdownRangeMapDefault URLParams={boolean("URLParams (not visible in storybook)", true)} showFilter={false} />
// 	)))
// 	.add("Playground", withReadme(removeFirstLine(MultiDropdownRangeReadme), () => (
// 		<MultiDropdownRangeMapDefault
// 			title={text("title", "MultiDropdownRange: Earthquake Magnitude")}
// 			defaultSelected={["Moderate", "Strong"]}
// 			placeholder={text("placeholder", "Search places")}
// 			URLParams={boolean("URLParams (not visible in storybook)", false)}
// 			showFilter={boolean("showFilter", true)}
// 			filterLabel={text("filterLabel", "Price")}
// 		/>
// 	)));

// storiesOf("map/DataSearch", module)
// 	.addDecorator(withKnobs)
// 	.add("Basic", withReadme(removeFirstLine(DataSearchReadme), () => (
// 		<DataSearchMapDefault
// 			title="DataSearch"
// 			placeholder="Search Venue"
// 			showFilter={false}
// 		/>
// 	)))
// 	.add("With title", withReadme(removeFirstLine(DataSearchReadme), () => (
// 		<DataSearchMapDefault
// 			title={text("title", "Places Search")}
// 			placeholder="Search Places"
// 			showFilter={false}
// 		/>
// 	)))
// 	.add("With filter", withReadme(removeFirstLine(DataSearchReadme), () => (
// 		<DataSearchMapDefault
// 			title="DataSearch"
// 			placeholder="Search Places"
// 			showFilter={boolean("showFilter", true)}
// 			filterLabel={text("filterLabel", "Places filter")}
// 		/>
// 	)))
// 	.add("Without autosuggest", withReadme(removeFirstLine(DataSearchReadme), () => (
// 		<DataSearchMapDefault
// 			title="DataSearch"
// 			placeholder="Search Venue"
// 			autosuggest={boolean("autosuggest", false)}
// 			showFilter={false}
// 		/>
// 	)))
// 	.add("With defaultSelected", withReadme(removeFirstLine(DataSearchReadme), () => (
// 		<DataSearchMapDefault
// 			title="DataSearch"
// 			placeholder="Search Places"
// 			showFilter={false}
// 			defaultSelected={text("defaultSelected", "Songwriting")}
// 		/>
// 	)))
// 	.add("With defaultSuggestions", withReadme(removeFirstLine(DataSearchReadme), () => (
// 		<DataSearchMapDefault
// 			title="DataSearch"
// 			placeholder="Search Places"
// 			showFilter={false}
// 			defaultSuggestions={[{label: "Songwriting", value: "Songwriting"}, {label: "Musicians", value: "Musicians"}]}
// 		/>
// 	)))
// 	.add("With Weights", withReadme(removeFirstLine(DataSearchReadme), () => (
// 		<DataSearchMapDefault
// 			title="DataSearch"
// 			placeholder="Search Places"
// 			weights={array("weights", [1,3])}
// 			showFilter={false}
// 		/>
// 	)))
// 	.add("With fuzziness", withReadme(removeFirstLine(DataSearchReadme), () => (
// 		<DataSearchMapDefault
// 			title="DataSearch"
// 			placeholder="Search Places"
// 			showFilter={false}
// 			fuzziness={number("fuzziness", 1)}
// 		/>
// 	)))
// 	.add("With queryFormat", withReadme(removeFirstLine(DataSearchReadme), () => (
// 		<DataSearchMapDefault
// 			title="DataSearch"
// 			placeholder="Search Venue"
// 			showFilter={false}
// 			queryFormat={select("queryFormat", { and: "and", or: "or" }, "and")}
// 		/>
// 	)))
// 	.add("With URLParams", withReadme(removeFirstLine(DataSearchReadme), () => (
// 		<DataSearchMapDefault
// 			title="DataSearch"
// 			placeholder="Search Venue"
// 			showFilter={false}
// 			URLParams={boolean("URLParams (not visible in storybook)", true)}
// 		/>
// 	)))
// 	.add("Playground", withReadme(removeFirstLine(DataSearchReadme), () => (
// 		<DataSearchMapDefault
// 			title={text("title", "DataSearch: Places")}
// 			placeholder={text("placeholder", "Search Places")}
// 			autosuggest={boolean("autosuggest", true)}
// 			defaultSelected={text("defaultSelected", "")}
// 			weights={array("weights", [1,3])}
// 			fuzziness={number("fuzziness", 1)}
// 			queryFormat={select("queryFormat", { and: "and", or: "or" }, "or")}
// 			showFilter={boolean("showFilter", true)}
// 			filterLabel={text("filterLabel", "Places filter")}
// 			URLParams={boolean("URLParams (not visible in storybook)", false)}
// 		/>
// 	)));

// storiesOf("map/TextField", module)
// 	.addDecorator(withKnobs)
// 	.add("Basic", withReadme(removeFirstLine(TextFieldReadme), () => (
// 		<TextFieldMapDefault showFilter={false} />
// 	)))
// 	.add("With title", withReadme(removeFirstLine(TextFieldReadme), () => (
// 		<TextFieldMapDefault title={text("title", "Meetups")} showFilter={false} />
// 	)))
// 	.add("DefaultSelected", withReadme(removeFirstLine(TextFieldReadme), () => (
// 		<TextFieldMapDefault defaultSelected={text("defaultSelected", "London")} showFilter={false} />
// 	)))
// 	.add("With filter", withReadme(removeFirstLine(TextFieldReadme), () => (
// 		<TextFieldMapDefault showFilter={boolean("showFilter", true)} filterLabel={text("filterLabel", "Meetups filter")} />
// 	)))
// 	.add("With URLParams", withReadme(removeFirstLine(TextFieldReadme), () => (
// 		<TextFieldMapDefault showFilter={false} URLParams={boolean("URLParams (not visible in storybook)", true)} />
// 	)))
// 	.add("Playground", withReadme(removeFirstLine(TextFieldReadme), () => (
// 		<TextFieldMapDefault
// 			title={text("title", "TextField: Venue Search")}
// 			placeholder={text("placeholder", "Type a place name")}
// 			defaultSelected={text("defaultSelected", "London")}
// 			showFilter={boolean("showFilter", true)}
// 			filterLabel={text("filterLabel", "Places filter")}
// 			URLParams={boolean("URLParams (not visible in storybook)", false)}
// 		/>
// 	)));

// storiesOf("map/ToggleButton", module)
// 	.addDecorator(withKnobs)
// 	.add("Basic", withReadme(removeFirstLine(ToggleButtonReadme), () => (
// 		<ToggleButtonMapDefault showFilter={false} />
// 	)))
// 	.add("With title", withReadme(removeFirstLine(ToggleButtonReadme), () => (
// 		<ToggleButtonMapDefault showFilter={false} title={text("title", "ToggleButton: Meetup Categories")} />
// 	)))
// 	.add("With Default Selected", withReadme(removeFirstLine(ToggleButtonReadme), () => (
// 		<ToggleButtonMapDefault defaultSelected={array("defaultSelected", ["Social", "Travel"])} showFilter={false} />
// 	)))
// 	.add("With filter", withReadme(removeFirstLine(ToggleButtonReadme), () => (
// 		<ToggleButtonMapDefault showFilter={boolean("showFilter", true)} filterLabel={text("filterLabel", "Category filter")} />
// 	)))
// 	.add("Without multiSelect", withReadme(removeFirstLine(ToggleButtonReadme), () => (
// 		<ToggleButtonMapDefault showFilter={false} multiSelect={boolean("multiSelect", false)} />
// 	)))
// 	.add("With URLParams", withReadme(removeFirstLine(ToggleButtonReadme), () => (
// 		<ToggleButtonMapDefault showFilter={false} URLParams={boolean("URLParams (not visible in storybook)", true)} />
// 	)))
// 	.add("Playground", withReadme(removeFirstLine(ToggleButtonReadme), () => (
// 		<ToggleButtonMapDefault
// 			title={text("title", "ToggleButton: Meetup Categories")}
// 			multiSelect={boolean("multiSelect", true)}
// 			defaultSelected={array("defaultSelected", ["Social", "Travel"])}
// 			showFilter={boolean("showFilter", true)}
// 			filterLabel={text("filterLabel", "Category filter")}
// 			URLParams={boolean("URLParams (not visible in storybook)", false)}
// 		/>
// 	)));

// storiesOf("map/RangeSlider", module)
// 	.addDecorator(withKnobs)
// 	.add("Basic", withReadme(removeFirstLine(RangeSliderReadme), () => (
// 		<RangeSliderMapDefault />
// 	)))
// 	.add("With title", withReadme(removeFirstLine(RangeSliderReadme), () => (
// 		<RangeSliderMapDefault title={text("title", "RangeSlider: Guests")} />
// 	)))
// 	.add("With Default Selected", withReadme(removeFirstLine(RangeSliderReadme), () => (
// 		<RangeSliderMapDefault
// 			defaultSelected={object("defaultSelected", {
// 				start: 0,
// 				end: 2
// 			})}
// 		/>
// 	)))
// 	.add("Without histogram", withReadme(removeFirstLine(RangeSliderReadme), () => (
// 		<RangeSliderMapDefault
// 			showHistogram={boolean("showHistogram", false)}
// 		/>
// 	)))
// 	.add("With custom histogram interval", withReadme(removeFirstLine(RangeSliderReadme), () => (
// 		<RangeSliderMapDefault interval={number("interval", 5)} />
// 	)))
// 	.add("With Range Labels", withReadme(removeFirstLine(RangeSliderReadme), () => (
// 		<RangeSliderMapDefault
// 			defaultSelected={{
// 				start: 0,
// 				end: 2
// 			}}
// 			rangeLabels={object("rangeLabels", {
// 				start: "Start",
// 				end: "End"
// 			})}
// 		/>
// 	)))
// 	.add("With URLParams", withReadme(removeFirstLine(RangeSliderReadme), () => (
// 		<RangeSliderMapDefault URLParams={boolean("URLParams (not visible in storybook)", true)} />
// 	)))
// 	.add("Playground", withReadme(removeFirstLine(RangeSliderReadme), () => (
// 		<RangeSliderMapDefault
// 			title={text("title", "RangeSlider: Guest RSVPs")}
// 			range={object("range", {
// 				start: 0,
// 				end: 5
// 			})}
// 			stepValue={number("stepValue", 1)}
// 			interval={number("interval", 20)}
// 			defaultSelected={object("defaultSelected", {
// 				start: 0,
// 				end: 2
// 			})}
// 			rangeLabels={object("rangeLabels", {
// 				start: "Start",
// 				end: "End"
// 			})}
// 			showHistogram={boolean("showHistogram", true)}
// 			URLParams={boolean("URLParams (not visible in storybook)", false)}
// 		/>
// 	)));

// storiesOf("map/NumberBox", module)
// 	.addDecorator(withKnobs)
// 	.add("Basic", withReadme(removeFirstLine(NumberBoxReadme), () => (
// 		<NumberBoxMapDefault
// 			defaultSelected={3}
// 			data={{
// 				label: "Guests",
// 				start: 1,
// 				end: 5
// 			}}
// 			labelPosition="left"
// 		/>
// 	)))
// 	.add("With title", withReadme(removeFirstLine(NumberBoxReadme), () => (
// 		<NumberBoxMapDefault
// 			defaultSelected={2}
// 			data={{
// 				start: 1,
// 				end: 16
// 			}}
// 			labelPosition="left"
// 			title={text("title", "Number of Guests")}
// 		/>
// 	)))
// 	.add("With data", withReadme(removeFirstLine(NumberBoxReadme), () => (
// 		<NumberBoxMapDefault
// 			defaultSelected={2}
// 			data={object("data", {
// 				start: 1,
// 				end: 16,
// 				label: "Guests"
// 			})}
// 			labelPosition="right"
// 		/>
// 	)))
// 	.add("With defaultSelected", withReadme(removeFirstLine(NumberBoxReadme), () => (
// 		<NumberBoxMapDefault
// 			defaultSelected={number("defaultSelected", 2)}
// 			data={{
// 				start: 1,
// 				end: 16
// 			}}
// 		/>
// 	)))
// 	.add("With queryFormat", withReadme(removeFirstLine(NumberBoxReadme), () => (
// 		<NumberBoxMapDefault
// 			defaultSelected={2}
// 			data={{
// 				start: 1,
// 				end: 16
// 			}}
// 			queryFormat={select("queryFormat", { exact: "exact", gte: "gte", lte: "lte" }, "exact")}
// 		/>
// 	)))
// 	.add("With URLParams", withReadme(removeFirstLine(NumberBoxReadme), () => (
// 		<NumberBoxMapDefault
// 			defaultSelected={3}
// 			data={{
// 				label: "Guests",
// 				start: 1,
// 				end: 5
// 			}}
// 			labelPosition="left"
// 			URLParams={boolean("URLParams (not visible in storybook)", true)}
// 		/>
// 	)))
// 	.add("Playground", withReadme(removeFirstLine(NumberBoxReadme), () => (
// 		<NumberBoxMapDefault
// 			title={text("title", "Number of Guests")}
// 			defaultSelected={number("defaultSelected", 3)}
// 			data={object("data", {
// 				start: 1,
// 				end: 16,
// 				label: "Guests"
// 			})}
// 			labelPosition={select("labelPosition", { bottom: "bottom", top: "top", left: "left", right: "right" }, "right")}
// 			queryFormat={select("queryFormat", { exact: "exact", gte: "gte", lte: "lte" }, "exact")}
// 			URLParams={boolean("URLParams (not visible in storybook)", false)}
// 		/>
// 	)));

// storiesOf("map/DatePicker", module)
// 	.addDecorator(withKnobs)
// 	.add("Basic", withReadme(removeFirstLine(DatePickerReadme), () => (
// 		<DatePickerMapDefault showFilter={false} />
// 	)))
// 	.add("With title", withReadme(removeFirstLine(DatePickerReadme), () => (
// 		<DatePickerMapDefault title={text("title", "Date Picker")} showFilter={false} />
// 	)))
// 	.add("With placeholder", withReadme(removeFirstLine(DatePickerReadme), () => (
// 		<DatePickerMapDefault placeholder={text("placeholder", "Pick date")} showFilter={false} />
// 	)))
// 	.add("With filter", withReadme(removeFirstLine(DatePickerReadme), () => (
// 		<DatePickerMapDefault showFilter={boolean("showFilter", true)} filterLabel={text("filterLabel", "Date")} />
// 	)))
// 	.add("Without focus", withReadme(removeFirstLine(DatePickerReadme), () => (
// 		<DatePickerMapDefault showFilter={false} focused={boolean("focused", false)} />
// 	)))
// 	.add("Show more than 1 month", withReadme(removeFirstLine(DatePickerReadme), () => (
// 		<DatePickerMapDefault
// 			numberOfMonths={number("numberOfMonths", 2)}
// 			showFilter={false}
// 		/>
// 	)))
// 	.add("Default date", withReadme(removeFirstLine(DatePickerReadme), () => (
// 		<DatePickerMapDefault
// 			defaultSelected={moment().subtract(1, "day")}
// 			showFilter={false}
// 		/>
// 	)))
// 	.add("Enable days from today only", withReadme(removeFirstLine(DatePickerReadme), () => (
// 		<DatePickerMapDefault
// 			allowAllDates={boolean("allowAllDates", false)}
// 			showFilter={false}
// 		/>
// 	)))
// 	.add("Using extra prop object", withReadme(removeFirstLine(DatePickerReadme), () => (
// 		<DatePickerMapDefault
// 			extra={object("extra", {
// 				withFullScreenPortal: true,
// 				showClearDate: true
// 			})}
// 			showFilter={false}
// 		/>
// 	)))
// 	.add("With queryFormat", withReadme(removeFirstLine(DatePickerReadme), () => (
// 		<DatePickerMapDefault showFilter={false} queryFormat={select("queryFormat", {"epoch_millis":"epoch_millis","epoch_seconds":"epoch_seconds","date":"date","date_time":"date_time","date_time_no_millis":"date_time_no_millis","basic_date":"basic_date","basic_date_time":"basic_date_time","basic_date_time_no_millis":"basic_date_time_no_millis","basic_time":"basic_time","basic_time_no_millis":"basic_time_no_millis"}, "epoch_millis")} />
// 	)))
// 	.add("With URLParams", withReadme(removeFirstLine(DatePickerReadme), () => (
// 		<DatePickerMapDefault showFilter={false} URLParams={boolean("URLParams (not visible in storybook)", true)} />
// 	)))
// 	.add("Playground", withReadme(removeFirstLine(DatePickerReadme), () => (
// 		<DatePickerMapDefault
// 			title={text("title", "Date Picker")}
// 			placeholder={text("placeholder", "Pick date")}
// 			numberOfMonths={number("numberOfMonths", 1)}
// 			allowAllDates={boolean("allowAllDates", true)}
// 			extra={object("extra", {
// 				withFullScreenPortal: false,
// 				showClearDate: false
// 			})}
// 			queryFormat={select("queryFormat", {"epoch_millis":"epoch_millis","epoch_seconds":"epoch_seconds","date":"date","date_time":"date_time","date_time_no_millis":"date_time_no_millis","basic_date":"basic_date","basic_date_time":"basic_date_time","basic_date_time_no_millis":"basic_date_time_no_millis","basic_time":"basic_time","basic_time_no_millis":"basic_time_no_millis"}, "epoch_millis")}
// 			showFilter={boolean("showFilter", true)}
// 			filterLabel={text("filterLabel", "Date")}
// 			URLParams={boolean("URLParams (not visible in storybook)", false)}
// 		/>
// 	)));

// storiesOf("map/DateRange", module)
// 	.addDecorator(withKnobs)
// 	.add("Basic", withReadme(removeFirstLine(DateRangeReadme), () => (
// 		<DateRangeMapDefault showFilter={false} />
// 	)))
// 	.add("With title", withReadme(removeFirstLine(DateRangeReadme), () => (
// 		<DateRangeMapDefault title={text("title", "Date Range")} />
// 	)))
// 	.add("With filter", withReadme(removeFirstLine(DateRangeReadme), () => (
// 		<DateRangeMapDefault showFilter={boolean("showFilter", true)} filterLabel={text("filterLabel", "Date Range")} />
// 	)))
// 	.add("Show more than 1 month", withReadme(removeFirstLine(DateRangeReadme), () => (
// 		<DateRangeMapDefault
// 			numberOfMonths={number("numberOfMonths", 3)}
// 			showFilter={false}
// 		/>
// 	)))
// 	.add("Default date", withReadme(removeFirstLine(DateRangeReadme), () => (
// 		<DateRangeMapDefault
// 			showFilter={false}
// 			defaultSelected={{
// 				start: moment().subtract(7, "days"),
// 				end: moment()
// 			}}
// 		/>
// 	)))
// 	.add("Enable days from today only", withReadme(removeFirstLine(DateRangeReadme), () => (
// 		<DateRangeMapDefault
// 			allowAllDates={boolean("allowAllDates", false)}
// 			showFilter={false}
// 		/>
// 	)))
// 	.add("Using extra prop object", withReadme(removeFirstLine(DateRangeReadme), () => (
// 		<DateRangeMapDefault
// 			showFilter={false}
// 			extra={object("extra", {
// 				withFullScreenPortal: true,
// 				showClearDate: true
// 			})}
// 		/>
// 	)))
// 	.add("With queryFormat", withReadme(removeFirstLine(DateRangeReadme), () => (
// 		<DateRangeMapDefault showFilter={false} queryFormat={select("queryFormat", {"epoch_millis":"epoch_millis","epoch_seconds":"epoch_seconds","date":"date","date_time":"date_time","date_time_no_millis":"date_time_no_millis","basic_date":"basic_date","basic_date_time":"basic_date_time","basic_date_time_no_millis":"basic_date_time_no_millis","basic_time":"basic_time","basic_time_no_millis":"basic_time_no_millis"}, "epoch_millis")} />
// 	)))
// 	.add("With URLParams", withReadme(removeFirstLine(DateRangeReadme), () => (
// 		<DateRangeMapDefault showFilter={false} URLParams={boolean("URLParams (not visible in storybook)", true)} />
// 	)))
// 	.add("Playground", withReadme(removeFirstLine(DateRangeReadme), () => (
// 		<DateRangeMapDefault
// 			title={text("title", "Date Range")}
// 			numberOfMonths={number("numberOfMonths", 2)}
// 			allowAllDates={boolean("allowAllDates", true)}
// 			extra={object("extra", {
// 				withFullScreenPortal: true,
// 				showClearDate: true
// 			})}
// 			queryFormat={select("queryFormat", {"epoch_millis":"epoch_millis","epoch_seconds":"epoch_seconds","date":"date","date_time":"date_time","date_time_no_millis":"date_time_no_millis","basic_date":"basic_date","basic_date_time":"basic_date_time","basic_date_time_no_millis":"basic_date_time_no_millis","basic_time":"basic_time","basic_time_no_millis":"basic_time_no_millis"}, "epoch_millis")}
// 			showFilter={boolean("showFilter", true)}
// 			filterLabel={text("filterLabel", "Date range")}
// 			URLParams={boolean("URLParams (not visible in storybook)", false)}
// 		/>
// 	)));

// storiesOf("map/DataController", module)
// 	.addDecorator(withKnobs)
// 	.add("Basic", withReadme(removeFirstLine(DataControllerReadme), () => (
// 		<DataControllerMapDefault />
// 	)))
// 	.add("With UI", withReadme(removeFirstLine(DataControllerReadme), () => (
// 		<DataControllerMapDefault
// 			title="DataController"
// 			visible={boolean("visible", true)}
// 			dataLabel={
// 				<p>★ A customizable UI widget ★</p>
// 			}
// 		/>
// 	)))
// 	.add("With defaultSelected", withReadme(removeFirstLine(DataControllerReadme), () => (
// 		<DataControllerMapDefault defaultSelected={text("defaultSelected", "default")} />
// 	)))
// 	.add("With URLParams", withReadme(removeFirstLine(DataControllerReadme), () => (
// 		<DataControllerMapDefault showFilter={false} URLParams={boolean("URLParams (not visible on storybook)", true)} />
// 	)))
// 	.add("Playground", withReadme(removeFirstLine(DataControllerReadme), () => (
// 		<DataControllerMapDefault
// 			title={text("title", "DataController")}
// 			visible={boolean("visible", true)}
// 			dataLabel={text("dataLabel", "★  A customizable UI widget ★")}
// 			defaultSelected={text("defaultSelected", "default")}
// 			componentStyle={object("componentStyle", { "paddingBottom": "10px" })}
// 			showFilter={boolean("showFilter", true)}
// 			filterLabel={text("filterLabel", "Custom Filter Name")}
// 			URLParams={boolean("URLParams (not visible on storybook)", false)}
// 		/>
// 	)));

// Reactivesearch components

// storiesOf("search/NestedList", module)
// 	.addDecorator(withKnobs)
// 	.add("Basic", withReadme(removeFirstLine(NestedListReadme), () => (
// 		<NestedListDefault
// 			title=""
// 			showFilter={false}
// 		/>
// 	)))
// 	.add("With title", withReadme(removeFirstLine(NestedListReadme), () => (
// 		<NestedListDefault
// 			title={text("title", "Car Category")}
// 			showFilter={false}
// 		/>
// 	)))
// 	.add("Default selection", withReadme(removeFirstLine(NestedListReadme), () => (
// 		<NestedListDefault
// 			defaultSelected={array("defaultSelected", ["bmw", "x series"])}
// 			showFilter={false}
// 		/>
// 	)))
// 	.add("Custom filter", withReadme(removeFirstLine(NestedListReadme), () => (
// 		<NestedListDefault
// 			showFilter={boolean("showFilter", true)}
// 			filterLabel={text("filterLabel", "Cars")}
// 		/>
// 	)))
// 	.add("With URLParams", withReadme(removeFirstLine(NestedListReadme), () => (
// 		<NestedListDefault
// 			title=""
// 			showFilter={false}
// 		/>
// 	)))
// 	.add("Playground", withReadme(removeFirstLine(NestedListReadme), () => (
// 		<NestedListDefault
// 			title={text("title", "NestedList: Car Filter")}
// 			size={number("size", 100)}
// 			sortBy={select("sortBy", { asc: "asc", description: "desc", count: "count" }, "count")}
// 			defaultSelected={array("defaultSelected", ["bmw", "x series"])}
// 			showCount={boolean("showCount", true)}
// 			showSearch={boolean("showSearch", true)}
// 			placeholder={text("placeholder", "Search Cars")}
// 			showFilter={boolean("showFilter", true)}
// 			filterLabel={text("filterLabel", "Cars")}
// 			URLParams={boolean("URLParams (not visible on storybook)", false)}
// 		/>
// 	)));

// storiesOf("search/NestedMultiList", module)
// 	.addDecorator(withKnobs)
// 	.add("Basic", withReadme(removeFirstLine(NestedMultiListReadme), () => (
// 		<NestedMultiListDefault
// 			title=""
// 			showFilter={false}
// 		/>
// 	)))
// 	.add("With title", withReadme(removeFirstLine(NestedMultiListReadme), () => (
// 		<NestedMultiListDefault
// 			title={text("title", "Car Category")}
// 			showFilter={false}
// 		/>
// 	)))
// 	.add("Default selection", withReadme(removeFirstLine(NestedMultiListReadme), () => (
// 		<NestedMultiListDefault
// 			defaultSelected={array("defaultSelected", ["bmw", "x series"])}
// 			showFilter={false}
// 		/>
// 	)))
// 	.add("Custom filter", withReadme(removeFirstLine(NestedMultiListReadme), () => (
// 		<NestedMultiListDefault
// 			showFilter={boolean("showFilter", true)}
// 			filterLabel={text("filterLabel", "Cars")}
// 		/>
// 	)))
// 	.add("With URLParams", withReadme(removeFirstLine(NestedMultiListReadme), () => (
// 		<NestedMultiListDefault
// 			title=""
// 			showFilter={false}
// 		/>
// 	)))
// 	.add("Playground", withReadme(removeFirstLine(NestedMultiListReadme), () => (
// 		<NestedMultiListDefault
// 			title={text("title", "NestedMultiList: Car Filter")}
// 			size={number("size", 100)}
// 			sortBy={select("sortBy", { asc: "asc", description: "desc", count: "count" }, "count")}
// 			defaultSelected={array("defaultSelected", ["bmw", "x series"])}
// 			showCount={boolean("showCount", true)}
// 			showSearch={boolean("showSearch", true)}
// 			placeholder={text("placeholder", "Search Cars")}
// 			showFilter={boolean("showFilter", true)}
// 			filterLabel={text("filterLabel", "Cars")}
// 			URLParams={boolean("URLParams (not visible on storybook)", false)}
// 		/>
// 	)));

storiesOf("Range components/DynamicRangeSlider", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(DynamicRangeSliderReadme), () => (
		<DynamicRangeSliderDefault />
	)))
	.add("With title", withReadme(removeFirstLine(DynamicRangeSliderReadme), () => (
		<DynamicRangeSliderDefault
			title={text("title", "Books")}
		/>
	)))
	.add("With labels", withReadme(removeFirstLine(DynamicRangeSliderReadme), () => (
		<DynamicRangeSliderDefault
			title={text("title", "Books")}
			rangeLabels={(min, max) => ({
				"start": min + " book",
				"end": max + " books"
			})}
		/>
	)))
	.add("With custom stepValue", withReadme(removeFirstLine(DynamicRangeSliderReadme), () => (
		<DynamicRangeSliderDefault
			stepValue={number("stepValue", 1)}
		/>
	)))
	.add("Without histogram", withReadme(removeFirstLine(DynamicRangeSliderReadme), () => (
		<DynamicRangeSliderDefault
			showHistogram={boolean("showHistogram", false)}
		/>
	)))
	.add("With defaultSelected", withReadme(removeFirstLine(DynamicRangeSliderReadme), () => (
		<DynamicRangeSliderDefault
			defaultSelected={() => ({
				start: 500,
				end: 2000
			})}
		/>
	)))
	.add("With URLParams", withReadme(removeFirstLine(DynamicRangeSliderReadme), () => (
		<DynamicRangeSliderDefault
			URLParams={boolean("URLParams (not visible on storybook)", true)}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(DynamicRangeSliderReadme), () => (
		<DynamicRangeSliderDefault
			title={text("title", "DynamicRangeSlider: Books")}
			dataField={select("dataField", ["books_count", "original_publication_year", "ratings_count"], "books_count")}
			defaultSelected={(min, max) => ({
				start: min,
				end: max
			})}
			stepValue={number("stepValue", 1)}
			showHistogram={boolean("showHistogram", true)}
			URLParams={boolean("URLParams (not visible on storybook)", false)}
		/>
	)));

storiesOf("Base components/TagCloud", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(TagCloudReadme), () => (
			<TagCloudDefault showFilter={false} />
		))
	)
	.add(
		"With title",
		withReadme(removeFirstLine(TagCloudReadme), () => (
			<TagCloudDefault title={text("title", "Cities")} showFilter={false} />
		))
	)
	.add(
		"With showCount",
		withReadme(removeFirstLine(TagCloudReadme), () => (
			<TagCloudDefault
				showCount={boolean("showCount", true)}
				showFilter={false}
			/>
		))
	)
	.add(
		"With custom filter",
		withReadme(removeFirstLine(TagCloudReadme), () => (
			<TagCloudDefault
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Cities filter")}
			/>
		))
	)
	.add(
		"With multiSelect",
		withReadme(removeFirstLine(TagCloudReadme), () => (
			<TagCloudDefault
				multiSelect={boolean("multiSelect", true)}
				showFilter={false}
			/>
		))
	)
	.add(
		"With defaultSelected",
		withReadme(removeFirstLine(TagCloudReadme), () => (
			<TagCloudDefault
				defaultSelected={text("defaultSelected", "Auckland")}
				showFilter={false}
			/>
		))
	)
	.add(
		"With multiSelect on and defaultSelected",
		withReadme(removeFirstLine(TagCloudReadme), () => (
			<TagCloudDefault
				multiSelect
				defaultSelected={array("defaultSelected", ["Auckland", "Amsterdam"])}
			/>
		))
	)
	.add(
		"With multiSelect off and defaultSelected",
		withReadme(removeFirstLine(TagCloudReadme), () => (
			<TagCloudDefault defaultSelected={text("defaultSelected", "Auckland")} />
		))
	)
	.add(
		"With sortBy",
		withReadme(removeFirstLine(TagCloudReadme), () => (
			<TagCloudDefault showFilter={false} sortBy={select("sortBy", ["count", "asc", "desc"], "count")} />
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(TagCloudReadme), () => (
			<TagCloudDefault
				showFilter={false}
				URLParams={boolean("URLParams (not visible on storybook)", true)}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(TagCloudReadme), () => (
			<TagCloudDefault
				title={text("title", "TagCloud: City Filter")}
				dataField={select("dataField", ["group.group_city.raw", "group.group_topics.topic_name_raw.raw"], "group.group_city.raw")}
				size={number("size", 100)}
				multiSelect
				defaultSelected={array("defaultSelected", ["Auckland"])}
				showCount={boolean("showCount", true)}
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Cities filter")}
				URLParams={boolean("URLParams (not visible on storybook)", false)}
			/>
		))
	);

storiesOf("Range components/RatingsFilter", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(RatingsFilterReadme), () => (
		<RatingsFilterDefault showFilter={false} />
	)))
	.add("With title", withReadme(removeFirstLine(RatingsFilterReadme), () => (
		<RatingsFilterDefault title={text("title", "Ratings")} showFilter={false} />
	)))
	.add("With defaultSelected", withReadme(removeFirstLine(RatingsFilterReadme), () => (
		<RatingsFilterDefault
			defaultSelected={object("defaultSelected", { start: 2, end: 5 })}
			showFilter={false}
		/>
	)))
	.add("With URLParams", withReadme(removeFirstLine(RatingsFilterReadme), () => (
		<RatingsFilterDefault showFilter={false} URLParams={boolean("URLParams (not visible on storybook)", true)} />
	)))
	.add("Playground", withReadme(removeFirstLine(RatingsFilterReadme), () => (
		<RatingsFilterDefault
			title={text("title", "RatingsFilter")}
			data={object("data", [{ start: 4, end: 5, label: "4 stars and up" },
				{ start: 3, end: 5, label: "3 stars and up" },
				{ start: 2, end: 5, label: "2 stars and up" },
				{ start: 1, end: 5, label: "> 1 stars" }])}
			defaultSelected={object("defaultSelected", { start: 2, end: 5 })}
			showFilter={boolean("showFilter", true)}
			filterLabel={text("filterLabel", "Ratings filter")}
			URLParams={boolean("URLParams (not visible on storybook)", false)}
		/>
	)));

storiesOf("Search components/CategorySearch", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(CategorySearchReadme), () => (
			<CategorySearchDefault
				placeholder="Search Books by Author"
				showFilter={false}
			/>
		))
	)
	.add(
		"With title",
		withReadme(removeFirstLine(CategorySearchReadme), () => (
			<CategorySearchDefault
				title={text("title", "Books")}
				placeholder="Search Books by Author"
				showFilter={false}
			/>
		))
	)
	.add(
		"wihout search icon",
		withReadme(removeFirstLine(CategorySearchReadme), () => (
			<CategorySearchDefault
				placeholder="Search Books by Authors"
				showFilter={false}
				showIcon={boolean("showIcon", false)}
			/>
		))
	)
	.add(
		"with iconPosition",
		withReadme(removeFirstLine(CategorySearchReadme), () => (
			<CategorySearchDefault
				placeholder="Search Books by Authors"
				showFilter={false}
				iconPosition={select("iconPosition", ["left", "right"], "left")}
			/>
		))
	)
	.add(
		"with custom icon",
		withReadme(removeFirstLine(CategorySearchReadme), () => (
			<CategorySearchDefault
				placeholder="Search Books by Authors"
				showFilter={false}
				icon={<div>📚</div>}
				iconPosition={select("iconPosition", ["left", "right"], "left")}
			/>
		))
	)
	.add(
		"With filter",
		withReadme(removeFirstLine(CategorySearchReadme), () => (
			<CategorySearchDefault
				placeholder="Search Books by Author"
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Books filter")}
			/>
		))
	)
	.add(
		"with debounce",
		withReadme(removeFirstLine(CategorySearchReadme), () => (
			<CategorySearchDefault
				placeholder="Search Books by Author"
				showFilter={false}
				debounce={number("debounce", 300)}
			/>
		))
	)
	.add(
		"With defaultSelected",
		withReadme(removeFirstLine(CategorySearchReadme), () => (
			<CategorySearchDefault
				placeholder="Search Books by Author"
				defaultSelected={text("defaultSelected", "Sherlock Holmes")}
				showFilter={false}
			/>
		))
	)
	.add(
		"With defaultSuggestions",
		withReadme(removeFirstLine(CategorySearchReadme), () => (
			<CategorySearchDefault
				placeholder="Search Books by Author"
				defaultSuggestions={[
					{ label: "Sherlock Holmes", value: "Sherlock Holmes" },
					{ label: "A Song of Ice and Fire", value: "A Song of Ice and Fire" }
				]}
				showFilter={false}
			/>
		))
	)
	.add(
		"With Weights",
		withReadme(removeFirstLine(CategorySearchReadme), () => (
			<CategorySearchDefault
				weights={array("weights", [1, 3])}
				showFilter={false}
			/>
		))
	)
	.add(
		"With fuzziness",
		withReadme(removeFirstLine(CategorySearchReadme), () => (
			<CategorySearchDefault
				showFilter={false}
				fuzziness={number("fuzziness", 1)}
			/>
		))
	)
	.add(
		"With queryFormat",
		withReadme(removeFirstLine(CategorySearchReadme), () => (
			<CategorySearchDefault
				showFilter={false}
				queryFormat={select("queryFormat", { and: "and", or: "or" }, "and")}
			/>
		))
	)
	.add(
		"Without autosuggest",
		withReadme(removeFirstLine(CategorySearchReadme), () => (
			<CategorySearchDefault
				placeholder="Search Books by Author"
				showFilter={false}
				autosuggest={boolean("autosuggest", false)}
			/>
		))
	)
	.add(
		"With highlight",
		withReadme(removeFirstLine(CategorySearchReadme), () => (
			<CategorySearchDefault
				placeholder="Search Books by Author"
				showFilter={false}
				highlight={boolean("highlight", true)}
			/>
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(CategorySearchReadme), () => (
			<CategorySearchDefault
				placeholder="Search Books by Author"
				showFilter={false}
				URLParams={boolean("URLParams (not visible on storybook)", true)}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(CategorySearchReadme), () => (
			<CategorySearchDefault
				title={text("title", "CategorySearch")}
				dataField={array("dataField", ["original_title", "original_title.search"])}
				categoryField={text("categoryField", "authors.raw")}
				defaultSelected={text("defaultSelected", "")}
				placeholder={text("placeholder", "Search Books by Author")}
				queryFormat={select("queryFormat", { and: "and", or: "or" }, "or")}
				weights={array("weights", [1, 3])}
				fuzziness={number("fuzziness", 1)}
				autosuggest={boolean("autosuggest", true)}
				highlight={boolean("highlight", false)}
				iconPosition={select("iconPosition", ["left", "right"], "left")}
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Books filter")}
				URLParams={boolean("URLParams (not visible on storybook)", false)}
			/>
		))
	);

// storiesOf("search/MultiLevelMenu", module)
// 	.addDecorator(withKnobs)
// 	.add("Basic", withReadme(removeFirstLine(MultiLevelMenuReadme), () => (
// 		<MultiLevelMenuDefault />
// 	)))
// 	.add("With Blacklist", withReadme(removeFirstLine(MultiLevelMenuReadme), () => (
// 		<MultiLevelMenuDefault
// 			blacklist={array("blacklist", ["golf", "unknown"])}
// 		/>
// 	)))
// 	.add("With maxCategories", withReadme(removeFirstLine(MultiLevelMenuReadme), () => (
// 		<MultiLevelMenuDefault
// 			maxCategories={number("maxCategories", 6)}
// 		/>
// 	)))
// 	.add("With maxItems", withReadme(removeFirstLine(MultiLevelMenuReadme), () => (
// 		<MultiLevelMenuDefault
// 			maxItems={number("maxItems", 3)}
// 		/>
// 	)))
// 	.add("With URLParams", withReadme(removeFirstLine(MultiLevelMenuReadme), () => (
// 		<MultiLevelMenuDefault URLParams={boolean("URLParams (not visible on storybook)", true)} />
// 	)))
// 	.add("Playground", withReadme(removeFirstLine(MultiLevelMenuReadme), () => (
// 		<MultiLevelMenuDefault
// 			data={object("data", [
// 				{ label: "Volkswagen", value: "volkswagen" },
// 				{ label: "BMW", value: "bmw" }
// 			])}
// 			blacklist={array("blacklist", ["golf", "unknown"])}
// 			maxCategories={number("maxCategories", 10)}
// 			maxItems={number("maxItems", 4)}
// 			URLParams={boolean("URLParams (not visible on storybook)", false)}
// 		/>
// 	)));

storiesOf("Result components/ReactiveList", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(ReactiveListReadme, 3), () => (
			<ReactiveListDefault />
		))
	)
	// .add("Without resultStats", withReadme(removeFirstLine(ReactiveListReadme, 3), () => (
	// 	<ReactiveListDefault onAllData={null} stream={false} showResultStats={boolean("showResultStats", false)} />
	// )))
	// .add(
	// 	"With Streaming Enabled",
	// 	withReadme(removeFirstLine(ReactiveListReadme, 3), () => (
	// 		<ReactiveListDefault stream={boolean("stream", true)} />
	// 	))
	// )
	.add(
		"With pagination",
		withReadme(removeFirstLine(ReactiveListReadme, 3), () => (
			<ReactiveListDefault
				pagination={boolean("pagination", true)}
				paginationAt={select(
					"paginationAt",
					{ bottom: "bottom", top: "top", both: "both" },
					"bottom"
				)}
				pages={number("pages", 5)}
				title="Meetups"
			/>
		))
	)
	.add(
		"With infinite loading",
		withReadme(removeFirstLine(ReactiveListReadme, 3), () => (
			<ReactiveListDefault pagination={false} />
		))
	)
	.add(
		"With custom sort order",
		withReadme(removeFirstLine(ReactiveListReadme, 3), () => (
			<ReactiveListDefault
				sortBy={select("sortBy", { asc: "asc", description: "desc" }, "asc")}
			/>
		))
	)
	.add("With Sort Options", withReadme(removeFirstLine(ReactiveListReadme, 3), () => (
		<ReactiveListDefault
			sortOptions={[
				{
					label: "Rating - High to Low",
					dataField: "average_rating",
					sortBy: "desc"
				},
				{
					label: "Published - Most recent first",
					dataField: "original_publication_year",
					sortBy: "desc"
				},
				{
					label: "Published - Oldest first",
					dataField: "original_publication_year",
					sortBy: "asc"
				}
			]}
		/>
	)))
	.add(
		"Playground",
		withReadme(removeFirstLine(ReactiveListReadme, 3), () => (
			<ReactiveListDefault
				title={text("title", "ReactiveList: Results")}
				dataField={select("dataField", ["original_title.raw", "authors.raw", "original_series.raw"], "original_title.raw")}
				placeholder={text("placeholder", "Select from list")}
				// initialLoader={text("initialLoader", "Loading results..")}
				// noResults={text("noResults", "No results found!")}
				showResultStats={boolean("showResultStats", true)}
				sortOptions={[
					{
						label: "Rating - High to Low",
						dataField: "average_rating",
						sortBy: "desc"
					},
					{
						label: "Published - Most recent first",
						dataField: "original_publication_year",
						sortBy: "desc"
					},
					{
						label: "Published - Oldest first",
						dataField: "original_publication_year",
						sortBy: "asc"
					}
				]}
				pagination={boolean("pagination", true)}
				paginationAt={select(
					"paginationAt",
					{ bottom: "bottom", top: "top", both: "both" },
					"bottom"
				)}
				pages={number("pages", 5)}
				// stream={boolean("stream", false)}
				sortBy={select("sortBy", { asc: "asc", description: "desc" }, "asc")}
			/>
		))
	);

storiesOf("Result components/ResultCard", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(ResultCardReadme, 3), () => (
			<ResultCardDefault />
		))
	)
	.add(
		"With size",
		withReadme(removeFirstLine(ResultCardReadme, 3), () => (
			<ResultCardDefault size={number("size", 12)} />
		))
	)
	.add(
		"Hide resultStats",
		withReadme(removeFirstLine(ResultCardReadme, 3), () => (
			<ResultCardDefault showResultStats={boolean("showResultStats", false)} />
		))
	)
	.add(
		"With infinite loading",
		withReadme(removeFirstLine(ResultCardReadme, 3), () => (
			<ResultCardDefault scrollOnTarget={window} pagination={false} />
		))
	)
	.add(
		"With pagination",
		withReadme(removeFirstLine(ResultCardReadme, 3), () => (
			<ResultCardDefault
				pagination={boolean("pagination", true)}
				paginationAt={text("paginationAt", "bottom")}
			/>
		))
	)
	.add("With Sort Options", withReadme(removeFirstLine(ResultCardReadme, 3), () => (
		<ResultCardDefault
			sortOptions={[
				{
					label: "Rating - High to Low",
					dataField: "average_rating",
					sortBy: "desc"
				},
				{
					label: "Published - Most recent first",
					dataField: "original_publication_year",
					sortBy: "desc"
				},
				{
					label: "Published - Oldest first",
					dataField: "original_publication_year",
					sortBy: "asc"
				}
			]}
		/>
	)))
	.add(
		"Playground",
		withReadme(removeFirstLine(ResultCardReadme, 3), () => (
			<ResultCardDefault
				size={number("size", 12)}
				dataField={select("dataField", ["original_title.raw", "authors.raw", "original_series.raw"], "original_title.raw")}
				showResultStats={boolean("showResultStats", true)}
				sortOptions={[
					{
						label: "Rating - High to Low",
						dataField: "average_rating",
						sortBy: "desc"
					},
					{
						label: "Published - Most recent first",
						dataField: "original_publication_year",
						sortBy: "desc"
					},
					{
						label: "Published - Oldest first",
						dataField: "original_publication_year",
						sortBy: "asc"
					}
				]}
				pagination={boolean("pagination", true)}
				paginationAt={text("paginationAt", "bottom")}
			/>
		))
	);

storiesOf("Result components/ResultList", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(ResultListReadme, 3), () => (
		<ResultListDefault />
	)))
	.add("With size", withReadme(removeFirstLine(ResultListReadme, 3), () => (
		<ResultListDefault size={text("size", 5)} />
	)))
	.add("Hide resultStats", withReadme(removeFirstLine(ResultListReadme, 3), () => (
		<ResultListDefault showResultStats={boolean("showResultStats", false)} />
	)))
	.add("With infinite loading", withReadme(removeFirstLine(ResultListReadme, 3), () => (
		<ResultListDefault size={10} pagination={false} />
	)))
	.add("With pagination", withReadme(removeFirstLine(ResultListReadme, 3), () => (
		<ResultListDefault
			pagination={boolean("pagination", true)}
			paginationAt={text("paginationAt", "bottom")}
		/>
	)))
	.add("With Sort Options", withReadme(removeFirstLine(ResultListReadme, 3), () => (
		<ResultListDefault
			sortOptions={[
				{
					label: "Rating - High to Low",
					dataField: "average_rating",
					sortBy: "desc"
				},
				{
					label: "Published - Most recent first",
					dataField: "original_publication_year",
					sortBy: "desc"
				},
				{
					label: "Published - Oldest first",
					dataField: "original_publication_year",
					sortBy: "asc"
				}
			]}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(ResultListReadme, 3), () => (
		<ResultListDefault
			title={text("title", "Cars result")}
			dataField={select("dataField", ["original_title.raw", "authors.raw", "original_series.raw"], "original_title.raw")}
			size={number("size", 5)}
			showResultStats={boolean("showResultStats", true)}
			sortOptions={[
				{
					label: "Rating - High to Low",
					dataField: "average_rating",
					sortBy: "desc"
				},
				{
					label: "Published - Most recent first",
					dataField: "original_publication_year",
					sortBy: "desc"
				},
				{
					label: "Published - Oldest first",
					dataField: "original_publication_year",
					sortBy: "asc"
				}
			]}
			pagination={boolean("pagination", true)}
			paginationAt={text("paginationAt", "bottom")}
		/>
	)));

// storiesOf("search/ViewSwitcher", module)
// 	.addDecorator(withKnobs)
// 	.add("Basic", withReadme(removeFirstLine(ViewSwitcherReadme), () => (
// 		<ViewSwitcherDefault />
// 	)));

storiesOf("Search components/DataSearch", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<DataSearchRSDefault
				placeholder="Search Books..."
				showFilter={false}
			/>
		))
	)
	.add(
		"With title",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<DataSearchRSDefault
				title={text("title", "Books Search")}
				placeholder="Search Books..."
				showFilter={false}
			/>
		))
	)
	.add(
		"wihout search icon",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<DataSearchRSDefault
				placeholder="Search Books..."
				showFilter={false}
				showIcon={boolean("showIcon", false)}
			/>
		))
	)
	.add(
		"with iconPosition",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<DataSearchRSDefault
				placeholder="Search Books..."
				showFilter={false}
				iconPosition={select("iconPosition", ["left", "right"], "left")}
			/>
		))
	)
	.add(
		"with custom icon",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<DataSearchRSDefault
				placeholder="Search Books..."
				showFilter={false}
				icon={<div>📚</div>}
				iconPosition={select("iconPosition", ["left", "right"], "left")}
			/>
		))
	)
	.add(
		"With filter",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<DataSearchRSDefault
				placeholder="Search Books..."
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Books filter")}
			/>
		))
	)
	.add(
		"with debounce",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<DataSearchRSDefault
				placeholder="Search Books..."
				showFilter={false}
				debounce={number("debounce", 300)}
			/>
		))
	)
	.add(
		"Without autosuggest",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<DataSearchRSDefault
				placeholder="Search Books..."
				autosuggest={boolean("autosuggest", false)}
				showFilter={false}
			/>
		))
	)
	.add(
		"With defaultSelected",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<DataSearchRSDefault
				placeholder="Search Books..."
				showFilter={false}
				defaultSelected={text("defaultSelected", "Harry Potter")}
			/>
		))
	)
	.add(
		"With defaultSuggestions",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<DataSearchRSDefault
				placeholder="Search Books..."
				showFilter={false}
				defaultSuggestions={[
					{ label: "Sherlock Holmes", value: "Sherlock Holmes" },
					{ label: "The Lord of the Rings", value: "The Lord of the Rings" }
				]}
			/>
		))
	)
	.add(
		"With fieldWeights",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<DataSearchRSDefault
				placeholder="Search Books..."
				fieldWeights={array("fieldWeights", [1, 3])}
				showFilter={false}
			/>
		))
	)
	.add(
		"With fuzziness as a number",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<DataSearchRSDefault
				placeholder="Search Books..."
				showFilter={false}
				fuzziness={number("fuzziness", 1)}
			/>
		))
	)
	.add(
		"With fuzziness as AUTO",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<DataSearchRSDefault
				placeholder="Search Books..."
				showFilter={false}
				fuzziness="AUTO"
			/>
		))
	)
	.add(
		"With highlight",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<DataSearchRSDefault
				placeholder="Search Books..."
				showFilter={false}
				highlight={boolean("highlight", true)}
			/>
		))
	)
	.add(
		"With queryFormat",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<DataSearchRSDefault
				placeholder="Search Books..."
				showFilter={false}
				queryFormat={select("queryFormat", { and: "and", or: "or" }, "and")}
			/>
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<DataSearchRSDefault
				placeholder="Search Books..."
				showFilter={false}
				URLParams={boolean("URLParams (not visible on storybook)", true)}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<DataSearchRSDefault
				title={text("title", "DataSearch: Books...")}
				dataField={array("dataField", ["original_title", "original_title.search"])}
				placeholder={text("placeholder", "Search Books...")}
				autosuggest={boolean("autosuggest", true)}
				defaultSelected={text("defaultSelected", "")}
				fieldWeights={array("weights", [1, 3])}
				fuzziness={number("fuzziness", 1)}
				queryFormat={select("queryFormat", { and: "and", or: "or" }, "or")}
				showFilter={boolean("showFilter", true)}
				iconPosition={select("iconPosition", ["left", "right"], "left")}
				filterLabel={text("filterLabel", "Books filter")}
				highlight={boolean("highlight", false)}
				URLParams={boolean("URLParams (not visible on storybook)", true)}
			/>
		))
	);

storiesOf("Base components/TextField", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(TextFieldReadme), () => (
			<TextFieldRSDefault showFilter={false} />
		))
	)
	.add(
		"With title",
		withReadme(removeFirstLine(TextFieldReadme), () => (
			<TextFieldRSDefault title={text("title", "Books")} showFilter={false} />
		))
	)
	.add(
		"DefaultSelected",
		withReadme(removeFirstLine(TextFieldReadme), () => (
			<TextFieldRSDefault
				defaultSelected={text("defaultSelected", "The Murder of Roger Ackroyd")}
				showFilter={false}
			/>
		))
	)
	.add(
		"With filter",
		withReadme(removeFirstLine(TextFieldReadme), () => (
			<TextFieldRSDefault
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Books filter")}
			/>
		))
	)
	.add(
		"with debounce",
		withReadme(removeFirstLine(TextFieldReadme), () => (
			<TextFieldRSDefault showFilter={false} debounce={number("debounce", 300)} />
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(TextFieldReadme), () => (
			<TextFieldRSDefault
				showFilter={false}
				URLParams={boolean("URLParams (not visible on storybook)", true)}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(TextFieldReadme), () => (
			<TextFieldRSDefault
				title={text("title", "TextField: Books Search")}
				dataField={select("dataField", ["original_title.search", "authors.search", "original_series.search"], "original_title.search")}
				placeholder={text("placeholder", "Search for books...")}
				defaultSelected={text("defaultSelected", "The Hitchhiker's Guide to the Galaxy")}
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Books filter")}
				URLParams={boolean("URLParams (not visible on storybook)", false)}
			/>
		))
	);

storiesOf("Range components/NumberBox", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(NumberBoxReadme), () => (
			<NumberBoxRSDefault
				defaultSelected={2}
				data={{
					label: "Book Rating",
					start: 2,
					end: 5
				}}
				labelPosition="left"
			/>
		))
	)
	.add(
		"With title",
		withReadme(removeFirstLine(NumberBoxReadme), () => (
			<NumberBoxRSDefault
				defaultSelected={2}
				data={{
					label: "Book Rating",
					start: 2,
					end: 5
				}}
				labelPosition="left"
				title={text("title", "Average Rating")}
			/>
		))
	)
	.add(
		"With labelPosition",
		withReadme(removeFirstLine(NumberBoxReadme), () => (
			<NumberBoxRSDefault
				defaultSelected={2}
				data={{
					label: "Book Rating",
					start: 2,
					end: 5
				}}
				labelPosition={select(
					"labelPosition",
					{ bottom: "bottom", top: "top", left: "left", right: "right" },
					"right"
				)}
			/>
		))
	)
	.add(
		"With data",
		withReadme(removeFirstLine(NumberBoxReadme), () => (
			<NumberBoxRSDefault
				defaultSelected={2}
				data={object("data", {
					label: "Book Ratings",
					start: 2,
					end: 5
				})}
				labelPosition="right"
			/>
		))
	)
	.add(
		"With defaultSelected",
		withReadme(removeFirstLine(NumberBoxReadme), () => (
			<NumberBoxRSDefault
				defaultSelected={number("defaultSelected", 2)}
				data={{
					label: "Book Rating",
					start: 2,
					end: 5
				}}
			/>
		))
	)
	.add(
		"With queryFormat",
		withReadme(removeFirstLine(NumberBoxReadme), () => (
			<NumberBoxRSDefault
				defaultSelected={2}
				data={{
					label: "Book Rating",
					start: 2,
					end: 5
				}}
				queryFormat={select(
					"queryFormat",
					{ exact: "exact", gte: "gte", lte: "lte" },
					"exact"
				)}
			/>
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(NumberBoxReadme), () => (
			<NumberBoxRSDefault
				defaultSelected={2}
				data={{
					label: "Book Rating",
					start: 2,
					end: 5
				}}
				labelPosition="left"
				URLParams={boolean("URLParams (not visible on storybook)", true)}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(NumberBoxReadme), () => (
			<NumberBoxRSDefault
				title={text("title", "Books")}
				dataField={select("dataField", ["average_rating_rounded", "books_count"], "average_rating_rounded")}
				defaultSelected={number("defaultSelected", 3)}
				data={object("data", {
					label: "Car Ratings",
					start: 2,
					end: 5
				})}
				labelPosition={select(
					"labelPosition",
					{ bottom: "bottom", top: "top", left: "left", right: "right" },
					"right"
				)}
				queryFormat={select(
					"queryFormat",
					{ exact: "exact", gte: "gte", lte: "lte" },
					"exact"
				)}
				URLParams={boolean("URLParams (not visible on storybook)", false)}
			/>
		))
	);

storiesOf("List components/SingleList", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(SingleListReadme), () => (
			<SingleListRSDefault
				showSearch
				placeholder="Search Books"
				showFilter={false}
			/>
		))
	)
	.add(
		"With title",
		withReadme(removeFirstLine(SingleListReadme), () => (
			<SingleListRSDefault
				showSearch
				placeholder="Search Books"
				showFilter={false}
				title={text("title", "Good Books")}
			/>
		))
	)
	.add(
		"With size",
		withReadme(removeFirstLine(SingleListReadme), () => (
			<SingleListRSDefault
				showSearch
				placeholder="Search Books"
				showFilter={false}
				size={number("size", 10)}
			/>
		))
	)
	.add(
		"Without count",
		withReadme(removeFirstLine(SingleListReadme), () => (
			<SingleListRSDefault
				showSearch
				placeholder="Search Books"
				showFilter={false}
				showCount={boolean("showCount", false)}
			/>
		))
	)
	.add(
		"Without Search",
		withReadme(removeFirstLine(SingleListReadme), () => (
			<SingleListRSDefault
				showSearch={boolean("showSearch", false)}
				placeholder="Search Books"
				showFilter={false}
			/>
		))
	)
	.add(
		"With filter",
		withReadme(removeFirstLine(SingleListReadme), () => (
			<SingleListRSDefault
				showSearch
				placeholder="Search Books"
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Books filter")}
			/>
		))
	)
	.add(
		"Wihout radio buttons",
		withReadme(removeFirstLine(SingleListReadme), () => (
			<SingleListRSDefault
				showSearch
				placeholder="Search Books"
				showFilter={false}
				showRadio={boolean("showRadio", false)}
			/>
		))
	)
	.add(
		"Default Selected",
		withReadme(removeFirstLine(SingleListReadme), () => (
			<SingleListRSDefault
				showSearch
				defaultSelected={text("defaultSelected", "Hercule Poirot")}
				placeholder="Search Books"
				showFilter={false}
			/>
		))
	)
	.add(
		"Custom Sort",
		withReadme(removeFirstLine(SingleListReadme), () => (
			<SingleListRSDefault
				title="SingleList: Custom Sort"
				showSearch
				defaultSelected="London"
				sortBy={select(
					"sortBy",
					{ asc: "asc", description: "desc", count: "count" },
					"asc"
				)}
				placeholder="Search Books"
				showFilter={false}
			/>
		))
	)
	.add(
		"With Select All",
		withReadme(removeFirstLine(SingleListReadme), () => (
			<SingleListRSDefault
				showSearch
				selectAllLabel={text("selectAllLabel", "All Books")}
				placeholder="Search Books"
				showFilter={false}
			/>
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(SingleListReadme), () => (
			<SingleListRSDefault
				showSearch
				placeholder="Search Books"
				showFilter={false}
				URLParams={boolean("URLParams (not visible on storybook)", true)}
			/>
		))
	)
	.add(
		"extending onValueChange",
		withReadme(removeFirstLine(SingleListReadme), () => (
			<SingleListRSDefault
				showSearch
				placeholder="Search Books"
				showFilter={false}
				onValueChange={action("SingleList Value Changed")}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(SingleListReadme), () => (
			<SingleListRSDefault
				title={text("title", "SingleList: Books Filter")}
				dataField={select("dataField", ["original_series.raw", "authors.raw", "language_code.raw"], "original_series.raw")}
				size={number("size", 100)}
				sortBy={select(
					"sortBy",
					{ asc: "asc", description: "desc", count: "count" },
					"count"
				)}
				defaultSelected={text("defaultSelected", "Artemis Fowl")}
				showCount={boolean("showCount", true)}
				showSearch={boolean("showSearch", true)}
				placeholder={text("placeholder", "Search Books")}
				selectAllLabel={text("selectAllLabel", "All books")}
				showRadio={boolean("showRadio", true)}
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Books filter")}
				URLParams={boolean("URLParams (not visible on storybook)", false)}
			/>
		))
	);

storiesOf("List components/MultiList", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(MultiListReadme), () => (
			<MultiListRSDefault
				showSearch
				placeholder="Search Books"
				showFilter={false}
			/>
		))
	)
	.add(
		"With title",
		withReadme(removeFirstLine(MultiListReadme), () => (
			<MultiListRSDefault
				showSearch
				placeholder="Search Books"
				showFilter={false}
				title={text("title", "MultiList: Books Filter")}
			/>
		))
	)
	.add(
		"With size",
		withReadme(removeFirstLine(MultiListReadme), () => (
			<MultiListRSDefault
				showSearch
				placeholder="Search Books"
				showFilter={false}
				size={number("size", 10)}
			/>
		))
	)
	.add(
		"With filter",
		withReadme(removeFirstLine(MultiListReadme), () => (
			<MultiListRSDefault
				showSearch
				placeholder="Search Books"
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Books filter")}
			/>
		))
	)
	.add(
		"With queryFormat",
		withReadme(removeFirstLine(MultiListReadme), () => (
			<MultiListRSDefault
				showSearch
				placeholder="Search Books"
				queryFormat={select("queryFormat", { and: "and", or: "or" }, "and")}
			/>
		))
	)
	.add(
		"Wihout count",
		withReadme(removeFirstLine(MultiListReadme), () => (
			<MultiListRSDefault
				showSearch
				placeholder="Search Books"
				showFilter={false}
				showCount={boolean("showCount", false)}
			/>
		))
	)
	.add(
		"Without Search",
		withReadme(removeFirstLine(MultiListReadme), () => (
			<MultiListRSDefault
				showSearch={boolean("showSearch", false)}
				placeholder="Search Books"
				showFilter={false}
			/>
		))
	)
	.add(
		"Without checkbox",
		withReadme(removeFirstLine(MultiListReadme), () => (
			<MultiListRSDefault
				showSearch
				placeholder="Search Books"
				showFilter={false}
				showCheckbox={boolean("showCheckbox", false)}
			/>
		))
	)
	.add(
		"Default Selected",
		withReadme(removeFirstLine(MultiListReadme), () => (
			<MultiListRSDefault
				showSearch
				defaultSelected={array("defaultSelected", ["Hercule Poirot"])}
				placeholder="Search Books"
				showFilter={false}
			/>
		))
	)
	.add(
		"Custom Sort",
		withReadme(removeFirstLine(MultiListReadme), () => (
			<MultiListRSDefault
				title="MultiList: Custom Sort"
				showSearch
				defaultSelected={["London"]}
				sortBy={select(
					"sortBy",
					{ asc: "asc", description: "desc", count: "count" },
					"asc"
				)}
				placeholder="Search Books"
				showFilter={false}
			/>
		))
	)
	.add(
		"With Select All",
		withReadme(removeFirstLine(MultiListReadme), () => (
			<MultiListRSDefault
				showSearch
				selectAllLabel={text("selectAllLabel", "All Books")}
				placeholder="Search Books"
				showFilter={false}
			/>
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(MultiListReadme), () => (
			<MultiListRSDefault
				showSearch
				placeholder="Search Books"
				showFilter={false}
				URLParams={boolean("URLParams (not visible on storybook)", true)}
			/>
		))
	)
	.add(
		"extending with onValueChange",
		withReadme(removeFirstLine(MultiListReadme), () => (
			<MultiListRSDefault
				showSearch
				placeholder="Search Books"
				showFilter={false}
				onValueChange={action("MultiList Value Changed")}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(MultiListReadme), () => (
			<MultiListRSDefault
				title={text("title", "MultiList: Books Filter")}
				dataField={select("dataField", ["original_series.raw", "authors.raw", "language_code.raw"], "original_series.raw")}
				size={number("size", 10)}
				sortBy={select(
					"sortBy",
					{ asc: "asc", description: "desc", count: "count" },
					"count"
				)}
				defaultSelected={array("defaultSelected", ["Harry Potter", "Artemis Fowl"])}
				showCount={boolean("showCount", true)}
				showSearch={boolean("showSearch", true)}
				showCheckbox={boolean("showCheckbox", true)}
				placeholder={text("placeholder", "Search Books")}
				selectAllLabel={text("selectAllLabel", "All books")}
				queryFormat={select("queryFormat", { and: "and", or: "or" }, "or")}
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Books filter")}
				URLParams={boolean("URLParams (not visible on storybook)", false)}
			/>
		))
	);

storiesOf("List components/SingleDropdownList", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(SingleDropdownListReadme), () => (
			<SingleDropdownListRSDefault showFilter={false} />
		))
	)
	.add(
		"With title",
		withReadme(removeFirstLine(SingleDropdownListReadme), () => (
			<SingleDropdownListRSDefault
				showFilter={false}
				title={text("title", "Book list")}
			/>
		))
	)
	.add(
		"With size",
		withReadme(removeFirstLine(SingleDropdownListReadme), () => (
			<SingleDropdownListRSDefault
				showFilter={false}
				size={number("size", 10)}
			/>
		))
	)
	.add(
		"With filter",
		withReadme(removeFirstLine(SingleDropdownListReadme), () => (
			<SingleDropdownListRSDefault
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Book filter")}
			/>
		))
	)
	.add(
		"With custom sort",
		withReadme(removeFirstLine(SingleDropdownListReadme), () => (
			<SingleDropdownListRSDefault
				showFilter={false}
				sortBy={select(
					"sortBy",
					{ asc: "asc", description: "desc", count: "count" },
					"asc"
				)}
			/>
		))
	)
	.add(
		"Without count",
		withReadme(removeFirstLine(SingleDropdownListReadme), () => (
			<SingleDropdownListRSDefault
				showFilter={false}
				showCount={boolean("showCount", false)}
			/>
		))
	)
	.add(
		"With Select All",
		withReadme(removeFirstLine(SingleDropdownListReadme), () => (
			<SingleDropdownListRSDefault
				selectAllLabel={text("selectAllLabel", "All Books")}
				showFilter={false}
			/>
		))
	)
	.add(
		"With Default Selected",
		withReadme(removeFirstLine(SingleDropdownListReadme), () => (
			<SingleDropdownListRSDefault
				selectAllLabel="All Cities"
				defaultSelected={text("defaultSelected", "Artemis Fowl")}
				showFilter={false}
			/>
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(SingleDropdownListReadme), () => (
			<SingleDropdownListRSDefault
				showFilter={false}
				URLParams={boolean("URLParams (not visible on storybook)", true)}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(SingleDropdownListReadme), () => (
			<SingleDropdownListRSDefault
				title={text("title", "SingleDropdownList")}
				dataField={select("dataField", ["original_series.raw", "authors.raw", "language_code.raw"], "original_series.raw")}
				size={number("size", 100)}
				showCount={boolean("showCount", true)}
				sortBy={select(
					"sortBy",
					{ asc: "asc", description: "desc", count: "count" },
					"count"
				)}
				selectAllLabel={text("selectAllLabel", "All Books")}
				defaultSelected={text("defaultSelected", "Harry Potter")}
				placeholder={text("placeholder", "Select a Book")}
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Book filter")}
				URLParams={boolean("URLParams (not visible on storybook)", false)}
			/>
		))
	);

storiesOf("List components/MultiDropdownList", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(MultiDropdownListReadme), () => (
			<MultiDropdownListRSDefault showFilter={false} />
		))
	)
	.add(
		"With title",
		withReadme(removeFirstLine(SingleDropdownListReadme), () => (
			<MultiDropdownListRSDefault
				showFilter={false}
				title={text("title", "Books list")}
			/>
		))
	)
	.add(
		"With Placeholder",
		withReadme(removeFirstLine(MultiDropdownListReadme), () => (
			<MultiDropdownListRSDefault
				placeholder={text("placeholder", "Select Books")}
				showFilter={false}
			/>
		))
	)
	.add(
		"With size",
		withReadme(removeFirstLine(SingleDropdownListReadme), () => (
			<MultiDropdownListRSDefault
				showFilter={false}
				size={number("size", 10)}
			/>
		))
	)
	.add(
		"With filter",
		withReadme(removeFirstLine(SingleDropdownListReadme), () => (
			<MultiDropdownListRSDefault
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Books filter")}
			/>
		))
	)
	.add(
		"Without count",
		withReadme(removeFirstLine(SingleDropdownListReadme), () => (
			<MultiDropdownListRSDefault
				showFilter={false}
				showCount={boolean("showCount", false)}
			/>
		))
	)
	.add(
		"With custom sort",
		withReadme(removeFirstLine(SingleDropdownListReadme), () => (
			<MultiDropdownListRSDefault
				showFilter={false}
				sortBy={select(
					"sortBy",
					{ asc: "asc", description: "desc", count: "count" },
					"asc"
				)}
			/>
		))
	)
	.add(
		"With queryFormat",
		withReadme(removeFirstLine(MultiDropdownListReadme), () => (
			<MultiDropdownListRSDefault
				showFilter={false}
				queryFormat={select("queryFormat", { and: "and", or: "or" }, "and")}
			/>
		))
	)
	.add(
		"With Select All",
		withReadme(removeFirstLine(MultiDropdownListReadme), () => (
			<MultiDropdownListRSDefault
				placeholder="Select Books"
				selectAllLabel={text("selectAllLabel", "All Books")}
				showFilter={false}
			/>
		))
	)
	.add(
		"With Default Selected",
		withReadme(removeFirstLine(MultiDropdownListReadme), () => (
			<MultiDropdownListRSDefault
				placeholder="Select Books"
				size={100}
				sortBy="count"
				defaultSelected={array("defaultSelected", ["Hercule Poirot"])}
				showFilter={false}
			/>
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(MultiDropdownListReadme), () => (
			<MultiDropdownListRSDefault
				showFilter={false}
				URLParams={boolean("URLParams (not visible on storybook)", true)}
			/>
		))
	)
	.add(
		"extending onValueChange",
		withReadme(removeFirstLine(MultiDropdownListReadme), () => (
			<MultiDropdownListRSDefault
				showFilter={false}
				onValueChange={action("MultiDropdownList Value Changed")}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(MultiDropdownListReadme), () => (
			<MultiDropdownListRSDefault
				title={text("title", "MultiDropdownList")}
				dataField={select("dataField", ["original_series.raw", "authors.raw", "language_code.raw"], "original_series.raw")}
				size={number("size", 100)}
				showCount={boolean("showCount", true)}
				sortBy={select(
					"sortBy",
					{ asc: "asc", description: "desc", count: "count" },
					"count"
				)}
				queryFormat={select("queryFormat", { and: "and", or: "or" }, "and")}
				selectAllLabel={text("selectAllLabel", "All Books")}
				defaultSelected={array("defaultSelected", ["Hercule Poirot"])}
				placeholder={text("placeholder", "Select Books")}
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Books filter")}
				URLParams={boolean("URLParams (not visible on storybook)", false)}
			/>
		))
	);

storiesOf("List components/SingleDataList", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(SingleDataListReadme), () => (
			<SingleDataListRSDefault />
		))
	)
	.add(
		"With title",
		withReadme(removeFirstLine(SingleDataListReadme), () => (
			<SingleDataListRSDefault
				showFilter={false}
				title={text("title", "Topics")}
			/>
		))
	)
	.add(
		"With defaultSelected",
		withReadme(removeFirstLine(SingleDataListReadme), () => (
			<SingleDataListRSDefault
				defaultSelected={text("defaultSelected", "Social")}
				showFilter={false}
			/>
		))
	)
	.add(
		"With showSearch",
		withReadme(removeFirstLine(SingleDataListReadme), () => (
			<SingleDataListRSDefault
				showFilter={false}
				showSearch={boolean("showSearch", true)}
				placeholder={text("placeholder", "Search topics")}
			/>
		))
	)
	.add(
		"Without Radio",
		withReadme(removeFirstLine(SingleDataListReadme), () => (
			<SingleDataListRSDefault
				showRadio={boolean("showRadio", false)}
				showFilter={false}
			/>
		))
	)
	.add(
		"With selectAllLabel",
		withReadme(removeFirstLine(SingleDataListReadme), () => (
			<SingleDataListRSDefault
				showFilter={false}
				selectAllLabel={text("selectAllLabel", "Select All")}
			/>
		))
	)
	.add(
		"With filter",
		withReadme(removeFirstLine(SingleDataListReadme), () => (
			<SingleDataListRSDefault
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Custom Filter Name")}
			/>
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(SingleDataListReadme), () => (
			<SingleDataListRSDefault
				showFilter={false}
				URLParams={boolean("URLParams (not visible on storybook)", true)}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(SingleDataListReadme), () => (
			<SingleDataListRSDefault
				title={text("title", "Topics")}
				dataField={text("dataField", "group.group_topics.topic_name_raw.raw")}
				defaultSelected={text("defaultSelected", "Social")}
				showSearch={boolean("showSearch", true)}
				placeholder={text("placeholder", "Search topics")}
				showRadio={boolean("showRadio", true)}
				selectAllLabel={text("selectAllLabel", "Select All")}
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Custom Filter Name")}
				URLParams={boolean("URLParams (not visible on storybook)", false)}
			/>
		))
	);

storiesOf("List components/MultiDataList", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(MultiDataListReadme), () => (
			<MultiDataListRSDefault showFilter={false} />
		))
	)
	.add(
		"With title",
		withReadme(removeFirstLine(MultiDataListReadme), () => (
			<MultiDataListRSDefault
				showFilter={false}
				title={text("title", "Topics")}
			/>
		))
	)
	.add(
		"With defaultSelected",
		withReadme(removeFirstLine(MultiDataListReadme), () => (
			<MultiDataListRSDefault
				defaultSelected={array("defaultSelected", ["Social", "Music"])}
				showFilter={false}
			/>
		))
	)
	.add(
		"With showSearch",
		withReadme(removeFirstLine(MultiDataListReadme), () => (
			<MultiDataListRSDefault
				showFilter={false}
				showSearch={boolean("showSearch", true)}
				placeholder={text("placeholder", "Search topics")}
			/>
		))
	)
	.add(
		"Without Checkbox",
		withReadme(removeFirstLine(MultiDataListReadme), () => (
			<MultiDataListRSDefault
				showCheckbox={boolean("showCheckbox", false)}
				showFilter={false}
			/>
		))
	)
	.add(
		"With selectAllLabel",
		withReadme(removeFirstLine(MultiDataListReadme), () => (
			<MultiDataListRSDefault
				showFilter={false}
				selectAllLabel={text("selectAllLabel", "Select All")}
			/>
		))
	)
	.add(
		"With filter",
		withReadme(removeFirstLine(MultiDataListReadme), () => (
			<MultiDataListRSDefault
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Custom Filter Name")}
			/>
		))
	)
	.add(
		"With queryFormat",
		withReadme(removeFirstLine(MultiDataListReadme), () => (
			<MultiDataListRSDefault
				showFilter={false}
				queryFormat={select("queryFormat", { and: "and", or: "or" }, "and")}
			/>
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(MultiDataListReadme), () => (
			<MultiDataListRSDefault
				showFilter={false}
				URLParams={boolean("URLParams (not visible on storybook)", true)}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(MultiDataListReadme), () => (
			<MultiDataListRSDefault
				title={text("title", "Topics")}
				dataField={text("dataField", "group.group_topics.topic_name_raw.raw")}
				defaultSelected={array("defaultSelected", ["Social", "Music"])}
				showSearch={boolean("showSearch", true)}
				placeholder={text("placeholder", "Search topics")}
				showCheckbox={boolean("showCheckbox", true)}
				selectAllLabel={text("selectAllLabel", "Select All")}
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Custom Filter Name")}
				queryFormat={select("queryFormat", { and: "and", or: "or" }, "or")}
				URLParams={boolean("URLParams (not visible on storybook)", false)}
			/>
		))
	);

storiesOf("Range components/SingleRange", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(SingleRangeReadme), () => (
			<SingleRangeRSDefault showFilter={false} />
		))
	)
	.add(
		"With title",
		withReadme(removeFirstLine(SingleRangeReadme), () => (
			<SingleRangeRSDefault
				showFilter={false}
				title={text("title", "SingleRange: Books Filter")}
			/>
		))
	)
	.add(
		"With Default Selected",
		withReadme(removeFirstLine(SingleRangeReadme), () => (
			<SingleRangeRSDefault
				defaultSelected={text("defaultSelected", "Rating 3 to 4")}
				showFilter={false}
			/>
		))
	)
	.add(
		"With filter",
		withReadme(removeFirstLine(SingleRangeReadme), () => (
			<SingleRangeRSDefault
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Books filter")}
			/>
		))
	)
	.add(
		"Without radio buttons",
		withReadme(removeFirstLine(SingleRangeReadme), () => (
			<SingleRangeRSDefault
				showFilter={false}
				showRadio={boolean("showRadio", false)}
			/>
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(MultiRangeReadme), () => (
			<SingleRangeRSDefault
				showFilter={false}
				URLParams={boolean("URLParams (not visible on storybook)", true)}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(SingleRangeReadme), () => (
			<SingleRangeRSDefault
				title={text("title", "SingleRange: Books Filter")}
				defaultSelected={text("defaultSelected", "Cheap")}
				showRadio={boolean("showRadio", true)}
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Books filter")}
				URLParams={boolean("URLParams (not visible on storybook)", false)}
			/>
		))
	);

storiesOf("Range components/MultiRange", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(MultiRangeReadme), () => (
			<MultiRangeRSDefault showFilter={false} />
		))
	)
	.add(
		"With title",
		withReadme(removeFirstLine(MultiRangeReadme), () => (
			<MultiRangeRSDefault
				title={text("title", "MultiRange: Books Filter")}
				showFilter={false}
			/>
		))
	)
	.add(
		"With Default Selected",
		withReadme(removeFirstLine(MultiRangeReadme), () => (
			<MultiRangeRSDefault
				defaultSelected={array("defaultSelected", ["Rating 3 to 4"])}
				showFilter={false}
			/>
		))
	)
	.add(
		"With filter",
		withReadme(removeFirstLine(MultiRangeReadme), () => (
			<MultiRangeRSDefault
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Books filter")}
			/>
		))
	)
	.add(
		"Without checkbox",
		withReadme(removeFirstLine(MultiRangeReadme), () => (
			<MultiRangeRSDefault
				showFilter={false}
				showCheckbox={boolean("showCheckbox", false)}
			/>
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(MultiRangeReadme), () => (
			<MultiRangeRSDefault
				showFilter={false}
				URLParams={boolean("URLParams (not visible on storybook)", true)}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(MultiRangeReadme), () => (
			<MultiRangeRSDefault
				title={text("title", "MultiRange: Books Filter")}
				defaultSelected={array("defaultSelected", ["Rating 3 to 4"])}
				showCheckbox={boolean("showCheckbox", true)}
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Books filter")}
				URLParams={boolean("URLParams (not visible on storybook)", false)}
			/>
		))
	);

storiesOf("Range components/SingleDropdownRange", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
			<SingleDropdownRangeRSDefault showFilter={false} />
		))
	)
	.add(
		"With title",
		withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
			<SingleDropdownRangeRSDefault
				title={text("title", "SingleDropdownRange: Books Filter")}
				showFilter={false}
			/>
		))
	)
	.add(
		"With placeholder",
		withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
			<SingleDropdownRangeRSDefault
				placeholder={text("placeholder", "Search books")}
				showFilter={false}
			/>
		))
	)
	.add(
		"With Default Selected",
		withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
			<SingleDropdownRangeRSDefault
				defaultSelected={text("defaultSelected", "Rating 3 to 4")}
				showFilter={false}
			/>
		))
	)
	.add(
		"With filter",
		withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
			<SingleDropdownRangeRSDefault
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Books")}
			/>
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
			<SingleDropdownRangeRSDefault
				URLParams={boolean("URLParams (not visible on storybook)", true)}
				showFilter={false}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
			<SingleDropdownRangeRSDefault
				title={text("title", "SingleDropdownRange: Books Filter")}
				placeholder={text("placeholder", "Search books")}
				defaultSelected={text("defaultSelected", "Rating 3 to 4")}
				URLParams={boolean("URLParams (not visible on storybook)", false)}
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Books")}
			/>
		))
	);

storiesOf("Range components/MultiDropdownRange", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(MultiDropdownRangeReadme), () => (
			<MultiDropdownRangeRSDefault showFilter={false} />
		))
	)
	.add(
		"With title",
		withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
			<MultiDropdownRangeRSDefault
				title={text("title", "MultiDropdownRange: Books Filter")}
				showFilter={false}
			/>
		))
	)
	.add(
		"With placeholder",
		withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
			<MultiDropdownRangeRSDefault
				placeholder={text("placeholder", "Search books")}
				showFilter={false}
			/>
		))
	)
	.add(
		"With Default Selected",
		withReadme(removeFirstLine(MultiDropdownRangeReadme), () => (
			<MultiDropdownRangeRSDefault
				defaultSelected={array("defaultSelected", ["Rating 3 to 4"])}
				showFilter={false}
			/>
		))
	)
	.add(
		"With filter",
		withReadme(removeFirstLine(MultiDropdownRangeReadme), () => (
			<MultiDropdownRangeRSDefault
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Books")}
			/>
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(MultiDropdownRangeReadme), () => (
			<MultiDropdownRangeRSDefault
				URLParams={boolean("URLParams (not visible on storybook)", true)}
				showFilter={false}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(MultiDropdownRangeReadme), () => (
			<MultiDropdownRangeRSDefault
				title={text("title", "MultiDropdownRange: Books Filter")}
				dataField={text("dataField", "average_rating")}
				defaultSelected={array("defaultSelected", ["Rating 3 to 4"])}
				placeholder={text("placeholder", "Search books")}
				URLParams={boolean("URLParams (not visible on storybook)", false)}
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Books")}
			/>
		))
	);

storiesOf("Base components/ToggleButton", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(ToggleButtonReadme), () => (
			<ToggleButtonRSDefault showFilter={false} />
		))
	)
	.add(
		"With title",
		withReadme(removeFirstLine(ToggleButtonReadme), () => (
			<ToggleButtonRSDefault
				showFilter={false}
				title={text("title", "ToggleButton: Topics")}
			/>
		))
	)
	.add(
		"With Default Selected",
		withReadme(removeFirstLine(ToggleButtonReadme), () => (
			<ToggleButtonRSDefault
				defaultSelected={array("defaultSelected", ["Music"])}
				showFilter={false}
			/>
		))
	)
	.add(
		"With filter",
		withReadme(removeFirstLine(ToggleButtonReadme), () => (
			<ToggleButtonRSDefault
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Topics filter")}
			/>
		))
	)
	.add(
		"Without multiSelect",
		withReadme(removeFirstLine(ToggleButtonReadme), () => (
			<ToggleButtonRSDefault
				showFilter={false}
				multiSelect={boolean("multiSelect", false)}
			/>
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(ToggleButtonReadme), () => (
			<ToggleButtonRSDefault
				showFilter={false}
				URLParams={boolean("URLParams (not visible on storybook)", true)}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(ToggleButtonReadme), () => (
			<ToggleButtonRSDefault
				title={text("title", "ToggleButton: Topics")}
				dataField={text("dataField", "group.group_topics.topic_name_raw.raw")}
				multiSelect={boolean("multiSelect", true)}
				defaultSelected={array("defaultSelected", ["Social"])}
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Category filter")}
				URLParams={boolean("URLParams (not visible on storybook)", false)}
			/>
		))
	);

storiesOf("Range components/DatePicker", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(DatePickerReadme), () => (
			<DatePickerRSDefault showFilter={false} />
		))
	)
	.add(
		"With title",
		withReadme(removeFirstLine(DatePickerReadme), () => (
			<DatePickerRSDefault
				title={text("title", "Date Picker")}
				showFilter={false}
			/>
		))
	)
	.add(
		"With placeholder",
		withReadme(removeFirstLine(DatePickerReadme), () => (
			<DatePickerRSDefault
				placeholder={text("placeholder", "Pick date")}
				showFilter={false}
			/>
		))
	)
	.add(
		"With filter",
		withReadme(removeFirstLine(DatePickerReadme), () => (
			<DatePickerRSDefault
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Date")}
			/>
		))
	)
	.add(
		"With focus",
		withReadme(removeFirstLine(DatePickerReadme), () => (
			<DatePickerRSDefault
				showFilter={false}
				focused={boolean("focused", true)}
			/>
		))
	)
	.add(
		"Show more than 1 month",
		withReadme(removeFirstLine(DatePickerReadme), () => (
			<DatePickerRSDefault
				numberOfMonths={number("numberOfMonths", 2)}
				showFilter={false}
			/>
		))
	)
	.add(
		"Default date",
		withReadme(removeFirstLine(DatePickerReadme), () => (
			<DatePickerRSDefault
				defaultSelected={text("defaultSelected", "2017-04-07")}
				showFilter={false}
			/>
		))
	)
	.add(
		"with initialMonth",
		withInfo(
			`initialMonth accepts a JavaScript object. Here it's passed new Date("2017-04-04")`
		)(withReadme(removeFirstLine(DatePickerReadme), () => (
			<DatePickerRSDefault
				initialMonth={new Date("2017-04-04")}
				showFilter={false}
			/>
		)))
	)
	.add(
		"Without clear button",
		withReadme(removeFirstLine(DatePickerReadme), () => (
			<DatePickerRSDefault
				showClear={boolean("showClear", false)}
				showFilter={false}
			/>
		))
	)
	.add(
		"Without clickUnselectsDay",
		withReadme(removeFirstLine(DatePickerReadme), () => (
			<DatePickerRSDefault
				clickUnselectsDay={boolean("clickUnselectsDay", false)}
				showFilter={false}
			/>
		))
	)
	.add(
		"With queryFormat",
		withReadme(removeFirstLine(DatePickerReadme), () => (
			<DatePickerRSDefault
				showFilter={false}
				queryFormat={select(
					"queryFormat",
					[
						"date",
						"basic_date",
						"basic_date_time",
						"basic_date_time_no_millis",
						"date_time_no_millis",
						"basic_time",
						"basic_time_no_millis",
						"epoch_millis",
						"epoch_seconds"
					],
					"epoch_millis"
				)}
			/>
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(DatePickerReadme), () => (
			<DatePickerRSDefault
				showFilter={false}
				URLParams={boolean("URLParams (not visible on storybook)", true)}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(DatePickerReadme), () => (
			<DatePickerRSDefault
				title={text("title", "Date Picker")}
				placeholder={text("placeholder", "Pick date")}
				dataField={select("dataField", ["date_from", "date_to"], "date_from")}
				numberOfMonths={number("numberOfMonths", 1)}
				queryFormat={select(
					"queryFormat",
					[
						"date",
						"basic_date",
						"basic_date_time",
						"basic_date_time_no_millis",
						"date_time_no_millis",
						"basic_time",
						"basic_time_no_millis",
						"epoch_millis",
						"epoch_seconds"
					],
					"epoch_millis"
				)}
				showFilter={boolean("showFilter", true)}
				dayPickerInputProps={object("dayPickerInputProps", {
					clickUnselectsDay: true
				})}
				filterLabel={text("filterLabel", "Date")}
				URLParams={boolean("URLParams (not visible on storybook)", false)}
			/>
		))
	);

storiesOf("Range components/DateRange", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(DateRangeReadme), () => (
			<DateRangeRSDefault showFilter={false} />
		))
	)
	.add(
		"With title",
		withReadme(removeFirstLine(DateRangeReadme), () => (
			<DateRangeRSDefault
				showFilter={false}
				title={text("title", "Date Range")}
			/>
		))
	)
	.add(
		"With placeholder",
		withReadme(removeFirstLine(DateRangeReadme), () => (
			<DateRangeRSDefault
				showFilter={false}
				placeholder={object(
					"placeholder",
					{
						start: "Start Date",
						end: "End Date"
					}
				)}
			/>
		))
	)
	.add(
		"without showClear",
		withReadme(removeFirstLine(DateRangeReadme), () => (
			<DateRangeRSDefault showFilter={false} showClear={boolean("showClear", false)} />
		))
	)
	.add(
		"With filter",
		withReadme(removeFirstLine(DateRangeReadme), () => (
			<DateRangeRSDefault
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Date range")}
			/>
		))
	)
	.add(
		"Show more than 1 month",
		withReadme(removeFirstLine(DateRangeReadme), () => (
			<DateRangeRSDefault
				numberOfMonths={number("numberOfMonths", 3)}
				showFilter={false}
			/>
		))
	)
	.add(
		"Default date",
		withReadme(removeFirstLine(DateRangeReadme), () => (
			<DateRangeRSDefault
				showFilter={false}
				defaultSelected={{
					start: new Date("2017-04-07"),
					end: new Date("2017-04-14")
				}}
			/>
		))
	)
	.add(
		"wihout autoFocusEnd",
		withReadme(removeFirstLine(DateRangeReadme), () => (
			<DateRangeRSDefault showFilter={false} autoFocusEnd={boolean("autoFocusEnd", false)} />
		))
	)
	.add(
		"With queryFormat",
		withReadme(removeFirstLine(DateRangeReadme), () => (
			<DateRangeRSDefault
				showFilter={false}
				queryFormat={select(
					"queryFormat",
					[
						"date",
						"basic_date",
						"basic_date_time",
						"basic_date_time_no_millis",
						"date_time_no_millis",
						"basic_time",
						"basic_time_no_millis",
						"epoch_millis",
						"epoch_seconds"
					],
					"epoch_millis"
				)}
			/>
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(DateRangeReadme), () => (
			<DateRangeRSDefault
				showFilter={false}
				URLParams={boolean("URLParams (not visible on storybook)", true)}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(DateRangeReadme), () => (
			<DateRangeRSDefault
				title={text("title", "Date Range")}
				dataField={select("dataField", ["date_from", "date_to"], "date_from")}
				numberOfMonths={number("numberOfMonths", 2)}
				dayPickerInputProps={object("dayPickerInputProps", {
					clickUnselectsDay: true
				})}
				queryFormat={select(
					"queryFormat",
					[
						"date",
						"basic_date",
						"basic_date_time",
						"basic_date_time_no_millis",
						"date_time_no_millis",
						"basic_time",
						"basic_time_no_millis",
						"epoch_millis",
						"epoch_seconds"
					],
					"epoch_millis"
				)}
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Date range")}
				URLParams={boolean("URLParams (not visible on storybook)", false)}
			/>
		))
	);

storiesOf("Range components/RangeInput", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(RangeSliderReadme), () => (
			<RangeInputRSDefault />
		))
	)
	.add(
		"With title",
		withReadme(removeFirstLine(RangeSliderReadme), () => (
			<RangeInputRSDefault title={text("title", "RangeInput: Ratings")} />
		))
	)
	.add(
		"With Default Selected",
		withReadme(removeFirstLine(RangeSliderReadme), () => (
			<RangeInputRSDefault
				defaultSelected={object("defaultSelected", {
					start: 5000,
					end: 9000
				})}
			/>
		))
	)
	.add(
		"Without histogram",
		withReadme(removeFirstLine(RangeSliderReadme), () => (
			<RangeInputRSDefault showHistogram={boolean("showHistogram", false)} />
		))
	)
	.add(
		"Without slider",
		withReadme(removeFirstLine(RangeSliderReadme), () => (
			<RangeInputRSDefault showSlider={boolean("showSlider", false)} />
		))
	)
	.add(
		"With custom histogram interval",
		withReadme(removeFirstLine(RangeSliderReadme), () => (
			<RangeInputRSDefault interval={number("interval", 1000)} />
		))
	)
	.add(
		"With Range Labels",
		withReadme(removeFirstLine(RangeSliderReadme), () => (
			<RangeInputRSDefault
				rangeLabels={object("rangeLabels", {
					start: "Low",
					end: "High"
				})}
			/>
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(RangeSliderReadme), () => (
			<RangeInputRSDefault
				URLParams={boolean("URLParams (not visible on storybook)", true)}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(RangeSliderReadme), () => (
			<RangeInputRSDefault
				title={text("title", "RangeSlider: Ratings")}
				dataField={select("dataField", ["books_count", "original_publication_year", "ratings_count"], "books_count")}
				range={object("range", {
					start: 3000,
					end: 50000
				})}
				stepValue={number("stepValue", 1)}
				interval={number("interval", 1000)}
				defaultSelected={object("defaultSelected", {
					start: 4000,
					end: 10000
				})}
				rangeLabels={object("rangeLabels", {
					start: "Start",
					end: "End"
				})}
				showHistogram={boolean("showHistogram", true)}
				showSlider={boolean("showSlider", true)}
				URLParams={boolean("URLParams (not visible on storybook)", false)}
			/>
		))
	);

storiesOf("Range components/RangeSlider", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(RangeSliderReadme), () => (
			<RangeSliderRSDefault />
		))
	)
	.add(
		"With title",
		withReadme(removeFirstLine(RangeSliderReadme), () => (
			<RangeSliderRSDefault title={text("title", "RangeSlider: Ratings")} />
		))
	)
	.add(
		"With Default Selected",
		withReadme(removeFirstLine(RangeSliderReadme), () => (
			<RangeSliderRSDefault
				defaultSelected={object("defaultSelected", {
					start: 3000,
					end: 4000
				})}
			/>
		))
	)
	.add(
		"Without histogram",
		withReadme(removeFirstLine(RangeSliderReadme), () => (
			<RangeSliderRSDefault showHistogram={boolean("showHistogram", false)} />
		))
	)
	.add(
		"With custom histogram interval",
		withReadme(removeFirstLine(RangeSliderReadme), () => (
			<RangeSliderRSDefault interval={number("interval", 1000)} />
		))
	)
	.add(
		"With Range Labels",
		withReadme(removeFirstLine(RangeSliderReadme), () => (
			<RangeSliderRSDefault
				rangeLabels={object("rangeLabels", {
					start: "Low",
					end: "High"
				})}
			/>
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(RangeSliderReadme), () => (
			<RangeSliderRSDefault
				URLParams={boolean("URLParams (not visible on storybook)", true)}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(RangeSliderReadme), () => (
			<RangeSliderRSDefault
				title={text("title", "RangeSlider: Prices")}
				dataField={select("dataField", ["books_count", "original_publication_year", "ratings_count"], "books_count")}
				range={object("range", {
					start: 3000,
					end: 50000
				})}
				stepValue={number("stepValue", 1)}
				interval={number("interval", 2000)}
				defaultSelected={object("defaultSelected", {
					start: 6000,
					end: 12000
				})}
				rangeLabels={object("rangeLabels", {
					start: "Start",
					end: "End"
				})}
				showHistogram={boolean("showHistogram", true)}
				URLParams={boolean("URLParams (not visible on storybook)", false)}
			/>
		))
	);

// storiesOf("search/SelectedFilters", module)
// 	.addDecorator(withKnobs)
// 	.add("Basic", withReadme(removeFirstLine(SelectedFiltersReadme), () => (
// 		<MultiListRSDefault showSearch placeholder="Search City" defaultSelected={["London"]} />
// 	)))
// 	.add("With no filter", withReadme(removeFirstLine(SelectedFiltersReadme), () => (
// 		<MultiListRSDefault showSearch placeholder="Search City" defaultSelected={["London"]} showFilter={boolean("showFilter", false)} />
// 	)))
// 	.add("With filterLabel", withReadme(removeFirstLine(SelectedFiltersReadme), () => (
// 		<MultiListRSDefault showSearch placeholder="Search City" defaultSelected={["London"]} filterLabel={text("filterLabel", "City filter")} />
// 	)))
// 	.add("Playground", withReadme(removeFirstLine(SelectedFiltersReadme), () => (
// 		<MultiListRSDefault
// 			defaultSelected={["London"]}
// 			showFilter={boolean("showFilter", true)}
// 			filterLabel={text("filterLabel", "City filter")}
// 		/>
// 	)));

// storiesOf("search/ReactiveElement", module)
// 	.addDecorator(withKnobs)
// 	.add("Basic", withReadme(removeFirstLine(ReactiveElementReadme, 3), () => (
// 		<ReactiveElement.Basic />
// 	)))
// 	.add("With title", withReadme(removeFirstLine(ReactiveElementReadme, 3), () => (
// 		<ReactiveElement.Basic title={text("title", "ReactiveElement")} />
// 	)))
// 	.add("With placeholder", withReadme(removeFirstLine(ReactiveElementReadme, 3), () => (
// 		<ReactiveElement.Basic placeholder={text("placeholder", "Select city from the list")} />
// 	)))
// 	.add("Without result stats", withReadme(removeFirstLine(ReactiveElementReadme, 3), () => (
// 		<ReactiveElement.Basic showResultStats={boolean("showResultStats", false)} />
// 	)))
// 	.add("Stream", withReadme(removeFirstLine(ReactiveElementReadme, 3), () => (
// 		<ReactiveElement.WithStream />
// 	)))
// 	.add("Theme", withReadme(removeFirstLine(ReactiveElementReadme, 3), () => (
// 		<ReactiveElement.WithTheme />
// 	)))
// 	.add("Playground", withReadme(removeFirstLine(ReactiveElementReadme, 3), () => (
// 		<ReactiveElement.Basic
// 			title={text("title", "ReactiveElement")}
// 			placeholder={text("placeholder", "Select city from the list")}
// 			from={number("from", 0)}
// 			size={number("size", 5)}
// 			initialLoader={text("initialLoader", "Loading results..")}
// 			noResults={text("noResults", "No results found! Try a different filter duh..")}
// 			stream={boolean("stream", false)}
// 			showResultStats={boolean("showResultStats", true)}
// 		/>
// 	)));
