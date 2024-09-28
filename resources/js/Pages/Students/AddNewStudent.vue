<template>
  <div class="p-6 bg-gray-100">
    <div class="w-full p-8 mx-auto bg-white rounded-lg shadow-lg">
      <h2 class="mb-8 text-2xl font-bold text-center">Add New Student</h2>

      <!-- Student Profile -->
      <div class="mb-8">
        <h3 class="mb-4 text-lg font-semibold">1. Student Profile</h3>
        <div class="flex flex-col gap-6">
          <div class="flex items-center">
            <input type="file" @change="handleFile('studentPicture', $event)" class="hidden" id="student-picture" accept="image/*" />
            <label for="student-picture" class="px-4 py-2 text-white bg-blue-500 rounded-md cursor-pointer">Upload Student Picture</label>
            <img v-if="studentPicture" :src="studentPicture" alt="Student Picture" class="object-cover w-20 h-20 ml-4 border-2 border-gray-300 rounded-full" />
          </div>
          <div class="flex items-center">
            <input type="file" @change="handleFile('studentSignature', $event)" class="hidden" id="student-signature" accept="image/*" />
            <label for="student-signature" class="px-4 py-2 text-white bg-blue-500 rounded-md cursor-pointer">Upload Student Signature</label>
            <img v-if="studentSignature" :src="studentSignature" alt="Student Signature" class="object-cover w-40 h-20 ml-4 border-2 border-gray-300" />
          </div>
        </div>
      </div>

      <!-- Contact Information -->
      <div class="mb-8">
        <h3 class="mb-4 text-lg font-semibold">2. Contact Information</h3>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <input v-model="contact.mobile1" type="tel" placeholder="Mobile Number 1" class="block w-full p-2 border rounded-md" />
          <input v-model="contact.mobile2" type="tel" placeholder="Mobile Number 2" class="block w-full p-2 border rounded-md" />
          <input v-model="contact.city" type="text" placeholder="City" class="block w-full p-2 border rounded-md" />
          <input v-model="contact.address" type="text" placeholder="Address" class="block w-full p-2 border rounded-md" />
          <input v-model="contact.Email" type="text" placeholder="Email" class="block w-full p-2 border rounded-md" />
        </div>
      </div>

      <!-- General Information -->
      <div class="mb-8">
        <h3 class="mb-4 text-lg font-semibold">3. General Information</h3>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <input v-model="general.registrationNo" type="text" placeholder="Registration Number" class="block w-full p-2 border rounded-md" />
          <input v-model="general.class" type="text" placeholder="Class" class="block w-full p-2 border rounded-md" />
          <input v-model="general.fatherName" type="text" placeholder="Father's Name" class="block w-full p-2 border rounded-md" />
          <input v-model="general.motherName" type="text" placeholder="Mother's Name" class="block w-full p-2 border rounded-md" />
          <select v-model="general.gender" class="block w-full p-2 border rounded-md">
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <input v-model="general.dob" type="date" class="block w-full p-2 border rounded-md" />
          <input v-model="general.bloodGroup" type="text" placeholder="Blood Group" class="block w-full p-2 border rounded-md" />
          <input v-model="general.aadharNo" type="text" placeholder="Aadhar Number" class="block w-full p-2 border rounded-md" />
          <input v-model="general.category" type="text" placeholder="Category" class="block w-full p-2 border rounded-md" />
          <input v-model="general.pupilNo" type="text" placeholder="Pupil Number" class="block w-full p-2 border rounded-md" />
          <input v-model="general.income" type="text" placeholder="Income" class="block w-full p-2 border rounded-md" />
        </div>
      </div>

      <!-- Subjects Information -->
      <div class="mb-8">
        <h3 class="mb-4 text-lg font-semibold">4. Subjects Information</h3>
        <input v-model="academic.subjects" type="text" placeholder="Subjects" class="block w-full p-2 border rounded-md" />
      </div>

      <!-- Previous Exam Information -->
      <div class="mb-8">
        <h3 class="mb-4 text-lg font-semibold">5. Previous Exam Information</h3>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <input v-model="academic.previousClass" type="text" placeholder="Previous Class" class="block w-full p-2 border rounded-md" />
          <input v-model="academic.previousSemester" type="text" placeholder="Previous Semester" class="block w-full p-2 border rounded-md" />
          <input v-model="academic.previousSession" type="text" placeholder="Previous Session" class="block w-full p-2 border rounded-md" />
          <input v-model="academic.rollNo" type="text" placeholder="University/Board Roll Number" class="block w-full p-2 border rounded-md" />
          <input v-model="academic.totalMarks" type="text" placeholder="Total Marks" class="block w-full p-2 border rounded-md" />
          <input v-model="academic.obtainedMarks" type="text" placeholder="Obtained Marks" class="block w-full p-2 border rounded-md" />
          <input v-model="academic.schoolName" type="text" placeholder="School/College Name" class="block w-full p-2 border rounded-md" />
          <input v-model="academic.board" type="text" placeholder="Board/University" class="block w-full p-2 border rounded-md" />
        </div>
      </div>

      <!-- Documents Upload -->
      <div class="mb-8">
        <h3 class="mb-4 text-lg font-semibold">6. Documents Detail</h3>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label class="font-bold">10th Class Certificate</label>
            <input type="file" @change="handleFile('tenthCertificate', $event)" class="block w-full p-2 border rounded-md" />
          </div>
          <div>
            <label class="font-bold">12th Class Certificate</label>
            <input type="file" @change="handleFile('twelfthCertificate', $event)" class="block w-full p-2 border rounded-md" />
          </div>
          <div>
            <label class="font-bold">Character Certificate (Last Institute)</label>
            <input type="file" @change="handleFile('characterCertificateLast', $event)" class="block w-full p-2 border rounded-md" />
          </div>
          <div>
            <label class="font-bold">Diploma Certificate</label>
            <input type="file" @change="handleFile('diplomaCertificate', $event)" class="block w-full p-2 border rounded-md" />
          </div>
          <div>
            <label class="font-bold">Character Certificate (From Diploma)</label>
            <input type="file" @change="handleFile('characterCertificateDiploma', $event)" class="block w-full p-2 border rounded-md" />
          </div>
          <div>
            <label class="font-bold">Aadhar Card Upload</label>
            <input type="file" @change="handleFile('aadharCard', $event)" class="block w-full p-2 border rounded-md" />
          </div>
          <div>
            <label class="font-bold">Parent's Aadhar Card Upload</label>
            <input type="file" @change="handleFile('parentAadharCard', $event)" class="block w-full p-2 border rounded-md" />
          </div>
          <div>
            <label class="font-bold">Last Semester Document Upload</label>
            <input type="file" @change="handleFile('lastSemesterDocument', $event)" class="block w-full p-2 border rounded-md" />
          </div>
          <div>
            <label class="font-bold">Blood Group Report Upload</label>
            <input type="file" @change="handleFile('bloodGroupReport', $event)" class="block w-full p-2 border rounded-md" />
          </div>
          <div>
            <label class="font-bold">Leaving Certificate Upload</label>
            <input type="file" @change="handleFile('leavingCertificate', $event)" class="block w-full p-2 border rounded-md" />
          </div>
        </div>
      </div>

      <!-- Submit Button -->
      <button @click="submitForm" class="px-4 py-2 text-white bg-green-500 rounded-md">Submit</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'; // Import axios for making HTTP requests

