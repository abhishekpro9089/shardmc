export default function Rules() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 px-6">
      <div className="max-w-5xl mx-auto space-y-12">

        <h1 className="text-4xl font-bold text-orange-500">
          ShardMC Network Rules
        </h1>

        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">📜 Introduction</h2>
          <p className="text-gray-300 leading-relaxed">
            Welcome to ShardMC! We aim to provide all players with the best experience 
            by maintaining a safe, fair, and friendly environment. By logging on to 
            our Minecraft server or using our Discord, you agree to follow these rules.
            Ignorance of the rules is not an excuse.
          </p>
        </section>

        {/* Disclaimers */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">⚠️ Disclaimers</h2>
          <ul className="space-y-2 text-gray-300">
            <li>• Account Sharing: Allowed but discouraged. You are responsible for your account.</li>
            <li>• Autoclicking and illegal mods are strictly forbidden.</li>
            <li>• Playing on non-PC devices may trigger anti-cheat.</li>
            <li>• VPN usage is allowed but discouraged.</li>
          </ul>
        </section>

        {/* Global Rules */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">🌍 Global Rules</h2>
          <div className="space-y-3 text-gray-300">
            <p>• Cheating, hacked clients, macros, autoclickers are prohibited.</p>
            <p>• Advertising other servers is forbidden.</p>
            <p>• Discrimination, racial abuse, and harassment are not tolerated.</p>
            <p>• Doxing, DDoS threats, and blackmailing result in severe punishment.</p>
            <p>• Exploiting bugs or duping items is strictly prohibited.</p>
          </div>
        </section>

        {/* Lifesteal Rules */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">❤️ Lifesteal Rules</h2>
          <ul className="space-y-2 text-gray-300">
            <li>• Heart Farming is not allowed.</li>
            <li>• Multiple accounts AFK farming is restricted.</li>
          </ul>
        </section>

        {/* Screen Share */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">🖥️ Screen Share Rules</h2>
          <p className="text-gray-300">
            If requested by staff, you must comply with screen share. Refusal may
            result in punishment. Non-staff requests require valid video proof.
          </p>
        </section>

        {/* Discord Rules */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">💬 Discord Rules</h2>
          <p className="text-gray-300">
            Users reaching 7+ warning points may receive a permanent ban.
            Spamming, advertising, discrimination, and inappropriate content
            are strictly prohibited.
          </p>
        </section>

        <div className="pt-12 border-t border-white/10 text-gray-500 text-sm">
          For more information, contact a ShardMC staff member.
        </div>

      </div>
    </div>
  );
}
