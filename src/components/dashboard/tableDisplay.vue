<template id="">
  <section>
    <div class="mt2 overflow-auto">
      <table class=" w-100 black">
        <thead class="f7">
          <slot name="tableHead" ></slot>
        </thead>
        <tbody class="f7">
          <slot name="tableBody" ></slot>
        </tbody>
      </table>
    </div>
  </section>
</template>

