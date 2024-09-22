<template>
    <div class="bg-gray-100 p-6">
      <div class="w-full mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h2 class="text-2xl font-bold mb-8">Add New Student</h2>
  
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Profile Information -->
          <div>
            <h3 class="text-lg font-semibold mb-4">1. Profile Information</h3>
            <div class="flex items-center mb-4">
              <input type="file" @change="previewImage" class="hidden" id="student-picture" accept="image/*" />
              <label for="student-picture" class="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md">Upload Student Picture</label>
              <img v-if="studentPicture" :src="studentPicture" alt="Student Picture" class="ml-4 h-20 w-20 object-cover rounded-full border-2 border-gray-300" />
            </div>
            <div class="flex items-center mb-4">
              <input type="file" @change="previewSignature" class="hidden" id="student-signature" accept="image/*" />
              <label for="student-signature" class="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md">Upload Student Signature</label>
              <img v-if="studentSignature" :src="studentSignature" alt="Student Signature" class="ml-4 h-20 w-40 object-cover border-2 border-gray-300" />
            </div>
          </div>
  
          <!-- Contact Information -->
          <div>
            <h3 class="text-lg font-semibold mb-4">2. Contact Information</h3>
            <input v-model="contact.mobile1" type="tel" placeholder="Mobile No." class="block w-full mb-4 p-2 border rounded-md" />
            <input v-model="contact.mobile2" type="tel" placeholder="Mobile No. 2" class="block w-full mb-4 p-2 border rounded-md" />
            <input v-model="contact.city" type="text" placeholder="City" class="block w-full mb-4 p-2 border rounded-md" />
            <input v-model="contact.address" type="text" placeholder="Address" class="block w-full mb-4 p-2 border rounded-md" />
          </div>
        </div>
  
        <!-- General Information -->
        <h3 class="text-lg font-semibold mb-4">3. General Information</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input v-model="general.registrationNo" type="text" placeholder="Registration No." class="block w-full p-2 border rounded-md" />
          <input v-model="general.class" type="text" placeholder="Class" class="block w-full p-2 border rounded-md" />
          <input v-model="general.fatherName" type="text" placeholder="Father Name" class="block w-full p-2 border rounded-md" />
          <input v-model="general.motherName" type="text" placeholder="Mother Name" class="block w-full p-2 border rounded-md" />
          <select v-model="general.gender" class="block w-full p-2 border rounded-md">
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <input v-model="general.dob" type="date" placeholder="DOB" class="block w-full p-2 border rounded-md" />
          <input v-model="general.bloodGroup" type="text" placeholder="Blood Group" class="block w-full p-2 border rounded-md" />
          <input v-model="general.aadharNo" type="text" placeholder="Aadhar No." class="block w-full p-2 border rounded-md" />
          <input v-model="general.category" type="text" placeholder="Category" class="block w-full p-2 border rounded-md" />
          <input v-model="general.pupinNo" type="text" placeholder="Pupin No." class="block w-full p-2 border rounded-md" />
          <input v-model="general.income" type="text" placeholder="Income" class="block w-full p-2 border rounded-md" />
        </div>
  
        <!-- Academic Information -->
        <h3 class="text-lg font-semibold mb-4">4. Academic Information</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input v-model="academic.subjects" type="text" placeholder="Subjects" class="block w-full p-2 border rounded-md" />
          <input v-model="academic.previousClass" type="text" placeholder="Previous Class" class="block w-full p-2 border rounded-md" />
          <input v-model="academic.semester" type="text" placeholder="Semester" class="block w-full p-2 border rounded-md" />
          <input v-model="academic.session" type="text" placeholder="Session" class="block w-full p-2 border rounded-md" />
          <input v-model="academic.rollNo" type="text" placeholder="University/Board Roll No." class="block w-full p-2 border rounded-md" />
          <input v-model="academic.totalMarks" type="text" placeholder="Total Marks" class="block w-full p-2 border rounded-md" />
          <input v-model="academic.obtainedMarks" type="text" placeholder="Obtained Marks" class="block w-full p-2 border rounded-md" />
          <input v-model="academic.schoolName" type="text" placeholder="School/College Name" class="block w-full p-2 border rounded-md" />
          <input v-model="academic.board" type="text" placeholder="Board/University" class="block w-full p-2 border rounded-md" />
        </div>
  
        <!-- Documents Upload -->
        <h3 class="text-lg font-semibold mb-4">5. Documents Upload</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input type="file" class="block w-full mb-4 p-2 border rounded-md" placeholder="10th Class Documents" />
          <input type="file" class="block w-full mb-4 p-2 border rounded-md" placeholder="12th Class Documents" />
          <input type="file" class="block w-full mb-4 p-2 border rounded-md" placeholder="Character Certificate (Last Institute)" />
          <input type="file" class="block w-full mb-4 p-2 border rounded-md" placeholder="Diploma Certificate" />
          <input type="file" class="block w-full mb-4 p-2 border rounded-md" placeholder="Character Certificate (From Diploma)" />
          <input type="file" class="block w-full mb-4 p-2 border rounded-md" placeholder="Aadhar Card Upload" />
          <input type="file" class="block w-full mb-4 p-2 border rounded-md" placeholder="Parent's Aadhar Card Upload" />
          <input type="file" class="block w-full mb-4 p-2 border rounded-md" placeholder="Last Semester Document Upload" />
          <input type="file" class="block w-full mb-4 p-2 border rounded-md" placeholder="Blood Group Report Upload" />
          <input type="file" class="block w-full mb-4 p-2 border rounded-md" placeholder="Bank Passbook Upload" />
          <input type="file" class="block w-full mb-4 p-2 border rounded-md" placeholder="Income Certificate Upload" />
          <input type="file" class="block w-full mb-4 p-2 border rounded-md" placeholder="Caste Certificate Upload" />
        </div>
  
        <button @click="submitForm" class="bg-green-500 text-white px-6 py-2 rounded-md">Submit</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        studentPicture: null,
        studentSignature: null,
        contact: {
          mobile1: '',
          mobile2: '',
          city: '',
          address: ''
        },
        general: {
          registrationNo: '',
          class: '',
          fatherName: '',
          motherName: '',
          gender: '',
          dob: '',
          bloodGroup: '',
          aadharNo: '',
          category: '',
          pupinNo: '',
          income: ''
        },
        academic: {
          subjects: '',
          previousClass: '',
          semester: '',
          session: '',
          rollNo: '',
          totalMarks: '',
          obtainedMarks: '',
          schoolName: '',
          board: ''
        }
      };
    },
    methods: {
      previewImage(event) {
        const file = event.target.files[0];
        if (file) {
          this.studentPicture = URL.createObjectURL(file);
        }
      },
      previewSignature(event) {
        const file = event.target.files[0];
        if (file) {
          this.studentSignature = URL.createObject
          URL.createObjectURL(file);
      }
    },
    submitForm() {
      // Handle form submission logic
      const formData = {
        studentPicture: this.studentPicture,
        studentSignature: this.studentSignature,
        contact: this.contact,
        general: this.general,
        academic: this.academic
      };
      console.log('Form submitted:', formData);
      // You can also send this data to an API or handle it as needed
    }
  }
};
</script>

<style scoped>
/* Add any additional styling here if needed */
</style>
  