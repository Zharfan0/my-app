export default function Home() {
    return (
      <div>
        <h1>AI Deteksi Penyakit Jantung Koroner</h1>
        <p>Silahkan isi form berikut untuk mendeteksi penyakit jantung</p>
        <form>
          <label>
            Gender:
            <select>
              <option value="0">Female</option>
              <option value="1">Male</option>
            </select>
          </label>
          <br />
          <label>
            General Health:
            <select>
              <option value="0">Excellent</option>
              <option value="1">Very Good</option>
              <option value="2">Good</option>
              <option value="3">Fair</option>
              <option value="4">Poor</option>
            </select>
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  