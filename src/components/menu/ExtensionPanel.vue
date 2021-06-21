<template>
  <v-expansion-panels>
    <v-expansion-panel class="cyan darken-3">
      <v-expansion-panel-header class="white--text">
        확장 패널
        <template v-slot:actions>
          <v-icon color="white">$expand</v-icon>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-list-item :to="{ path: '/aa/1' }">
          <v-list-item-content>
            <v-list-item-title class="white--text">TEMP_1</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-expansion-panel-content>
      <v-expansion-panel-content>
        <v-list-item :to="{ path: '/bb/2' }">
          <v-list-item-content>
            <v-list-item-title class="white--text">TEMP_2</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {};
</script>

<style></style>
