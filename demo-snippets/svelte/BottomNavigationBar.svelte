<script lang="ts">
    import { goBack } from 'svelte-native'
    import { BottomNavigationBar, TabPressedEventData, TabReselectedEventData, TabSelectedEventData } from '@nativescript-community/ui-material-bottomnavigationbar';
    import { EventData } from '@nativescript/core';

    export const title = 'BottomNavigationBar sample';

    let currentTab = 0;
    let bottomBar;

    function selectThird() {
        bottomBar.nativeView.selectTab(2);
    }

    function onNavigationButtonTap() {
        goBack();
    }

    function onbottomNavigationBarLoaded(args: EventData): void {
        const bottomNavigationBar = args.object as BottomNavigationBar;
        bottomNavigationBar.showBadge(1);
        bottomNavigationBar.showBadge(2, 4);
    }

    function onBottomNavigationTabPressed(args: TabPressedEventData): void {
        alert('This tab has isSelectable: false, and should be used to perform actions');
        console.log(`pressed tab index:  ${args.index}`);
    }

    function onBottomNavigationTabSelected(args: TabSelectedEventData): void {
        console.log(`old tab index:  ${args.oldIndex}`);
        console.log(`selected tab index:  ${args.newIndex}`);
        currentTab = args.newIndex;
    }

    function onBottomNavigationTabReselected(args: TabReselectedEventData): void {
        alert('Tab Reselected');
        console.log(`reselected tab index:  ${args.index}`);
    }
</script>

<page>
    <actionBar {title}>
        <navigationButton text="Back" android.systemIcon="ic_menu_back" on:tap={onNavigationButtonTap} />
    </actionBar>
    <gridLayout class="page" backgroundColor="white" rows="*, auto">
        <stackLayout row="0">
            {#if currentTab == 2} 
                 <gridLayout class="p-20">
                     <label class="h1 text-center" text="Third tab" textWrap="true" />
                </gridLayout>
            {:else}
                <gridLayout class="p-20">
                    <label class="h1 text-center" text="First tab" textWrap="true" />
                    <button text="select sthird" on:tap={selectThird} horizontalAlignment="center" verticalAlignment="bottom" />
                </gridLayout>
            {/if}
        </stackLayout>
        <mdBottomNavigationBar
            bind:this={bottomBar}
            row="1"
            activeColor="blue"
            inactiveColor="green"
            selectedTabIndex="2"
            class="mdi"
            on:loaded={onbottomNavigationBarLoaded}
            on:tabPressed={onBottomNavigationTabPressed}
            on:tabSelected={onBottomNavigationTabSelected}
            on:tabReselected={onBottomNavigationTabReselected}
        >
            <mdBottomNavigationTab title="First" activeColor="green" class="mdi" />
            <mdBottomNavigationTab title="Second" icon="font://mdi-account" class="mdi" />
            <mdBottomNavigationTab title="Third" icon="res://ic_menu" inactiveColor="brown" isSelectable="false" />
        </mdBottomNavigationBar>
    </gridLayout>
</page>

