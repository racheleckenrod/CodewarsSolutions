// You have to extract a portion of the file name as follows:

// Assume it will start with date represented as long number
// Followed by an underscore
// You'll have then a filename with an extension
// it will always have an extra extension at the end
// Inputs:
// 1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION

// 1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34

// 1231231223123131_myFile.tar.gz2
// Outputs
// FILE_NAME.EXTENSION

// This_is_an_otherExample.mpg

// myFile.tar
// Acceptable characters for random tests:

// abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-0123456789

// The recommended way to solve it is using RegEx and specifically groups.

// PREP 
// P: we are given a string with the format: numbers,underscore+rest of file name that has possible underscores, a period, file extension, a second period, a second extension.
// R: we are to return the file_name and the first extension only.
// E: if given 1234_new_file.jpeg.anotherex , we are to return new_file.jpeg
// although the suggested methods for solving this problem is regex with groups, I am wanting to solve it finding the index of the first _ then slicing the string. then taking the lastIndex of the (.) and taking another slice.



// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(FileNameExtractor.extractFileName("1_FILE_NAME.EXTENSION.OTHEREXTENSIONadasdassdassds34"),"FILE_NAME.EXTENSION");
//   Test.assertEquals(FileNameExtractor.extractFileName("1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION"),"FILE_NAME.EXTENSION");
//     });
//   });
  

class FileNameExtractor {
    static extractFileName (dirtyFileName) {
        let cleanFileName = dirtyFileName.slice(dirtyFileName.indexOf("_") + 1)
        return cleanFileName.slice(0, cleanFileName.lastIndexOf("."))
    }
}
console.log(FileNameExtractor.extractFileName("1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION"))