<template>
  <div>
    <h4>Mail Details</h4>
    <div class="info">
      <b class="info-title">Mail Type:</b>
      <span>{{ getMessageClassDescription(currentItem?.itemClass) }}</span>
    </div>
    <div class="info">
      <b class="info-title">Subject:</b>
      <span>{{ currentItem?.normalizedSubject }}</span>
    </div>
    <div class="info" v-if="currentItem?.location">
      <b class="info-title">Location:</b>
      <span>{{ currentItem?.location }}</span>
    </div>

    <a href="#" class="myBtn" @click="logEvent">Log Event</a>
  </div>
</template>

<script>
export default {
  name: "MeetingInfo",
  props: ["currentItem"],
  data() {
    return {
      events: [],
      from: null,
      to: null,
    };
  },
  mounted() {
    // this.from = this.currentItem.from;
    console.log(this.currentItem);
  },
  methods: {
    getMessageClassDescription(key) {
      return messageClasses[key] || false;
    },
    async fetchEvents() {
      try {
        const response = await fetch("http://localhost:3000/events");
        if (!response.ok) {
          throw new Error("Failed to fetch events.");
        }
        const data = await response.json();
        this.events = data;
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    },
    async logEvent() {
      // Select only the required properties from the 'currentItem' object
      const {
        itemId,
        itemClass,
        start,
        end,
        subject,
        isAllDayEvent,
        from,
        to,
        location,
        normalizedSubject,
      } = this.currentItem;

      const newEvent = {
        itemId,
        itemClass,
        start,
        end,
        subject,
        isAllDayEvent: isAllDayEvent || false,
        from,
        to,
        location,
        normalizedSubject,
      };

      try {
        const response = await fetch("http://localhost:3000/events", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newEvent),
        });
        if (!response.ok) {
          throw new Error("Failed to add event.");
        }
        const data = await response.json();
        console.log(data);
        this.fetchEvents(); // Refresh the event list
      } catch (error) {
        console.error("Error adding event:", error);
      }
    },
  },
};
</script>

<style>
.info {
  margin-bottom: 10px;
}

.info-title {
  font-weight: bold;
}

.myBtn {
  display: block;
  margin-top: 10px;
  text-decoration: none;
  color: blue;
  cursor: pointer;
}
</style>