export default {
  data() {
    return {
      studentPicture: null,
      studentSignature: null,
      contact: {
        mobile1: '',
        mobile2: '',
        city: '',
        address: '',
        Email: '',
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
        pupilNo: '',
        income: '',
      },
      academic: {
        subjects: '',
        previousClass: '',
        previousSemester: '',
        previousSession: '',
        rollNo: '',
        totalMarks: '',
        obtainedMarks: '',
        schoolName: '',
        board: '',
      },
      documents: {
        tenthCertificate: null,
        twelfthCertificate: null,
        characterCertificateLast: null,
        diplomaCertificate: null,
        characterCertificateDiploma: null,
        aadharCard: null,
        parentAadharCard: null,
        lastSemesterDocument: null,
        bloodGroupReport: null,
        leavingCertificate: null,
      },
    };
  },methods: {
  handleFile(field, event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this[field] = e.target.result; // Store base64 string for image previews
      };
      reader.readAsDataURL(file);
      this.documents[field] = file; // Store the actual file for submission
    }
  },
  async submitForm() {
    const formData = new FormData();

    // Append all data to formData
    formData.append('studentPicture', this.studentPicture);
    formData.append('studentSignature', this.studentSignature);
    
    Object.keys(this.contact).forEach(key => formData.append(`contact[${key}]`, this.contact[key]));
    Object.keys(this.general).forEach(key => formData.append(`general[${key}]`, this.general[key]));
    Object.keys(this.academic).forEach(key => formData.append(`academic[${key}]`, this.academic[key]));

    // Append all documents
    Object.keys(this.documents).forEach(key => {
      if (this.documents[key]) {
        formData.append(`documents[${key}]`, this.documents[key]);
      }
    });

    try {
      const response = await axios.post('/api/student', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Handle success
      console.log('Form submitted successfully:', response.data);
      // You can redirect or show a success message here
      // e.g., this.$router.push('/success'); // Example for redirecting
    } catch (error) {
      // Handle error
      console.error('Error submitting form:', error.response.data); // Log the error response for debugging
      // You can show an error message to the user here
    }
  }
}

};
</script>


<style scoped>
/* Add any component-specific styles here */
</style>
